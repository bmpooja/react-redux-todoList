import './App.css';
import AddTodo from './components/Addtodo';
import TodoList from './components/TodoList';
import Filters from './components/Filters';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <TodoList/>
      <Filters/>
    </div>
  );
}

export default App;
