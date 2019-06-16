import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datasetId: '',
      datasetBody: {},
      dealerId: 0,
      vehicleId: null
    }
  }
  
  componentDidMount() {

    const { datasetBody, datasetId, dealerId, vehicleId } = this.state;

    const getDatasetId = () => fetch('/api/datasetId', {
              method: 'GET',
              mode: 'cors',
              cache: 'default',
              credentials: 'same-origin',
            });

    const getDatasetBody = () => fetch('./model.json', {
              method: 'GET',
              mode: 'cors',
              cache: 'default',
              credentials: 'same-origin',
          });

    const postDataset =  () => fetch(`/api/${datasetId}/answer`, {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow', 
            referrer: 'no-referrer', 
            body: JSON.stringify(datasetBody), 
        });

    const getDealerInfo = () => fetch(`/api/${datasetId}/dealers/{dealerId}`, {
              method: 'GET',
              mode: 'cors',
              cache: 'default',
              credentials: 'same-origin',
        });

    const getVehicleIdList = () => fetch(`/api/${datasetId}/vehicles`, {
              method: 'GET',
              mode: 'cors',
              cache: 'default',
              credentials: 'same-origin',
        });

    const getVehicleInfo = () => fetch(`/api/${datasetId}/vehicles/${vehicleId}`, {
              method: 'GET',
              mode: 'cors',
              cache: 'default',
              credentials: 'same-origin',
        });

    getDatasetId()
        .then(response => response.json())
        .then(data => {
          console.log('DatasetId: ', data);
          this.setState({
            datasetId: data.datasetId
          });
        })
        .catch(error => console.error('Error:', error));

    getDatasetBody()
      .then(response => response.json())
      .then(data => {
        console.log('Dataset Body: ', data);
        this.setState({
          datasetBody: data
        });
      })
      .catch(error => console.error('Error:', error));


  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    const { datasetId, datasetBody } = this.state;

    if (datasetId !== prevState.datasetId) {
      let cheatDatasetId = 'ArK2aQHx1gg';
      const postDataset =  () => fetch(`/api/${cheatDatasetId}/answer`, {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow', 
            referrer: 'no-referrer', 
            body: JSON.stringify(datasetBody), 
        });

    postDataset()
      .then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));

    //   axios({
    //       method: 'post',
    //       url: `/api/${cheatDatasetId}/answer`,
    //       data: datasetBody
    //     })
    //     .then(function (response) {
    //       console.log('Success: ', response);
    //     })
    //     .catch(function (error) {
    //       console.log('Error: ', error);
    //     });
    }

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
