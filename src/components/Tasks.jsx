import { useState } from "react";
import NewTask from "./NewTask";

export default function Tasks({tasks,subtasklist})
{
    const [subtasks,setSubTask]=useState([]);
    function handlesubtasks(Newsubtasks)
    {
        console.log(Newsubtasks);
        const updatedSubtasks=[...subtasks,Newsubtasks]
        setSubTask(updatedSubtasks)
        tasks(updatedSubtasks)
    }
    function handleDelete(index)
    {
        console.log(index)
        const updatedList=subtasks.filter((x,i)=>{return i!=index});
        setSubTask(updatedList);
    }
    console.log(subtasklist)
    return (
        <>
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            New Tasks
            <NewTask handlesubtasks={handlesubtasks}/>
            {!subtasklist.subtasks?
            <p>This section does not have any task</p>:
            <ul>
                {subtasklist.subtasks.map((subtask,index)=>{
                    return(
                        <li key={index} className="text-xl flex justify-between text-stone-700 px-5 my-1 bg-stone-200 w-2/3 p-1 rounded">{subtask} <button className="text-sm px-3 py-1 rounded text-stone-100 bg-red-500" onClick={()=>handleDelete(index)}>del</button></li>
                        
                    )
                })}
            </ul>
            }
        </section>
        </>
    )
}