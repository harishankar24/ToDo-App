import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      {/* <p>Lorem ipsum dolor sit amet.</p> */}
      <button className="btn btn-danger btn-sm mx-2" onClick={()=>{onDelete(todo)}}>Delete</button>
      {/* <button className="btn btn-warning btn-sm">Edit</button> */}
    </div>
  )
}
export default TodoItem