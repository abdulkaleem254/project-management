import Tasks from "./Tasks"
export default function OutputProject({ details,handlingDelete,subTasks}) {
    console.log(details)
    // const formattedDate=new Date(details.dueDate).toLocaleString('en-US',{
    //     year: 'numeric',
    //     month: 'short',
    //     day: 'numeric',
    // });
    function handleDelete(details)
    {
        handlingDelete(details.id)
    }
    function mysubtasks(items)
    {
        subTasks(items,details.id);
    }
    return (
        <div className="output-project mt-24  w-1/3">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{details.title}</h1>
                    <button className="text-stone-600 hover:text-stone-950 hover:border-stone-800 border-2 border-stone-500 px-4 py-1" onClick={()=>{handleDelete(details)}}>delete</button>
                </div>
                <p className="mb-4 text-stone-400">{details.date}</p>
                <p className="text-stone-600 whitespace-pre-wrap text-lg">{details.description}</p>
            </header>
            <Tasks tasks={mysubtasks} subtasklist={details}/>
        </div>
    )
}