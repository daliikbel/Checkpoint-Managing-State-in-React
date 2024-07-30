import React, { useContext } from 'react'
import { TodoContext } from './TodoContext'

const TodoList = () => {


    const {todos , deleteTodo,inputchecked} = useContext(TodoContext)

    

  return (
    <div>
        {
            todos.map((el,i)=> (
                <div key={i}style={{color:el.checked?'red':'black'}}>
                    <hr/>
                    <h1> {el.description} </h1>
                    <input type='checkbox'
                    checke={el.checked}
                    onChange={()=>inputchecked(el.id)}
                    />
                    <button onClick={()=>deleteTodo(el.id)}> delete </button>
                    <hr/>
                </div>
            ))
        }
    </div>
  )
}

export default TodoList
