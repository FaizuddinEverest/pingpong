const directionDeltas = {
  N: {
    f: [0, 1],
    b: [0, -1],
    r: [1, 0],
    l: [-1, 0],
  },
  S: {
    f: [0, -1],
    b: [0, 1],
    r: [1, 0],
    l: [-1, 0],
  },
  E: {
    r: [0, 1],
    l: [0, -1],
    f: [1, 0],
    b: [-1, 0],
  },
  W: {
    l: [0, 1],
    r: [0, -1],
    b: [1, 0],
    f: [-1, 0],
  },
};

const updateLocation = (current, delta) => [
  current[0] + delta[0],
  current[1] + delta[1],
];

function move(commands, calculatedDeltas, initialLocation) {
  return commands
    .split("")
    .reduce(
      (current, command) => updateLocation(current, calculatedDeltas[command]),
      initialLocation
    );
}

const rover = (initialLocation, initialDirection) => {
  return (commands) =>
    move(commands, directionDeltas[initialDirection], initialLocation);
};

export default rover;
