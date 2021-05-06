import { useState } from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'
import Task from './Components/Task'

const App = () => {
    const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },      
  ])

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
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? ( <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle ={toggleReminder} />
    ) : ('No Tasks To Show')
   } 
    </div>
)
}

export default App
