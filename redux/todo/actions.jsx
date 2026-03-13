export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const UPDATE_TODO = " UPDATE_TODO"
 export const addTodo =(data) =>({
  type: ADD_TODO,
  payload: data,
 });
 export const removeTodo =(index)=>({
  type:REMOVE_TODO,
  payload: index,
 });
 export const updateTodo=(index,data)=>({
  type:UPDATE_TODO,
  payload:{index,data}
 });