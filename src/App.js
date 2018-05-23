import React, { Component } from 'react';
import Adapter from './Adapter';
import TVShowList from './Components/TVShowList';
import Filter from './Components/Filter';
import './App.css';

class App extends Component {

  state = {
    shows: [],
    sorted: null
  }

  componentDidMount(){
    Adapter.getShows()
    .then(json => {
      this.setState({shows: json})
    })
  }

  handleSort = (type) => {
    const sorted = this.state.shows.filter(show => show.type === type)
    this.setState({sorted: sorted})
  }

  showAll = () => {
    this.setState({sorted: null})
  }

  render = () => {
    console.log(this.state);
    return (
      <div className="App">
        <TVShowList shows={this.state.sorted ? this.state.sorted : this.state.shows}/>
        <Filter shows={this.state.shows} showAll={this.showAll} handleSort={this.handleSort}/>
      </div>
    );
  }
}

export default App;
