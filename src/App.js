import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form'
import List from './components/List'

class App extends Component {
  constructor() {
    super()

    this.state = {
      tasks: [],
      editLine: null
    }

    
  }

  addTask = (task) => {
    task = {
      description: task,
      status: "To do",
    }

    this.setState({tasks: [task, ...this.state.tasks]})
  }

  deleteTask = (index) => {
    this.state.tasks.splice(index, 1)
    this.setState({ tasks: this.state.tasks })
  }

  onEditLine = (index) => {
    this.setState({ editLine: index })
  }

  render() {
    return (
      <div className="container">
        <h2 className="my-3">To do list</h2>
        <Form addTask={this.addTask}/>
        <div>
          <h2 className="my-3">List</h2>
          <List tasks={this.state.tasks} deleteTask={this.deleteTask} onEditLine={this.onEditLine} editLine={this.state.editLine}/>
        </div>
      </div>
    );
  }
}

export default App;