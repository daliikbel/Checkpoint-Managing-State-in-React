import {createContext , useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext();
const TodoProvider = ({children}) => {

    const [todos , setTodos] = useState([
        { id: 1, description: "Update project proposal for client review.",Checked:false},
        { id: 2, description: "Fix bug in user authentication module.",Checked:false},
        { id: 3, description: "Conduct research for upcoming presentation.",Checked:false},
        { id: 4, description: "Prepare agenda for team meeting next week.",Checked:false},
        { id: 5, description: "Review and approve budget for Q3.",Checked:false},
        { id: 6, description: "Schedule interviews for new software engineer position.",Checked:false},
        { id: 7, description: "Coordinate with marketing team on new product launch campaign.",Checked:false}
    ])

    const deleteTodo = (id) => {
        setTodos(todos.filter((el)=> el.id !== id))
    }

    const addTodo = (description) => {
        const newTodo = { id: uuidv4(), description };
        setTodos([...todos, newTodo]);
    };

    const inputchecked=(id)=>{
        setTodos(todos.map((i)=>i.id===id?
        {...i,checked:!i.checked }:i

        ))
    }

    return (
        <TodoContext.Provider value={{todos , deleteTodo,addTodo,inputchecked}}>
            {children}
        </TodoContext.Provider>
    );

}

export {TodoProvider,TodoContext}