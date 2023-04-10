import React from 'react'
import { useDispatch } from 'react-redux'
import { handleComplete, handleDelete } from '../redux/action'
import Edit from './Edit'
import "./cardtodo.css"

const CardTodo = ({todo}) => {
    const dispatch = useDispatch()
  return (
    <div className='cardcontainer'>
      <h3 id={todo.id?"comp":"unc"}>{todo.action}</h3>
     <div className='btncontainer'> <button onClick={()=>dispatch(handleDelete(todo.id))} className="BTN">Delete</button>
      <button onClick={()=>dispatch(handleComplete(todo.id))} className='BTN'>{todo.isDone?"complete": "Undo"}</button>
      <Edit todo={todo}/>
      </div></div>
  )
}

export default CardTodo
