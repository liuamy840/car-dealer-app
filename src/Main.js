import React, { Component } from 'react';
import './Main.css';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { vehicles } = this.props;

    const vehicleList = vehicles.map(vehicle => 
        <div key={vehicle.vehicleId} className="vehicle-container">
            <div className="image-container">
              <img src={`https://logo.clearbit.com/${vehicle.make.toLowerCase()}.com`} />
            </div>
            <p>Year: {vehicle.year}</p>
            <p>Make: {vehicle.make}</p>
            <p>Model: {vehicle.model}</p>
        </div>
      );

    return (
      <div className="main">
        <h2 className="title">Vehicles</h2>
        <div className="grid-container"> 
          {vehicleList}
        </div>
        <div className="pagination-container">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a href="#">&raquo;</a>
        </div>
      </div>
    )
  }

}

export default Main;