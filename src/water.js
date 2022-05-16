const chalk = require('chalk');
const Tubes = require('./tubes');
const colors = require('./colors');

const DEFAULT_TUBE_HEIGHT = 4;

function initTubesState(difficulty) {
  let generatedTubes = null;
  let generatedColors = null;
  let tubes = null;

  switch (parseInt(difficulty)) {
    case 1:
      generatedTubes = 4;
      generatedColors = 3;
      tubes = new Tubes(generatedTubes, DEFAULT_TUBE_HEIGHT, generatedColors);
      tubes.state[0] = [1,1,3,2]
      tubes.state[1] = [1,1,2,2]
      tubes.state[2] = [3,3,3,2]
      tubes.state[3] = [0,0,0,0]
      break;
    case 2:
      generatedTubes = Math.floor(Math.random() * 7) + 1;
      generatedColors = generatedTubes - (Math.floor(Math.random() * 2) + 1);
      tubes = new Tubes(generatedTubes, DEFAULT_TUBE_HEIGHT, generatedColors);
      break;
    case 3:
      generatedTubes = Math.floor(Math.random() * 9) + 1;
      generatedColors = generatedTubes - (Math.floor(Math.random() * 2) + 1);
      tubes = new Tubes(generatedTubes, DEFAULT_TUBE_HEIGHT, generatedColors);
      break;
    case 4:
      generatedTubes = Math.floor(Math.random() * 11) + 1;
      generatedColors = generatedTubes - (Math.floor(Math.random() * 2) + 1);
      tubes = new Tubes(generatedTubes, DEFAULT_TUBE_HEIGHT, generatedColors);
      break;
    case 5:
      generatedTubes = Math.floor(Math.random() * 14) + 1;
      generatedColors = generatedTubes - (Math.floor(Math.random() * 2) + 1);
      tubes = new Tubes(generatedTubes, DEFAULT_TUBE_HEIGHT, generatedColors);
      break;
    default:
      throw new Error('difficulty must be integer from 1 to 5')
  }

  return tubes;
}

function printFullTubes(tubeCount, rowCount, tubeHeight = DEFAULT_TUBE_HEIGHT) {
  if (!(parseInt(tubeCount) > 0 && parseInt(rowCount) > 0 && parseInt(tubeHeight) > 0)) {
    throw new Error('parameters must be positive integer');
  } 
  
  if (parseInt(rowCount) === 1) {
    console.clear();
    for (let i = 0; i <= tubeHeight; i++) {
      if (i != tubeHeight) {
        for (let j1 = 0; j1 < tubeCount; j1++) {
          process.stdout.write(randomColorStyle('|■|\t'));
        }
      } else {
        for (let j2 = 0; j2 < tubeCount; j2++) {
          process.stdout.write(`/${j2 + 1}\\\t`);
        }
      }
      process.stdout.write('\n');
    }
  } else {
    process.stdout.write(`${tubeCount} items in ${rowCount}  rowCount ■\n`);
  }
}

function randomColorStyle(T) {
  let result = null;
  let value = colors[Math.floor(Math.random() * colors.length)]
  switch (value) {
    case 'red':
      result = chalk.red(T);
      break;
    case 'redBright':
      result = chalk.redBright(T);
      break;
    case 'yellow':
      result = chalk.yellow(T);
      break;
    case 'yellowBright':
      result = chalk.yellowBright(T);
      break;
    case 'blue':
      result = chalk.blue(T);
      break;
    case 'blueBright':
      result = chalk.blueBright(T);
      break;
    case 'green':
      result = chalk.green(T);
      break;
    case 'greenBright':
      result = chalk.greenBright(T);
      break;
    case 'magenta':
      result = chalk.magenta(T);
      break;
    case 'magentaBright':
      result = chalk.magentaBright(T);
      break;
    case 'cyan':
      result = chalk.cyan(T);
      break;
    case 'cyanBright':
      result = chalk.cyanBright(T);
      break;
    case 'white':
      result = chalk.white(T);
      break;
    case 'whiteBright':
      result = chalk.whiteBright(T);
      break;
    case 'grey':
      result = chalk.grey(T);
      break;
    default:
      result = T;
      break;
  }
  return result;
}



module.exports = {
  initTubesState,
  printFullTubes
}