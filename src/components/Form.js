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
    // this.setState({ task: ""})
  }

  

  render() {
    return (
      <form className="input-group mb-3" onSubmit={this.handleSubmit}>
        <input type="text" className="form-control" onChange={this.handleTaskDescriptionChange} />
        <button className="btn btn-outline-success">Submit</button>
      </form>
    );
  }
}

export default Form;