import React from 'react';

function TasksList() {

    return (
        <section className="main">
		  	<input 
              className="toggle-all" 
              type="checkbox"/>
		  	<label 
              htmlFor="toggle-all" 
              type="checkbox"
              >
		      Mark all as complete
		  	</label>
            {/* listed tasks */} 
		  	<ul className="todo-list">               
                    <li>
                        <div className='view'>
                            <input className='toggle' type='checkbox'/>
                            <label></label>
                            <button className="destroy"></button>
                        </div>
                    </li>
		  	</ul>
	    </section>
    )
}

export default TasksList;