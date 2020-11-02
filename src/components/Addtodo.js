import React from 'react';
import {connect} from 'react-redux'
import {addTodo} from '../actions'; 

const AddTodo = ({dispatch})=> {
var inputElement;

    const addTask =(e) => {
        e.preventDefault();
        if(!inputElement.value.trim()) return;
        dispatch(addTodo(inputElement.value))
        console.log(inputElement.value)
    }
    return (
        <div>
            <h1> Todo List</h1>
            <form onSubmit={addTask}>
                <input
                type="text"
                placeholder="Enter task"
                ref= {(text)=> inputElement = text } 
                />
                <button type="Submit">Add todo</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo);