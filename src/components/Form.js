import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()

    this.state = {
      task: ""
    }
  }

  handleTaskDescriptionChange = (e) => {
    this.setState({ task: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.addTask(this.state.task)
    this.setState({ task: ""})
  }

  render() {
    // const { addTask } = this.props

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleTaskDescriptionChange} />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;