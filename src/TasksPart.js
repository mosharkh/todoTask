import React from 'react';
import TodoInput from "./TodoInput";
import TasksList from "./TasksList";

class TasksPart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', tasks: []};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        const newTask = {
            id: Date.now(),
            task: this.state.value
        };
        const newTasks = this.state.tasks;
        newTasks.push(newTask);
        this.setState({tasks: newTasks,value: ''});
        event.preventDefault();
    }

    handleDelete(id) {
        const newTasks = this.state.tasks.filter(task => task.id !== id);
        this.setState({tasks: newTasks})
    }

    render() {
      return (
        <div className='tasks-part'>
            <TodoInput value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            <TasksList tasks={this.state.tasks} handleDelete={this.handleDelete}/>
        </div>
      );
    }
  }

  export default TasksPart;