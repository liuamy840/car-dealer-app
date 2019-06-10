import React, { Component } from 'react';
import './Main.css';

class Main extends Component {

  render() {
    return (
      <div className="main">
        <h2 className="title">Vehicles</h2>
        <div className="grid-container"> 
          <div>
            <img src="https://logo.clearbit.com/honda.com" />
            <p>Year: 2013</p>
            <p>Make: </p>
            <p>Model: Honda CR-V</p>
          </div>
          <div>
            <img src="https://logo.clearbit.com/bmwusa.com" />
            <p>Year: 2013</p>
            <p>Make: </p>
            <p>Model: Honda CR-V</p>
          </div>
          <div>
            <img src="https://logo.clearbit.com/toyota.com" />
            <p>Year: 2013</p>
            <p>Make: </p>
            <p>Model: Honda CR-V</p>
          </div>
        </div>
        <div className="pagination-container">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
      </div>
    )
  }

}

export default Main;