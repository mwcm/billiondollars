import React from 'react'
import PropTypes from 'prop-types'
import Row from './Row'

// https://flaviocopes.com/react-spreadsheet/

export default class Table extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);

    // TODO: how to load array from file here using react virtualized
    this.state = {
      data: {0:{0:'a',1:'b',2:'c',3:'d',4:'e'},
             1:{0:'a',1:'b',2:'c',3:'d',4:'e'}},
      spent: []
    }
  }

  //https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
  handleClick = (e) => {
    e.preventDefault()
    const min = 1;
    const max = 20000;
    let y = 0;
    let x = 0;
    const cellNumber = 0;

    while (true){
      const cellNumber = min + Math.random() * (max - min);

      // TODO: how to load data array in first, REACT VIRTUALIZE

      if(this.state.spent[cellNumber] !== 1){
        let current = this.state.spent[cellNumber]
        this.setState({spent: current});
        break;
      }
    }

    y = Math.ceil(cellNumber / 5);
    x = cellNumber % 5;

    //this.setState({ random: this.state.random + rand });
    const modifiedData = Object.assign({}, this.state.data)
    if (!modifiedData[y]) modifiedData[y] = {}
    modifiedData[y][x] = "jjj" // or add padding?
    this.setState({data : modifiedData})
  }

  updateCells = () => {
    this.forceUpdate()
  }

  //handleChangedCell = ({ x, y }, value) => {
    //const modifiedData = Object.assign({}, this.state.data)
    //if (!modifiedData[y]) modifiedData[y] = {}
    //modifiedData[y][x] = value
    //this.setState({ data: modifiedData })
  //}

  render() {
    const rows = []

    for (let y = 0; y < this.props.y + 1; y += 1) {

    //{this.props.item.map( item => )} <-- something like this is more elegant
      const rowData = this.state.data[y] || {}
      rows.push(
        <Row
          handleChangedCell={this.handleClick}
          updateCells={this.updateCells}
          key={y}
          y={y}
          x={this.props.x + 1}
          rowData={rowData}
        />,
      )
    }
    return (
      <div>
        <button onClick={this.handleClick}> BUTTON </button>
        {rows}
      </div>
    )
  }
}
        // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
        // <button onClick={(e) => this.spend(e, '{0,0}')}></button>
        // <button onClick={this.spend.bind(this, '{0,0}')}></button>

Table.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
}
