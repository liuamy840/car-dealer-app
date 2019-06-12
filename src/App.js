import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Main from './Main';

class App extends Component {


  
  componentDidMount() {
    this.fetchData();
  }

  /**
   * @function fetchData
   * @description fetch the datasetId
   */
  fetchData = () => {

    let datasetId = '';
    let datasetBody = {};
    let dealerId = 0;
    let vehicleId;

    const getDatasetId = fetch('/api/datasetId', {
              method: 'GET',
              mode: 'cors',
              cache: 'default',
              credentials: 'same-origin',
            });

    const getDatasetBody = fetch('./model.json', {
              method: 'GET',
              mode: 'cors',
              cache: 'default',
              credentials: 'same-origin',
          })

    const postDataset =  axios({
              method: 'post',
              url: `/api/{datasetId}/answer`,
              data: datasetBody,
            });

    const getDealerInfo = fetch(`/api/{datasetId}/dealers/{dealerId}`, {
              method: 'GET',
              mode: 'cors',
              cache: 'default',
              credentials: 'same-origin',
    });

    const getVehicleIdList = fetch(`/api/{datasetId}/vehicles`, {
              method: 'GET',
              mode: 'cors',
              cache: 'default',
              credentials: 'same-origin',
    });

    const getVehicleInfo = fetch(`/api/{datasetId}/vehicles/{vehicleId}`, {
              method: 'GET',
              mode: 'cors',
              cache: 'default',
              credentials: 'same-origin',
    });


    return fetch('/api/datasetId', {
              method: 'GET',
              mode: 'cors',
              cache: 'default',
              credentials: 'same-origin',
            })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', JSON.stringify(response)));

    // return axios.get('/api/datasetId')
    //   .then(response => console.log('Response:', response))
    //   .catch(error => console.log('Error', error));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>DealerId</h2>
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
