import React from "react";
import Task from "./Task";

const Task_list = () => {
	const tasks = [
		{ id: 1, title: "Buy groceries", completed: false },
		{ id: 2, title: "Read a book", completed: true },
	];
	return (
		<div>
            tasks.map(
               <Task title={tasks["title"]}  /> 
            )
			
		</div>
	);
};

export default Task_list;
