import React, { Component } from 'react';

import TvShow from './TvShow'

class TVShowList extends Component {

  eachShow = () => {
    return this.props.shows.map(show => {
      return <TvShow show={show} key={show.id}/>
    })
  }


  render() {
    return (
      <div className="tvShowList">
        {this.eachShow()}
      </div>
    );
  }

}

export default TVShowList;
