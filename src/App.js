import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'
//import Task from './Components/Task'

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([])

useEffect(() => {
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    
    console.log(data)
  }

  fetchTasks()
}, [])

//Add a new Task
const addTask = (task) =>{
  console.log(task) //Check the text, day reminder in console
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

//Delete Task by clicking the red cross
const deleteTask = (id) => 
{
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder by double-clicking
const toggleReminder = (id) => {
  console.log(id) //Check ID in console
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder } : task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask} /> }
      {tasks.length > 0 ? ( <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle ={toggleReminder} />
    ) : ('No Tasks To Show')
   } 
    </div>
)
}

export default App
