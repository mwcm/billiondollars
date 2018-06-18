import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import Table from './components/Table.js'
import HotTable from 'react-handsontable'
import data from  './money.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.handsontableData = data;
    console.log(this.handsontableData);
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
              data={this.handsontableData}
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
