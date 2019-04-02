const {
  makeWorld,
  findNeighboursPositions,
  findAliveposition,
  extractSize,
  updateWorld,
  extractValidPosition,
  generateNextWorld
} = require("./gameLibrary.js");

const NextGeneration = function(currGeneration, bounds) {
  let dimensions = extractSize(bounds);
  let world = makeWorld(dimensions);
  let { topLeft, bottomRight } = bounds;
  currGeneration = extractValidPosition(currGeneration, topLeft, "-");
  world = updateWorld(world, currGeneration);
  let worldDetails = { world, dimensions };
  worldDetails.world = generateNextWorld(worldDetails);
  let alivePosition = findAliveposition(worldDetails);
  return extractValidPosition(alivePosition, topLeft, "+");
};
export default NextGeneration;
