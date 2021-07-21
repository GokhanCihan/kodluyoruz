import NewTask from "./components/NewTask/NewTask";
import TasksList from "./components/TasksList/TasksList";
import Filter from "./components/Filter/Filter";

function App() {

  return (
    <div>
      	<section className="todoapp">
			<NewTask />
			<TasksList />
			<Filter />
      	</section>
    </div>
  );
}

export default App;
