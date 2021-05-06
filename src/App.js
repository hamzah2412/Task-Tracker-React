import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'
import Footer from './Components/Footer'
//import Task from './Components/Task'

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([])

useEffect(() => {
const getTasks = async () => {
  const tasksFromServer = await fetchTasks()
  setTasks(tasksFromServer)
}

  getTasks()
}, [])

//Fetch Tasks from backend
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  
  //console.log(data)
  return data
}

//Fetch Task
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  
  //console.log(data)
  return data
}

//Add a new Task
const addTask = async (task) =>{
const res = await fetch('http://localhost:5000/tasks', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(task)
})

const data = await res.json()

setTasks([...tasks, data])

  // console.log(task) //Check the text, day reminder in console
  // const id = Math.floor(Math.random() * 10000) + 1

  // const newTask = { id, ...task }
  // setTasks([...tasks, newTask])
}

//Delete Task by clicking the red cross
const deleteTask = async (id) => 
{
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE',
  })

  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder by double-clicking
const toggleReminder = async (id) => {
const taskToToggle = await fetchTask(id)
const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

const res = await fetch(`http://localhost:5000/tasks/${id}`, {
  method:'PUT',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(updTask)
})

const data = await res.json()

  console.log(id) //Check ID in console
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder : data.reminder } : task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask} /> }
      {tasks.length > 0 ? ( <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle ={toggleReminder} />
    ) : ('No Tasks To Show')
   } 
   <Footer />
    </div>
)
}

export default App
