import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datasetId: '',
      datasetBody: {},
      isDatasetPosted: false,
      dealerInfo: null,
      vehicleIds: [],
      vehicles: []
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

    const { datasetId, datasetBody, isDatasetPosted, vehicleIds } = this.state;
    const cheatDatasetId = 'ArK2aQHx1gg';
    const cheatDealerId = '968316708';

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

    const getDealerInfo = () => fetch(`/api/${cheatDatasetId}/dealers/${cheatDealerId}`, {
          method: 'GET',
          mode: 'cors',
          cache: 'default',
          credentials: 'same-origin',
    });

    const getVehicleIdList = () => fetch(`/api/${cheatDatasetId}/vehicles`, {
          method: 'GET',
          mode: 'cors',
          cache: 'default',
          credentials: 'same-origin',
    });

    if (datasetId !== prevState.datasetId) {

      // start to post dataset with cheatDatasetId due to datasetId keeping changing
      postDataset()
        .then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .then( () => {
          this.setState({
            isDatasetPosted: true
          });
        })
        .catch(error => console.error('Error:', error));

    }

    if (isDatasetPosted && isDatasetPosted !== prevState.isDatasetPosted ) {

      // start to get dealers information
      getDealerInfo()
        .then(response => response.json())
        .then(data => {
          console.log('Dealer Info: ', data);
          this.setState({
            dealerInfo: data
          });
        })
        .catch(error => console.error('Error:', error));

      getVehicleIdList()
        .then(response => response.json())
        .then(data => {
          console.log('Vehicle ID list: ', data);
          this.setState({
            vehicleIds: data.vehicleIds
          });
        })
        .catch(error => console.error('Error:', error));

    }

    if (vehicleIds.length > 0 && vehicleIds !== prevState.vehicleIds) {
      let vehicleInfoArr = [];
      vehicleIds.forEach( vehicleId => {
        const getVehicleInfo = () => fetch(`/api/${cheatDatasetId}/vehicles/${vehicleId}`, {
              method: 'GET',
              mode: 'cors',
              cache: 'default',
              credentials: 'same-origin',
        });

        getVehicleInfo()
          .then(response => response.json())
          .then(data => {
            if (JSON.stringify(data.dealerId) === cheatDealerId) {
              vehicleInfoArr.push(data);

              this.setState({
                vehicles: vehicleInfoArr
              });

            }

          })
          .catch(error => console.error('Error:', error));

      })

      this.setState({
        vehicles: vehicleInfoArr
      });

    }

  }

  
  render() {

    const { dealerInfo, vehicles } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          {dealerInfo && <h2>{dealerInfo.dealerId} - {dealerInfo.name}</h2>}
        </div>
        <Main vehicles={vehicles} />
      </div>
    );
  }
}

export default App;
