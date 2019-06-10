import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Main from './Main';

class App extends Component {
  
  componentDidMount() {
    // this.fetchData();
  }

  fetchData = () => {

    let url = 'http://api.coxauto-interview.com/api/datasetId';

    // return fetch('http://api.coxauto-interview.com/api/datasetId', {
    //           method: 'GET',
    //           mode: 'cors',
    //           cache: 'default',
    //           credentials: 'same-origin',
    //         })
    //         .then(response => response.json())
    //         .catch(error => console.error('Error:', error))
    //         .then(response => console.log('Success:', JSON.stringify(response)));

    return axios.get('http://api.coxauto-interview.com/api/datasetId')
      .then(response => console.log('Response:', response))
      .catch(error => console.log('Error', error));
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
