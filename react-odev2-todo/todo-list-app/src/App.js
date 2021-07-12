import React from "react";
import Form from "./components/Form/Form.js";
import Tasks from "./components/Tasks/Tasks.js";

function App() {
  return (
    <div>
      	<section className="todoapp">
	      	<Form />
			<Tasks />
	      	      
	     	{/* This footer should hidden by default and shown when there are todos*/}
	      	<footer className="footer">

          		{/* This should be `0 items left` by default*/}
          		<span className="todo-count">
            		<strong>2</strong>
            			items left
          		</span>

          		<ul className ="filters">
            		<li>
            		  <a className="selected">All</a>
            		</li>
            		<li>
            		  <a>Active</a>
            		</li>
            		<li>
            		  <a>Completed</a>
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
