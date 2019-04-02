import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import NextGeneration from "./gameOfLife";

function CreateTable() {
  let RenderTable = () => {
    let table = [];
    for (let i = 0; i < 10; i++) {
      let children = [];
      for (let j = 0; j < 10; j++) {
        children.push(
          <td className="column" key={i + `_` + j} id={i + `_` + j} />
        );
      }
      table.push(<tr>{children}</tr>);
    }
    return table;
  };
  return <table>{RenderTable()}</table>;
}

class GameOfLife extends React.Component {
  constructor(props) {
    super(props);
    this.updateCell = this.updateCell.bind(this);
    let currentGeneration = [[0, 1], [1, 1], [2, 1]];
    let bounds = { topLeft: [0, 0], bottomRight: [10, 10] };
    this.state = {
      bounds: bounds,
      currentGeneration: currentGeneration,
      nextGeneration: NextGeneration(currentGeneration, bounds)
    };
  }

  componentDidMount() {
    setInterval(this.updateCell, 1000);
  }

  updateCell() {
    this.state.currentGeneration.map(cell => {
      document.getElementById(cell[0] + `_` + cell[1]).className = "column";
    });
    let nextgeneration = this.state.nextGeneration;
    nextgeneration.map(cell => {
      document.getElementById(cell[0] + `_` + cell[1]).className = "aliveCell";
    });
    this.setState({
      currentGeneration: this.state.nextGeneration,
      nextGeneration: NextGeneration(
        this.state.nextGeneration,
        this.state.bounds
      )
    });
  }

  render() {
    return <CreateTable />;
  }
}

ReactDOM.render(<GameOfLife />, document.getElementById("root"));
serviceWorker.unregister();
