import React from 'react'
import { useSelector } from 'react-redux'
import CardTodo from './CardTodo'

const AddAct = () => {
    const {todos,filter}=useSelector((state)=>state)
  return (
    <div>
      {
        filter?todos.filter((el)=>el.isDone===false).map((el)=><CardTodo todo={el} key={el.id}/>)
        :todos.map((el)=><CardTodo todo={el} key={el.id}/>)
      }
    </div>
  )
}

export default AddAct
