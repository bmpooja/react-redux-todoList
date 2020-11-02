import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return ({
        todos: state
    })
}

const TodoList =(state) => {
    console.log('hello',state.todos)
    return (
        <div>
            <ul>
                {
                    state.todos.map((todo)=> (
                        <li key= {todo.id}> {todo.text}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default connect(mapStateToProps)(TodoList);