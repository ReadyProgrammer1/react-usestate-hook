import React, { Component } from 'react'
import AddUser from '../src/components/AddUser'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Add New User</h1>
        <AddUser />
      </div>
    );
  }
}

export default App
