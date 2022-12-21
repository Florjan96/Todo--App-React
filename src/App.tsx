import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {id:1,title:"Read for one hour", completed:true},
    {id:2,title:"Pick up groceries", completed:false},
    {id:3,title:"Jog around park 3x", completed:true},
    {id:4,title:"10 minutes meditation", completed:false}
  ])

function toggleTodos(todo){
  let todosCopy=structuredClone(todos)
  let match =todosCopy.find(target=>target.id ===todo.id )
  match.completed = !match.completed
setTodos(todosCopy)
}

function createNewTodo(){
  let newTodo={
    id:4,
    title:event.target.intepu.value,
    completed:false
  }
  
  let copyTodos=[...todos,newTodo]
  setTodos(copyTodos)
}

function deleteTodo(todo){
  let fllonxa=todos.filter(target=>target.id !== todo.id)
setTodos(fllonxa)
}


  return (
    <div className="App">
<div className="banner-card">
  
      <img src="./images/bg-desktop-dark.jpg" width="100%" />
     
      <div className="banner-text">
<h1>T  O  D  O</h1>
      </div>
      <form onSubmit={(event)=>{
event.preventDefault()
createNewTodo()


      }}>
        <input type="text" name="intepu"  placeholder='Create a new todo . . .'/>
      </form>
      </div>

      <div className="todos-list">
        <ul className='todos-ul'>
{todos.map(todo=>(
  <li className={todo.completed? "incomplete":"complete"}>
     <span onClick={()=>{toggleTodos(todo)}}>
    <h6>{todo.title}</h6>
    </span>

    <button onClick={()=>{deleteTodo(todo)}}>x</button>
  </li>
  
))}
      </ul>
      </div>



    </div>
  )
}

export default App
