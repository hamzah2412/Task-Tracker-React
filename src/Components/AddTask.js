import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, SetText] = useState('')
    const [day, SetDay] = useState('')
    const [reminder, SetReminder] = useState(false)

    //Check if text is there when onSubmit is pressed 
const onSubmit = (e) => { 
    e.preventDefault()

    //If there is not text, send alert with the text "Please add a task!"
    if(!text){
        alert('Please add a task!')
        return
    }

    onAdd({text, day, reminder})

    SetText('')
    SetDay('')
    SetReminder(false)
}

    return (
        //Add a form 
        <form className='add-form' onSubmit={onSubmit}>
            
           <div className='form-control'>
           <label>Task</label>
           <input type='text' placeholder='Add Task' value={text} onChange={(e) => SetText(e.target.value)} /> 
           </div>

           <div className='form-control form-control-check'>               
           <label>Day & Time</label>
           <input type='text' placeholder='Add Day & Time' value={day} onChange={(e) => SetDay(e.target.value)} /> 
           </div>

           <div className='form-control'>
           <label>Set Reminder</label>
           <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => SetReminder(e.currentTarget.checked)}/>
           </div>
            
           <input type='submit' value='Save Task' className='btn btn-block' ></input>
        </form>
    )
}

export default AddTask
