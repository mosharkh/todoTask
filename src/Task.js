import React from 'react';

class Task extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isDone: false};
      this.imgSrc = "/circle.png";
      this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck(){
        this.setState({isDone: !this.state.isDone});
        // this.imgSrc = this.state.isDone === false ? "/circle.png" : "done.png";
    }

    render() {
        return (
            <div className="task">
                {this.state.isDone === false ? <img src="/circle.png" className='check-icon' width="15px" height="15px" alt="circle" onClick={this.handleCheck} /> :  <img src="/done.png" className='check-icon' width="15px" height="15px" alt="circle" onClick={this.handleCheck} />}
                <p className='task-name'>{this.props.name}</p>
                <button className="delete-btn" onClick={()=>this.props.handleDelete(this.props.id)}><i id="trash" className="fa-solid fa-trash-can"></i></button>
            </div>
        );
    }
}

export default Task;