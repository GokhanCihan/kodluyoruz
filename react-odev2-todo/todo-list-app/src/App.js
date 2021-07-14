import React from "react";
import { useState } from "react";
import Form from "./components/Form/Form.js";
import Tasks from "./components/Tasks/Tasks.js";


const initialState= [
	{
	id : 0,
	task : 'Learn javascript',
	isComplete : false,
	doDestroy : false
},{
	id : 1,
	task : 'Learn react',
	isComplete : false,
	doDestroy : false,
}
];

function App() {
	const [tasks, setTasks] = useState(initialState)

  return (
    <div>
      	<section className="todoapp">
	      	<Form addTask = {setTasks} tasks = {tasks} />
			<Tasks tasks = {tasks}/>
	      	      
	     	{/* This footer should hidden by default and shown when there are todos*/}
	      	<footer className="footer">

          		{/* This should be `0 items left` by default*/}
          		<span className="todo-count">
            		<strong>2</strong>
            			items left
          		</span>

          		<ul className ="filters">
            		<li>
            		  <a href='this' className="selected">All</a>
            		</li>
            		<li>
            		  <a href='this'>Active</a>
            		</li>
            		<li>
            		  <a href='this'>Completed</a>
            		</li>
          		</ul>

          		{/* Hidden if no completed items are left ↓ */}
          		<button className="clear-completed">
           			Clear completed
          		</button>
        	</footer>
      	</section>
    </div>
  );
}

export default App;
