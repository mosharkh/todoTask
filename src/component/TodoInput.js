import React from 'react';

const TodoInput = (props) => {
    return (
    <form onSubmit={props.handleSubmit} className="new-task">
        <input className='task-input' type="text" placeholder='Enter todo' value={props.value} onChange={props.handleChange} />
        <button className='add-task-btn' onClick={props.handleSubmit}><img src='/add.png' alt="add"/></button>
    </form>
    );
}

export default TodoInput;