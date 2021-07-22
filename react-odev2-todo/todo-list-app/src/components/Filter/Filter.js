import React from 'react';
import { useState, useEffect } from 'react';

function Filter(
    {
    allTasks,
    activeTasks,
    completedTasks,
    setAllTasks,
    setCompletedTasks
    }){
    const [btnAll, setBtnAll] = useState("selected")
    const [btnActive, setBtnActive] = useState(null)
    const [btnCompleted, setBtnCompleted] = useState(null)

    const clearCompleted = () => setCompletedTasks(completedTasks.filter(item => item === !item));
    const showAll = () => {
        setAllTasks(activeTasks.concat(completedTasks))
        setBtnAll("selected");
        setBtnActive(null);
        setBtnCompleted(null);
    }
    const showActive = () => {
        setAllTasks(activeTasks)
        setBtnAll(null); 
        setBtnActive("selected");
        setBtnCompleted(null);
    }
    const showCompleted = () => {
        setAllTasks(completedTasks)
        setBtnAll(null); 
        setBtnActive(null);
        setBtnCompleted("selected");
    }

    useEffect(() => {
		setAllTasks(activeTasks.concat(completedTasks))
        setBtnAll("selected");
        setBtnActive(null);
        setBtnCompleted(null);
	}, [activeTasks, completedTasks, setAllTasks])

    return (
        <footer className="footer" hidden={(activeTasks.length === 0 && completedTasks.length === 0 )?(true):(false)}>
            {/* items left */}
            <span className="todo-count">
                <strong>{activeTasks.length}</strong>
                    {` items left`}
            </span>

            <ul className ="filters">
                <li>
                    <a className={btnAll} onClick={showAll}>All</a>
                </li>
                <li>
                    <a className={btnActive} onClick={showActive}>Active</a>
                </li>
                <li>
                    <a className={btnCompleted} onClick={showCompleted}>Completed</a>
                </li>
            </ul>

            {/* Hidden if no completed items are left ↓ */}
            <button 
            className = "clear-completed" 
            hidden = {(completedTasks.length === 0)?(true):(false)}
            onClick = {clearCompleted}
            >
                Clear completed
            </button>
        </footer>
    )
}

export default Filter;