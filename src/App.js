import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./App.css"
//api calls
const App = () => {
  const[users,setUsers]=useState([])
 const data={fname:"manish",lname:"reddy"}
  const post=()=>{
    axios.post("https://jsonplaceholder.typicode.com/users",data)
  }

const put=()=>{
  axios.put("https://jsonplaceholder.typicode.com/users/1",data).then(response=>console.log(response))
}
const deleteHandler=()=>{
  axios.delete("https://jsonplaceholder.typicode.com/users/1").then(response=>console.log(response))
}
  const getUsers=async()=>{
    await axios.get("https://jsonplaceholder.typicode.com/users").then(res=>setUsers(res.data)).catch(err=>console.log(err))

  }

  useEffect(()=>{
    getUsers()
  }, [])
  return (
    <div className='users-container'>
      {users.map(user=>{
        return (
          <>
          
          <h3>{user.name}</h3>
          </>
        )
      })}
      <button onClick={post}>Post</button>
      <button onClick={put}>Put</button>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  )
}

export default App