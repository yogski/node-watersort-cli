const water = require('./src/water');
const Tubes = require('./src/tubes');
const prompt = require("prompt-sync")({ sigint: true });

const actions = [
  'pour',
  'new'
]

let finish = false;
let tubeState = null;
console.log('Welcome to Water Sort CLI Game')
let difficulty = prompt('From scale of 1 (very-easy) to 5 (very-hard), choose the game difficulty:');
tubeState = water.initTubesState(parseInt(difficulty));
tubeState.displayState();

while (!finish) {
  console.log('Choose action:\n1. pour (from_index) (to_index)\n2. new\n3. quit')
  let action = prompt();
  let parsedAction = action.split(' ');
  console.clear()
  switch (parsedAction[0]) {
    case 'pour':
      tubeState.pour(parseInt(parsedAction[1]), parseInt(parsedAction[2]));
      tubeState.displayState();
      break;
    case 'new':
      tubeState = water.initTubesState(parseInt(difficulty));
      tubeState.displayState();
      break;
    case 'quit':
      finish = true;
      break;
    default:
      break;
  }
}