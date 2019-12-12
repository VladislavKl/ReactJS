import React from "react"
import Modal from "./Modal"
import { connect } from "react-redux"


class Popup extends React.Component{
  tap = () => {
    this.props.dispatch({ type: "tap"})
  }

  render() {
  return (
    <div className="App">
      <button className="button-default" onClick={this.tap}>
        My little secret 
      </button>
      <Modal
        counter={this.props.counter}
      />
    </div>
  )
  }
}

const mapStateToProps = (state) => ({ 
  counter: state.counter,
})

export default connect(mapStateToProps)(Popup)
