'use client'
import Create from '@/components/Create';
import Show from '@/components/Show';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const page = () => {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [task, setTask] = useState([]);
  const [ActiveTask, setActiveTask] = useState(null);

 
  
  const updateTask = (e) => {
    e.preventDefault();
    const copyTasks = [...task];
    copyTasks[ActiveTask] = {...copyTasks[ActiveTask], title, discription,
      status}
      setTask(copyTasks);
      setActiveTask(null); 
      setTitle("");
      setDiscription("");
      setStatus("Deu");
  }
   
  return (
    <div className='mt-5 container p-3'>
        <Create 
            title = {title}
            setTitle = {setTitle}
            discription = {discription}
            setDiscription = {setDiscription}
            status = {status}
            setStatus = {setStatus}
            task = {task}
            setTask = {setTask}
            ActiveTask = {ActiveTask}
            setActiveTask = {setActiveTask}
            updateTask = {updateTask}
        />
        <h3>Pending Task</h3>
        <Show 
         task = {task}
         setTask = {setTask} 
         setTitle = {setTitle}
         setDiscription = {setDiscription}
         setActiveTask = {setActiveTask}
         setStatus = {setStatus}
        ></Show>
    </div>
  )
}
export default page
