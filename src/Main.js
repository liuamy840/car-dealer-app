import React, { Component } from 'react';
import './Main.css';

class Main extends Component {

  render() {
    const { vehicles } = this.props;

    const vehicleList = vehicles.map(vehicle => 
        (<div key={vehicle.vehicleId} className="vehicle-container">
            <div className="image-container">
              <img src={`https://logo.clearbit.com/${vehicle.make.toLowerCase()}.com`} 
                   alt="Car Logo" />
            </div>
            <p>Year: {vehicle.year}</p>
            <p>Make: {vehicle.make}</p>
            <p>Model: {vehicle.model}</p>
         </div>
        )
      );

    const pages = Math.ceil(vehicles.length / 3);
    const pageLinks = [];
    for (let i = 0; i < pages; i++) {
      pageLinks.push(
        <a key={`link-${i}`} href="javascript:void(0);">{i + 1}</a>
      );
    }

    return (
      <div className="main">
        <h2 className="title">Vehicles</h2>
        <div className="grid-container"> 
          {vehicleList}
        </div>
        <div className="pagination-container">
          <a href="javascript:void(0);">&laquo;</a>
          {pageLinks}
          <a href="javascript:void(0);">&raquo;</a>
        </div>
      </div>
    );
  }

}

export default Main;