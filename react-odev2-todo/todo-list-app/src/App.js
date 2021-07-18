import React from "react";
import { useState } from "react";
import Form from "./components/Form/Form.js";
import Tasks from "./components/Tasks/Tasks.js";
import Filtertasks from "./components/Filtertasks/Filtertasks.js";


const initialState= [
	{
	id : 0,
	task : 'Learn javascript',
},{
	id : 1,
	task : 'Learn react',
}
];
function App() {
	const [tasks, setTasks] = useState(initialState)
	
  return (
    <div>
      	<section className="todoapp">
	      	<Form addTask = {setTasks} tasks = {tasks} />
			<Tasks addTask = {setTasks} tasks = {tasks} />
	      	<Filtertasks addTasks = {setTasks} tasks= {tasks} />     
      	</section>
    </div>
  );
}

export default App;
