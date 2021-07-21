import { useState, useEffect } from "react";
import NewTask from "./components/NewTask/NewTask";
import TasksList from "./components/TasksList/TasksList";
import Filter from "./components/Filter/Filter";


function App() {
	const [activeTasks, setActiveTasks] = useState(
		[
			'Learn React',
			'Learn Redux'
		]
	)
	const [completedTasks, setCompletedTasks] = useState([])
	const [allTasks, setAllTasks] = useState(
		[
		'Learn React',
		'Learn Redux'
		]
	)
	
	/* Updates allTasks array whenever activeTasks or completedTasks array is changed. */
	useEffect(() => {
		setAllTasks(activeTasks.concat(completedTasks))
	}, [activeTasks, completedTasks])

	console.log(`all tasks: ${allTasks}, active tasks: ${activeTasks}, completed tasks: ${completedTasks}`);

  	return (
    	<div>
      		<section className="todoapp">
				<NewTask 
				activeTasks = {activeTasks} 
				addNewTask = {setActiveTasks} 
				/>
				<TasksList 
				allTasks = {allTasks}
				activeTasks = {activeTasks}
				completedTasks = {completedTasks} 
				setActiveTasks = {setActiveTasks}
				setCompletedTasks = {setCompletedTasks}
				/>
				<Filter />
      		</section>
    	</div>
  );
}

export default App;
