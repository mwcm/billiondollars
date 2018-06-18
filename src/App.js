import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HotTable from 'react-handsontable'
import Papa from 'papaparse'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    // how to load data properly
    this.state = {
      data : [[1,2,3,4]]
    }
    //console.log(this.handsontableData);
    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    var csvFile = require('./money_2.csv')
    Papa.parse(csvFile, {
      header: false,
      download: true,
      skipEmptyLines:true,
      complete: this.updateData
    });
  }

  updateData(result) {
    console.log(this.state.data)
    const data = result.data;
    this.setState({data}); // ES syntax: this.setState({data})
    console.log(this.state.data)
    //this.forceUpdate()
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
          <div id="App" className="App" style={{width:'100%'}}>
            <HotTable
              data={this.state.data}
              colHeaders={false}
              rowHeaders={false}
              width="600"
              height="300"
              strechH="all"/>
          </div>
      //</div>
    );
  }
}

export default App;
