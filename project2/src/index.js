import React from "react"
import ReactDOM from "react-dom"
import Routing from "./Routing"
import Popup from "./Popup"
import "./index.css"
import { createStore } from "redux"
import { Provider } from "react-redux"

const initialState = {
    counter: 0,
  }

function reducer(state = initialState, action) {
  switch (action.type) {
    case "tap":
       return { counter: state.counter + 1 }
    default:
      return state
  }
}

const store = createStore(reducer)

const App = () => (
  <Provider store={store}>
    <div className="container">
      <Routing />
    </div>
    <Popup />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"))
