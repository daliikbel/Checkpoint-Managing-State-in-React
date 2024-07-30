import React, { useContext, useState } from 'react'
import { TodoContext } from './TodoContext'

const AddTask = () => {



    const {addNewTodo} = useContext(TodoContext)

    const [input , setInput] = useState({
        description : ""
    })

    const handleChangeInput = (e) => {
        setInput({description : e.target.value})
    }



  return (
    <div style={{marginTop:"20px"}} >
        <label> Add your new task :  </label>
        <input type="text" onChange={handleChangeInput}/>
        <button onClick={()=>addNewTodo(input)}> Add new task </button>
    </div>
  )
}

export default AddTask