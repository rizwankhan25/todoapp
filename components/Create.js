import React from "react";

const Create = (props) => {
  const {title, setTitle,discription, setDiscription,ActiveTask, status,
     setStatus, updateTask, task, setTask,
        } = props

        const submitHandler = (event) => {
          event.preventDefault();
          if(title.length < 5 || discription.length < 20) {
            toast.error(
                  "title and discription must be more than 5 and 20 respectively"
                )
            return ;
          }
          const newTask = {
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            title,
            discription,
            status
          }
          console.log(newTask);
          setTask([...task, newTask]);
          setTitle("");
          setDiscription("");
          setStatus("");
        }
  return (
    <div>
      <form className="w-50">
        <h3>Create Your Task</h3>
        <input
          onChange={(event) => setTitle(event.target.value)}
          className="form-control mb-3"
          type="text"
          name=""
          value={title}
          placeholder="Title"
        />
        <textarea
          onChange={(event) => setDiscription(event.target.value)}
          value = {discription}
          className = "form-control mb-3"
          placeholder = "Description here..."
        ></textarea>
        <select
          onChange={(event) => setStatus(event.target.value)}
          value = {status}
          className="form-control mb-3"
        >
          <option value="Pending">Pending</option>
          <option value="Deu">Deu</option>
          <option value="Completed">Compeleted</option>
        </select>
        {ActiveTask === null ? (
          <button onClick={submitHandler} className="btn btn-primary">
            Create
          </button>
        ) : (
          <button onClick={updateTask} className="btn btn-primary">
            Update
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
