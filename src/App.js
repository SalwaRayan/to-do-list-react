import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form'

class App extends Component {
  constructor() {
    super()

    this.state = {
      tasks: []
    }
  }

  addTask = (task) => {
    console.log(task)

    task = {
      description: task,
      status: "to do"
    }

    this.state.tasks = [task, ...this.state.tasks]

    console.log(this.state.tasks)
  }

  render() {
    return (
      <div className="container">
        <h1>To do list</h1>
        <Form addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;