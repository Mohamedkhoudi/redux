import { ADDTASK, COMPLETETASK, DELETETASK, EDITTASK, FILTER } from "./actiontype";



export const handleAdd=(newTask)=>{
    return{
        type: ADDTASK,
        payload:newTask 
    }
}
export const handleDelete=(ID)=>{
    return{
        type: DELETETASK,
        payload: ID
    }
}
export const handleComplete=(THEID)=>{
    return{
        type: COMPLETETASK,
        payload: THEID
    }
}
export const handleEdit=(EditedEl)=>{
    return{
        type: EDITTASK,
        payload: EditedEl
    }
}
export const handleFilter=()=>{
    return{
        type: FILTER
        
    }
}