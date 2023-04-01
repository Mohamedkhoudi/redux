import { ADDTASK, COMPLETETASK, DELETETASK } from "./actiontype";



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