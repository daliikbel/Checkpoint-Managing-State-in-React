import logo from './logo.svg';
import './App.css';
import {TodoProvider} from './TodoContext'
import TodoList from './TodoList';

function App() {
  return (

    <TodoProvider>
         <div className="App">
              <h1> TODO List </h1>
              <TodoList/>
          </div>
    </TodoProvider>
   
  );
}

export default App;
