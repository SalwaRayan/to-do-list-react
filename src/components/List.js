import React, { Component } from 'react';

class List extends Component {

  onSubmit = (e) => {
    e.preventDefault()
  }

  render() {

    const { tasks, deleteTask, editLine, onEditLine } = this.props

    return (
      <div className="row align-items-center">
        {tasks.map((task, index) =>(
          <>
            {console.log(task, index)}
            <div className="col-7">
              {editLine === index ? (
                <>
                  <label>Edit description</label>
                  <input value={task.description} type="text" className="form-control"/>
                </>
                ) : (
                <>
                  <label>Description</label>
                  <p>{task.description}</p>
                </>
              )}
            </div>
            <div className="col-2">
              <label>Status</label>
              <p>{task.status}</p>
            </div>
            <div className="col-1">
              <button className="btn btn-outline-warning" onClick={() => onEditLine(index)}>Edit</button>
            </div>
            <div className="col-2">
              <button className="btn btn-outline-danger" onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </>
        ))}
      </div>
    );
  }
}

export default List;