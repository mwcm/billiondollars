import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HotTable from 'react-handsontable'
import Papa from 'papaparse'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : []
    }

    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    var csvFile = require('./money.csv')
    Papa.parse(csvFile, {
      header: false,
      download: true,
      skipEmptyLines:true,
      complete: this.updateData
    });
  }

  updateData(result) {
    //console.log(this.state.data)
    const data = result.data;
    this.setState({data}); // ES syntax: this.setState({data})
    console.log(window.devicePixelRatio);
    console.log(window.innerWidth)
    //console.log(this.state.data)
  }

  render() {
    return (
      //<div className="App">
        //<header className="App-header">
          //<img src={logo} className="App-logo" alt="logo" />
          //<h1 className="App-title">Welcome to React</h1>
        //</header>
        //<p className="App-intro">
          //To get started, edit <code>src/App.js</code> and save to reload.
        //</p>
      <HotTable
        stretchH="all"
        disableVisualSelection={true}
        readOnly={true}
        data={this.state.data}
        colHeaders={false}
        rowHeaders={false}
        strechH="all"/>
      //</div>
    );
  }
}

export default App;
