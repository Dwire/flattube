import React, { Component } from 'react';


class Filter extends Component {


  listOfShowTypes = () => {
    return this.props.shows.map((s)=> {
      return s.type
    }).unique()
  }

  typeList = () => {
    return this.listOfShowTypes().map(type => {
      return <li onClick={() => this.props.handleSort(type)}><button className="btn">{type}</button></li>
    })
  }

  render = () => {
    return (
      <div className="filter">
        <button onClick={this.props.showAll} className="btn">Show ALL</button>
        <ul>
          {this.typeList()}
        </ul>
      </div>
    );
  }
}

export default Filter;



Array.prototype.unique = function() {
  var arr = [];
  for(var i = 0; i < this.length; i++) {
      if(!arr.includes(this[i])) {
          arr.push(this[i]);
      }
  }
  return arr;
}
