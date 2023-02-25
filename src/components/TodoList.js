import React from 'react';
import "./TodoList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons';

function TodoList(props) {
    const {taskList, deleteTask, editTask} = props;
  return (   
   < >
   {taskList.length !== 0?
   taskList.map((val)=>{
    return(   
        <div className=' main-taskValue container' key={val.id}>
            <div className='parent-taskValue container'>
                <span className=' mb-5 container'>{val.taskName}</span>
                <span >
                    <FontAwesomeIcon className='deleteBtn' title='DeleteTask' icon={faTrashCan} onClick={()=>deleteTask(val.id)}></FontAwesomeIcon>
                    <FontAwesomeIcon className='editBtn ' title='EditTask' icon={faPen} onClick={()=>editTask(val.id)}></FontAwesomeIcon>
                </span>  
            </div>
            <div className="btns ">       
            </div>
        </div>
    )
   }):<h4 className='item-text text-center text-white '>No items in your tasklist.</h4>}
    </>
  )
}
export default TodoList