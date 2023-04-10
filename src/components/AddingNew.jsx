import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleAdd, handleFilter } from '../redux/action'
import "./addingnew.css"


const AddingNew = () => {
  const [action, setAction] = useState("") 
  const {filter}=useSelector((state)=>state)
    const dispatch=useDispatch()
   const  handleSubmit=(e)=>{
    e.preventDefault()
    const task={id: Math.random(),action,isDone:false}
    dispatch(handleAdd(task))
    setAction("")
}
 
  return (
    <div>
     
      <form onSubmit={handleSubmit} className='addnewcontainer'>
       <label className='label'>Type here tasks</label> <input type="text" value={action} onChange={(e)=> setAction(e.target.value)} className='addelement' />
        <button type='submit' className='BTN' >ADD</button>

      </form>
      <button onClick={()=>dispatch(handleFilter())} className='BTN1'>{filter?"Show All":" uncompleted"}</button>
     
    </div>
  )

  }
export default AddingNew
