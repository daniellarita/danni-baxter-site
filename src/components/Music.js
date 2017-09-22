import React, { Component } from 'react';

class Music extends Component {
  constructor(){
    super();
    this.state = {
      tracks: [
        'spotify:track:0LDBn7yVxdyeYeQ7HD5BVU',
        'spotify:track:3kxfsdsCpFgN412fpnW85Y',
        'spotify:track:1q8gelFgFYUwoWpQV7WNCe',
        'spotify:track:6W5Y6TSovS7gxOy6CfB9eA',
        'spotify:track:4QEaE0Yj9oCvCzehPlZ1On',
        'spotify:track:4qH8fQ5Ub2r6llHnrRGM3w',
        'spotify:track:0NWPxcsf5vdjdiFUI8NgkP',
        'spotify:track:4J4gApJKSC0himDViFotdy',
        'spotify:track:5rnCU9iGOM2rQZZssa87Cg',
        'spotify:track:2aoo2jlRnM3A0NyLQqMN2f',
        'spotify:track:2t5GyUfFoZg3E8ak3i7dVP',
        'spotify:track:5SUBSmYR8I8spFXgEDcO28',
        'spotify:track:7GaflNzPucLzU07hW3j8d4',
        'spotify:track:2XyVlq12Nc38bJA22014Ts',
        'spotify:track:3Z25k4ZF6QENy2d9YatsM5',
        'spotify:track:5uaRmmYZor8RE7O8yKLy6n',
        'spotify:track:1LfWibYjk0TD8YNPtzym9A'
      ],
      randomIndex: 0,
      uri: 'spotify:track:0NWPxcsf5vdjdiFUI8NgkP',
      selected: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      randomIndex: Math.floor(Math.random()*this.state.tracks.length)
    })
    console.log(this.state.randomIndex)
    // console.log(this.state.selected[this.state.randomIndex])
    // console.log(this.state.selected.indexOf(this.state.randomIndex))
    const randIndexAsStr = this.state.selected+'';
    console.log(randIndexAsStr)
    if (this.state.selected.indexOf(randIndexAsStr) === -1){
      this.setState({
        selected: this.state.selected.push(this.state.randomIndex)
      })
      console.log(this.state.selected);
    }
    this.setState({
      uri: this.state.tracks[this.state.randomIndex]
    })

  }

  render() {
    return (
      <div className="music">
        <div className="music-button">
          <button
            onClick={ this.handleSubmit }
            type="button"
            className="btn btn-default"
          >
            Click here to see one of my favorite songs!
          </button>
        </div>
        <iframe
          src={ `https://open.spotify.com/embed?uri=${this.state.uri}` } width="300"
          height="380"
          frameBorder="0"
          allowTransparency="true">
        </iframe>
      </div>
    );
  }
}

export default Music;
