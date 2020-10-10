import React, { Component } from 'react';
import './App.css';
import Tile from './Tile';

const columns = 4
const rows = 4

class App extends Component {

  state = {
    Tiles: []
  };

createTiles = () => {
  var i;
  var j;
  var newTiles = []
  for (i=0; i<rows; i++) {
    for (j=0; j<columns; j++) {
      var number = j + i*columns
      if (number !== columns*rows-1) {
        var newTile = <Tile column={j} row={i} key={number} number={number} />;
        newTiles = [...newTiles, newTile]
      }
    }
  }
  this.setState({ Tiles: newTiles });
}

componentDidUpdate() {}

componentDidMount() {
  this.createTiles();
}

render() {
  return (
    <div className="App">
      <h1>React n-puzzle</h1>
      <button onClick={this.createTiles}>Slumpa</button>
      <section className="Grid">
        {this.state.Tiles}
      </section>
    </div>
  );
}
}

export default App;
