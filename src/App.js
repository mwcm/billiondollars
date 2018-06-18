import React, { Component } from 'react';
import {Column, Table} from 'react-virtualized'
//import Table from './components/Table.js'
import logo from './logo.svg';
import 'react-virtualized/style.css' //only import once
import './App.css';

// <Table x={4} y={3999} />

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <div style={{width:'100%'}}>

            <Table
              width={400}
              height={300}
              headerHeight={20}
              rowHeight={30}
              rowCount={list.length}
              rowGetter={({ index }) => list[index]}
            >
              <Column
                label='Col1'
                dataKey='col1'
                width={100}
              />

              <Column
                label='Col2'
                dataKey='col2'
                width={100}
              />

              <Column
                label='Col3'
                dataKey='col3'
                width={100}
              />

              <Column
                label='Col4'
                dataKey='col4'
                width={100}
              />
            </Table>
          </div>
      </div>
    );
  }
}

export default App;
