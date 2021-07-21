import React from 'react';
import { useState } from 'react';

function TasksList({allTasks, activeTasks, completedTasks, setActiveTasks, setCompletedTasks}) {
    const [isChecked, setIsChecked] = useState(false)
    const onClick = (e) => {       
        let task = e.target.nextSibling.innerHTML;
        if(activeTasks.includes(task)){
            setActiveTasks(activeTasks.filter(item => item !== task));
            setCompletedTasks([...completedTasks, task]);
        }else{
            setCompletedTasks(completedTasks.filter(item => item !== task));
            setActiveTasks([...activeTasks, task]);
        };
    }

    const removeTask = (e) => {
        let task = e.target.previousSibling.innerHTML;
        if(activeTasks.includes(task)){
            setActiveTasks(activeTasks.filter(item => item !== task));
        }else{
            setCompletedTasks(completedTasks.filter(item => item !== task));;
        };

    }

    const completeAll = (e) => {
        if(isChecked){
            setActiveTasks([...activeTasks, ...completedTasks])
            setCompletedTasks([])
            setIsChecked(false)
        }else{
            setCompletedTasks([...completedTasks, ...activeTasks])
            setActiveTasks([])
            setIsChecked(true)
        }      
    }
    return (
        <section className="main">
            <div>
		  	<input 
            className = "toggle-all" 
            type = "checkbox"
            onClick = {completeAll}
            checked = {isChecked}
            />
		  	<label
            hidden = {(allTasks.length === 0) ? true : false}
            htmlFor = "toggle-all" 
            type = "checkbox"
            onClick = {completeAll}
            checked = {isChecked}
            >
		    Mark all as complete
		  	</label>
            </div>
            {/* listed tasks */} 
		  	<ul className="todo-list">  
                {allTasks.map((item, index) => {
                    return (
                        <li key = {index}
                            className = {(completedTasks.includes(item))?('completed'):(null)}>
                            <div className = 'view'>
                                <input 
                                className = 'toggle' 
                                type = 'checkbox' 
                                onChange = {onClick}
                                checked = {(completedTasks.includes(item))?(true):(false)}
                                />
                                <label>{item}</label>
                                <button 
                                className = 'destroy' 
                                onClick = {removeTask}
                                ></button>
                            </div>
                        </li>
                    )
                })}
		  	</ul>
	    </section>
    )
}

export default TasksList;