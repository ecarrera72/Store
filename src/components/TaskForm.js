import React, { Component } from 'react';

class TaskForm extends Component {

    onSubmit = e => {
        e.preventDefault();
    }

    onChange = e => {
        console.log(e.target.value);
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit }>
                <input type="text" placeholder="Write a task" onChange={ this.onChange }/>
                <br/>
                <textarea placeholder="Write a description task" onChange={ this.onChange }></textarea>
                <br/>
                <input type="submit" />
            </form>
        )
    }
}

export default TaskForm;