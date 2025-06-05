const AddTask = () => {
  return (
     <div className="border border-blue-900 rounded-lg lg:w-50 lg:h-fit p-2">
        <form className="flex flex-col justify-center items-center gap-3">
            <h2>Add task</h2>
            <label htmlFor="title">Title</label>
            <input className="border border-blue-900 rounded-md" id="title"/>
            <label htmlFor="description">Description</label>
            <textarea className="border border-blue-900 rounded-md" id="description"></textarea>
            <button className="border border-blue-900 bg-blue-900 p-2 rounded-lg text-white">Add task</button>
        </form>
    </div>
  )
}

export default AddTask