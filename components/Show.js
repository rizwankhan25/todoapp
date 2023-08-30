import React from 'react'

const Show = (props) => {
      const {task,setTask,setTitle, setDiscription, setStatus,setActiveTask} = props
      const DeleteHandler = (index) => {
        const copyTask = [...task];
        // copyTask.splice(index,1);
        // setTask(copyTask);
        setTask(task.filter((j, i) => i !== index))
      }
      
      const updateHandler = (index) => {
        const {title, discription, status} = task[index];
        setTitle(title);
        setDiscription(discription);
        setStatus(status);
        setActiveTask(index);
      }
      let taskloading = <h2 className='mt-5 w-100 text-center text-danger'>task list...</h2>

   if (task.length > 0) {
      taskloading = task.map((task, index) => {
        return (
               <div key={index} className="card  mb-3 me-3" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{task.title}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">
                        {task.status}
                        </h6>
                        <p className="card-text">
                            {task.discription}
                        </p>
                        <button onClick={() => updateHandler(index)} className="me-2 btn btn-sm btn-dark">
                            Update Task
                        </button>
                        <button onClick={() => DeleteHandler(index)}  className="btn btn-sm btn-dark">
                            Delete Task
                        </button>
                    </div>
                </div>
        )
      })
   }
  return (
    <div className="d-flex flex-wrap">{taskloading}</div>
  )
}

export default Show
