import React from 'react';

function Tasks({tasks}) {
    console.log(tasks)
    return (
        <section className="main">
		  	<input className="toggle-all" type="checkbox"/>
		  	<label htmlFor="toggle-all">
		      Mark all as complete
		  	</label>
		  	<ul className="todo-list">
               {/*  {taskList.map((element) => {
                    return(
                    <li key='i'>
                        <div className='view'>
                            <input className='toggle' type='checkbox' value={element.toggleChecked} />
                            <label>{element.task}</label>
                            <button className="destroy" value={element.isComplete}></button>
                        </div>
                    </li>
                    )
                })}; */}
		  	</ul>
	    </section>
    )
}

export default Tasks;