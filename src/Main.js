import React, { Component } from 'react';
import './Main.css';

class Main extends Component {

  render() {
    return (
      <div className="main">
        <h2>Vehicles</h2>
        <div className="grid-container"> 
          <div>
            1
          </div>
          <div>
            2
          </div>
          <div>
            3
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