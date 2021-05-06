import { useState } from 'react'

const AddTask = () => {
    const [text, SetText] = useState('')
    const [day, SetDay] = useState('')
    const [reminder, SetReminder] = useState(false)


    return (
        //Add a form 
        <form className='add-form'>
            
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
           <input type='checkbox' value={reminder} onChange={(e) => SetReminder(e.currentTarget.checked)}/>
           </div>
            
           <input type='submit' value='Save Task' className='btn btn-block' ></input>
        </form>
    )
}

export default AddTask
