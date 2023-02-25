// import logo from './logo.svg';
import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Navbar from './components/Navbar';
import uuid from 'react-uuid';
import TodoList from './components/TodoList';
// import Alert from './components/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(false);
  // const [alert,setAlert] = useState(null);
  const [taskId, setTaskId] = useState();

  const handleInput = (e)=>{
    setTask(e.target.value)
  }

  const addTask = ()=>{
    if(toggleBtn){
      const newList = taskList.map((value)=>{
        if(value.id === taskId){
          return {...value, taskName:task}
        }
        return value;
      })
      setTaskList(newList);
      toast.info("Task is updated!")
      setToggleBtn(false)
      setTask("");
      setTaskId();
    }
    
    else{
      const taskObj = {
        id:uuid(),
        taskName:task
      }
      setTaskList((previousTask) => [...previousTask,  taskObj])
      setTask("");
      toast.success("Task is added in tasklist!")
      // showAlert("Task is added in your tasklist!")
    }

    }

  const deleteTask = (id)=>{
    console.log(id)
    const filterItem = taskList.filter((value)=>{
      return value.id!== id ;
    })
    setTaskList(filterItem)
    toast.error("Task is deleted!")
    // showAlert("Task is deleted!", "")
  }

  const deleteAllTask = ()=>{
    setTaskList([]);
    toast.error("All task has been removed from tasklist.")
    // showAlert("All task has been removed from tasklist.")
  }

  // const showAlert = (message)=>{
  //   setAlert({
  //     msg:message,
      
  //   })
  //   setTimeout(() => {
  //     setAlert(null)
      
  //   }, 2000);
  // }

  const editTask = (id)=>{
    const editItem = taskList.find((value)=>{
      return value.id === id;
    })
    setTask(editItem.taskName)
    setToggleBtn(true)
    setTaskId(id)
  }

  return (
    <>
    <Navbar/>
    <ToastContainer theme='colored'/>
    <div className="container-fluid App">
      <h2 className='text-center'>YourTodo</h2>
      <div className="container taskInput">
        <input type="search" value={task} onChange={handleInput} className='form-control me-2 my-2' placeholder='✍ Enter your tasks...'/>
        <button className="btn btn-success mb-3 " disabled={task.length <=2 ? true : false} onClick={addTask} >{ toggleBtn ? "Update task" : "Add to task"}</button>
        <button className="btn btn-warning mx-2 mb-3" onClick={deleteAllTask}>Remove all tasks</button>
        <div className="container">
          <TodoList taskList={taskList} editTask={editTask} deleteTask={deleteTask}/>
        </div>
      </div>
    </div>
    </>
  );
}
export default App;
