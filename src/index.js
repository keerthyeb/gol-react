import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NextGeneration from "./gameOfLife";

class GameOfLife extends React.Component {
  constructor(props) {
    super(props);
    this.updateCell = this.updateCell.bind(this);
    this.initializeAliveCell = this.initializeAliveCell.bind(this);
    this.startGame = this.startGame.bind(this);

    this.bounds = { topLeft: [0, 0], bottomRight: [15, 15] };
    this.state = { aliveCells: [] };
  }

  startGame() {
    setInterval(this.updateCell, 1000);
  }

  RenderTable = () => {
    let table = [];
    for (let row = 0; row < 15; row++) {
      let children = [];
      this.createRow(children, row);
      table.push(<tr key={row}>{children}</tr>);
    }
    return table;
  };

  createRow(children, row) {
    for (let column = 0; column < 15; column++) {
      children.push(
        <td
          className="column"
          key={row + `_` + column}
          id={row + `_` + column}
          onClick={this.initializeAliveCell}
        />
      );
    }
  }

  initializeAliveCell(event) {
    let id = event.target.id.split("_");
    document.getElementById(event.target.id).className = "aliveCell";
    let aliveCells = this.state.aliveCells;
    aliveCells.push(id);
    this.setState({
      aliveCells
    });
  }

  updateCell() {
    this.state.aliveCells.map(cell => {
      document.getElementById(cell[0] + `_` + cell[1]).className = "column";
    });
    let nextgeneration = NextGeneration(this.state.aliveCells, this.bounds);
    nextgeneration.map(cell => {
      document.getElementById(cell[0] + `_` + cell[1]).className = "aliveCell";
    });
    this.setState({
      aliveCells: nextgeneration
    });
  }

  render() {
    return (
      <div>
        <table>
          <tbody>{this.RenderTable()}</tbody>
        </table>
        <button onClick={this.startGame}>Start</button>
      </div>
    );
  }
}

ReactDOM.render(<GameOfLife />, document.getElementById("root"));
