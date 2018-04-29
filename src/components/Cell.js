import React, {Component} from 'react'
import PropTypes from 'prop-types'

// https://flaviocopes.com/react-spreadsheet/

/**
 * Cell represents the atomic element of a table
 */
export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //editing: false,
      value: props.value,
    }

    // TODO: do we need these?
    this.timer = 0
    this.delay = 200
    this.prevent = false
  }


  /**
   * Called by the `onBlur` or `onKeyPressOnInput` event handlers,
   * it escalates the value changed event, and restore the editing
   * state to `false`.
   */
  hasNewValue = (value) => {
    this.props.onChangedValue(
      {
        x: this.props.x,
        y: this.props.y,
      },
      value
    )
  }

  /**
   * Calculates a cell's CSS values
   */
  calculateCss = () => {
    const css = {
      width: '20%',
      padding: '4px',
      margin: '0',
      height: '50px',
      boxSizing: 'border-box',
      position: 'relative',
      display: 'inline-block',
      color: 'black',
      border: '1px solid #cacaca',
      textAlign: 'center',
      verticalAlign: 'top',
      fontSize: '24px',
      lineHeight: '15px',
      overflow: 'hidden',
      fontFamily: 'Calibri, \'Segoe UI\', Thonburi, Arial, Verdana, sans-serif',
    }

    return css
  }

  render() {
    const css = this.calculateCss()
    return (
      <span
        style={css}
        role="presentation">
        {this.props.value}
      </span>
    )
  }
}

Cell.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
}
