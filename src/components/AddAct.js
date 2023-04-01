import React from 'react'
import { useSelector } from 'react-redux'
import CardTodo from './CardTodo'

const AddAct = () => {
    const {todos}=useSelector(state=>state)
  return (
    <div>
      {
        React.Children.toArray(todos.map(el=><CardTodo todo={el}/>))
      }
    </div>
  )
}

export default AddAct
