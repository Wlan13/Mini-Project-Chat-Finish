import React from 'react'
import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Routes from './router/index'

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <Routes />
      </div>
    )
  }
}

export default App
