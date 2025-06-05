
interface Props {
    title: string,
    description: string;
}
const Task = ({title, description="No details"}:Props) => {
	return (
		<div className="border border-blue-900 rounded-lg lg:w-50 lg:h-fit p-2">
			<h3>{title}</h3>
			<p>{description}</p>
            <button></button>
		</div>
	);
};

export default Task;
