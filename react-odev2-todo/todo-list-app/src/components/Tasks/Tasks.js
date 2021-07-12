import React from 'react';
import { useState } from 'react';

const initialState = [
    {
        task: 'Learn JavaScript',
        isComplete: false 
    }, { 
        task: 'Learn React',
        isComplete: false
    }];

function Tasks(props) {
    const [tasks, setTasks] = useState(initialState);

    return (
        <section className="main">
		  	<input className="toggle-all" type="checkbox"/>
		  	<label for="toggle-all">
		      Mark all as complete
		  	</label>
		  	<ul className="todo-list">
                {tasks.map((element, i) => {
                    return(
                    <li key='i'>
                        <div className='view'>
                            <input className='toggle' type='checkbox' />
                            <label>{element.task}</label>
                            <button className="destroy"></button>
                        </div>
                    </li>
                    )
                })};
		  	</ul>
	    </section>
    )
}

export default Tasks;