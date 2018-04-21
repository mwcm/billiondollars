import React from 'react'
import PropTypes from 'prop-types'
import Row from './Row'

// https://flaviocopes.com/react-spreadsheet/

export default class Table extends React.Component {
  constructor(props) {
    super(props)


    // TODO: how to load array from file here using react virtualized
    this.state = {
      data: {0:{0:'a',1:'b',2:'c',3:'d',4:'e'},
             1:{0:'a',1:'b',2:'c',3:'d',4:'e'}},
    }
  }

  //https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
  spend = (x , y) => (e) => {
    console.log('aeiou')
    console.log(x,y)
    const modifiedData = Object.assign({}, this.state.data)
    if (!modifiedData[y]) modifiedData[y] = {}
    modifiedData[y][x] = "jjj" // or add padding?
    console.log(modifiedData)
    this.setState({data : modifiedData})
  }

  handleChangedCell = ({ x, y }, value) => {
    const modifiedData = Object.assign({}, this.state.data)
    if (!modifiedData[y]) modifiedData[y] = {}
    modifiedData[y][x] = value
    this.setState({ data: modifiedData })
  }

  updateCells = () => {
    this.forceUpdate()
  }

  render() {
    const rows = []

    for (let y = 0; y < this.props.y + 1; y += 1) {
      const rowData = this.state.data[y] || {}
      rows.push(
        <Row
          spend = {this.spend}
          handleChangedCell={this.handleChangedCell}
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
        <button onClick={this.spend(1, 1)}> BUTTON </button>
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
