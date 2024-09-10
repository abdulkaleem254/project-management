import { useRef, useState } from "react";

export default function NewTask({handlesubtasks})
{
    const [subTask,setSubTask]=useState();
    let task=useRef();
    function hanldeTask(e)
    {
        e.preventDefault();
        handlesubtasks(task.current.value)
        task.current.value = "";
    }
    console.log(subTask)
    return (
        <>
        <div className="container">
            <form className="">
            <input type="text" ref={task} placeholder="Enter sub task" className="border-2 border-black my-2 px-3 py-1 text-xl rounded"/>
            <button className="mx-2 border-2 border-black p-1 px-4 rounded" onClick={(e)=>{hanldeTask(e)}}>Add Task</button>
            </form>
        </div>
        </>
    )
}