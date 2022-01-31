import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import PropTypes from "prop-types"
import configureStore from '../redux/configureStore'
import Greeting from './Greeting'

const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Greeting greeting="Friend"/> }></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App