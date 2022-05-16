class Tubes {
  constructor(tubeCount, size, colorCount) {
    this.state = Array.apply(0, Array(tubeCount)).map((i) => {
      return Array.apply(0, Array(size)).map((i) => { return 0 })
    });
    this.size = size;
    this.colors = colorCount + 1;
    this.tops = Array.apply(0, Array(tubeCount));
  }

  displayState() {
    console.log(this.state);
  }

  displayTube(index) {
    console.log(this.state[index])
  }

  isStateSolved() {

  }

  isTubeSolved(index) {
    let singleColor = null;
    for (let i = 0; i < this.size; i++) {
      if (this.state[index][i] === null) {
        return false
      } else {
        if (singleColor === null) {
          singleColor = this.state[index][i]
        } else {
          if (singleColor != this.state[index][i]) {
            return false
          }
        }
      }
    }
    return true
  }

  pour(fromIndex, toIndex) {
    if (this.state[toIndex][this.size-1] !== null || this.state[fromIndex][0] === null) {
      return this.state;
    }

    


  }
}

module.exports = Tubes