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

  return (
    <div className="App">
<div className="banner-card">
  
      <img src="./images/bg-desktop-dark.jpg" width="100%" />
     
      <div className="banner-text">
<h1>T  O  D  O</h1>
      </div>
      <form>
        <input type="text"  placeholder='Create a new todo . . .'/>
      </form>
      </div>

      <div className="todos-list">
        <ul className='todos-ul'>
{todos.map(todo=>(
  <li className={todo.completed? "completed":"incomplete"}>{todo.title}</li>
))}
      </ul>
      </div>



    </div>
  )
}

export default App
