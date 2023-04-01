import { ADDTASK, COMPLETETASK, DELETETASK } from "./actiontype"



const init={todos:[]}
export const taskreducer = (state=init,{type,payload})=>{
    switch (type) {
        case ADDTASK:
            return{
                ...state,todos:[...state.todos,payload]
            }
        case DELETETASK:
            return{
            ...state,todos: state.todos.filter(el=>el.id!==payload)
        }
        case COMPLETETASK:
            return{
                ...state,todos: state.todos.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el)
            }
            
            
    default:
      return state
    }
}