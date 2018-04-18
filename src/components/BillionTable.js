import React, { Component } from 'react';
import Row from './Row'

function getRows() {
  let baseUnit = 5000
  let row = Array(10).fill(baseUnit)
  let rows = Array(20000).fill(row)
  return rows;
}

const items = getRows()

// https://flaviocopes.com/react-spreadsheet/
//
export default class BTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: items,
    }
  }

  render() {
    const rows =[]

    for (let y = 0; this.props.y +1 > y; y += 1){
      const rowData = this.state.data[y] || {}
      rows.push(
        <Row
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
        {rows}
      </div>
    )
  }

}
