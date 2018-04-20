import React, {Component} from 'react'
import PropTypes from 'prop-types'

// https://flaviocopes.com/react-spreadsheet/


// removed editing variable, as editing is disabled
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
    this.display = this.determineDisplay(
      { x: props.x, y: props.y },
      props.value
    )

    // TODO: do we need these?
    this.timer = 0
    this.delay = 200
    this.prevent = false
  }


  // disabling select + unselect
  /**
   * Add listener to the `unselectAll` event used to broadcast the
   * unselect all event
   */
  //componentDidMount() {
    //window.document.addEventListener('unselectAll',
      //this.handleUnselectAll)
  //}

  componendDidMount() {

  }

  /**
   * Before updating, execute the formula on the Cell value to
   * calculate the `display` value. Especially useful when a
   * redraw is pushed upon this cell when editing another cell
   * that this might depend upon
   */
  componentWillUpdate() {
    this.display = this.determineDisplay(
      { x: this.props.x, y: this.props.y }, this.state.value)
  }

  // removing select + unselect
  /**
   * Remove the `unselectAll` event listener added in
   * `componentDidMount()`
   */
  //componentWillUnmount() {
    //window.document.removeEventListener('unselectAll',
      //this.handleUnselectAll)
  //}

  componentWillUnmount() {

  }

  /**
   * When a Cell value changes, re-determine the display value
   * by calling the formula calculation
   */
  onChange = (e) => {
    this.setState({ value: e.target.value })
    this.display = this.determineDisplay(
      { x: this.props.x, y: this.props.y }, e.target.value)
  }

  // don't want cells to be editable
  /**
   * Handle pressing a key when the Cell is an input element
   */
  //onKeyPressOnInput = (e) => {
    //if (e.key === 'Enter') {
      //this.hasNewValue(e.target.value)
    //}
  //}

  // don't want cells to be editable
  /**
   * Handle pressing a key when the Cell is a span element,
   * not yet in editing mode
   */
  //onKeyPressOnSpan = () => {
    //if (!this.state.editing) {
      //this.setState({ editing: true })
    //}
  //}


  // TODO: figure out if this fn is needed
  /**
   * Handle moving away from a cell, stores the new value
   */
  //onBlur = (e) => {
    //this.hasNewValue(e.target.value)
  //}

  // since we aren't selecting, we aren't deselecting either
  /**
   * Used by `componentDid(Un)Mount`, handles the `unselectAll`
   * event response
   */
  //handleUnselectAll = () => {
    //if (this.state.selected || this.state.editing) {
      //this.setState({ selected: false, editing: false })
    //}
  //}


  spend = () => {
    this.props.spend({
      x: this.props.x,
      y: this.props.y,
    })
    this.setState({ editing : false })
  }

  // TODO: need this to update the values?
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
      value,
    )
    this.setState({ editing: false })
  }

  // don't want cells to be selectable
  /**
   * Emits the `unselectAll` event, used to tell all the other
   * cells to unselect
   */
  //emitUnselectAllEvent = () => {
    //const unselectAllEvent = new Event('unselectAll')
    //window.document.dispatchEvent(unselectAllEvent)
  //}

  // don't want to be able to click cells
  /**
   * Handle clicking a Cell.
   */
  //clicked = () => {
    //// Prevent click and double click to conflict
    //this.timer = setTimeout(() => {
      //if (!this.prevent) {
        //// Unselect all the other cells and set the current
        //// Cell state to `selected`
        //this.emitUnselectAllEvent()
        //this.setState({ selected: true })
      //}
      //this.prevent = false
    //}, this.delay)
  //}

  // don't want to be able to double click cells
  /**
   * Handle doubleclicking a Cell.
   */
  //doubleClicked = () => {
    //// Prevent click and double click to conflict
    //clearTimeout(this.timer)
    //this.prevent = true

    //// Unselect all the other cells and set the current
    //// Cell state to `selected` & `editing`
    //this.emitUnselectAllEvent()
    //this.setState({ editing: true, selected: true })
  //}

  // stub to determine value to display, maybe logic here later?
  determineDisplay = ({ x, y }, value) => {
    return value
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

    // don't need header row + row indicators
    //if (this.props.x === 0 || this.props.y === 0) {
      //css.textAlign = 'center'
      //css.backgroundColor = '#f0f0f0'
      //css.fontWeight = 'bold'
    //}

    return css
  }

  render() {
    const css = this.calculateCss()

    // do not need row number column
    // TODO: comment this out when finished testing
    // column 0
    //if (this.props.x === 0) {
      //return (
        //<span style={css}>
          //{this.props.y}
        //</span>
      //)
    //}

    // we don't want this row styled any differently than the rest
    // row 0
    //if (this.props.y === 0) {
      //const alpha = ' abcdefghijklmnopqrstuvwxyz'.split('')
      //return (
        //<span
          //onKeyPress={this.onKeyPressOnSpan}
          //style={css}
          //role="presentation">
          //{alpha[this.props.x]}
        //</span>
      //)
    //}

    // we don't want cells to be selectable by the user
    //if (this.state.selected) {
      //css.outlineColor = 'lightblue'
      //css.outlineStyle = 'dotted'
    //}

    //if (this.state.editing) {
      //return (
        //<input
          //style={css}
          //type="text"
          //onBlur={this.onBlur}
          //onKeyPress={this.onKeyPressOnInput}
          //value={this.state.value}
          //onChange={this.onChange}
          //autoFocus
        ///>
      //)
    //}
    return (
      // taking out onclicks from cell span
      // onClick={e => this.clicked(e)}
      // onDoubleClick={e => this.doubleClicked(e)}
      <span
        style={css}
        role="presentation">
        {this.display}
      </span>
    )
  }
}

Cell.propTypes = {
  spend: PropTypes.func.isRequired,
  onChangedValue: PropTypes.func.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
}
