import AddTask from "./Components/AddTask";
import Task_list from "./Components/Task_list";

function App() {
	return (
		<div className="p-10 flex gap-10">
			<AddTask/>
			<Task_list/>
		</div>
	);
}

export default App;
