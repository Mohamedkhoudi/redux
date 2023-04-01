import React from 'react'
import { useDispatch } from 'react-redux'
import { handleComplete, handleDelete } from '../redux/action'

const CardTodo = ({todo}) => {
    const dispatch = useDispatch()
  return (
    <div>
      <h1>{todo.action}</h1>
      <button onClick={()=>dispatch(handleDelete(todo.id))}>Delete</button>
      <button onClick={()=>dispatch(handleComplete(todo.id))}>{todo.isDone?"complete": "Undo"}</button>
    </div>
  )
}

export default CardTodo
