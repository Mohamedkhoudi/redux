import { ADDTASK, COMPLETETASK, DELETETASK, EDITTASK, FILTER } from "./actiontype"



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
        case EDITTASK:
            return{
                ...state,todos: state.todos.map(el=>el.id===payload.id?payload:el)
            }
        case FILTER:
            return{
                 ...state, filter: !state.filter }
            
    default:
      return state
    }
}