import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Cell from './Cell'

// https://flaviocopes.com/react-spreadsheet

const Row = (props) => {
  const cells = []
  const y = props.y
  for (let x = 0; props.x > x; x += 1){
    cells.push(
      <Cell
        key={`${x}-${y}`}
        y={y}
        x={x}
        spend={props.spend}
        onChangedValue={props.handleChangedCell}
        updateCells={props.updateCells}
        value={props.rowData[x] || ''}
      />,
    )
  }
  return(
    <div>
    {cells}
    </div>
  )
}

Row.propTypes = {
  handleChangedCell : PropTypes.func.isRequired,
  updateCells: PropTypes.func.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  rowData: PropTypes.shape({
    string: PropTypes.string,
  }).isRequired,
}

export default Row
