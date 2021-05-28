import React, {useState} from 'react'

export const AddTodo = (props) => {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  
  const submit = (e) => {
    e.preventDefault()

    props.addTodo(title, desc)
    setTitle("")
    setDesc("")
  }

  return (
    <div className="container my-3">
    <form onSubmit={submit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Todo Title</label>
        <input type="text" className="form-control" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} aria-describedby="titleHelp" required></input>
      </div>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">Todo Description</label>
        <input type="text" className="form-control" id="desc" value={desc} onChange={(e)=>setDesc(e.target.value)} required></input>
      </div>
      <button type="submit" className="btn btn-primary btn-sm">Add</button>
    </form> 
    </div>
  )
}
