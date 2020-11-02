
let nextTodoId = 0;

export const addTodo = text =>( {
    type:'ADD_TODO' , // what type of actions
    id: nextTodoId++, // unique id for task
    text // input value
})

export const todolistFilter = filter => ({
    type: 'SET_TODOLIST_FILTER',
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const todolistFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}