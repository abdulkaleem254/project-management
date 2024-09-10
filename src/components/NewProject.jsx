import Input from "./Input";
import {useRef} from "react";
import Modal from "./Modal";
export default function NewProject({onStartAddProject,cancel,handleAddProject})
{
    const pclass="text-stone-700 mb-4"
    const modal=useRef();
    const title=useRef();
    const description=useRef();
    const date=useRef();
    function handleSave()
    {
        const enteredTitle=title.current.value;
        const enteredDescription=description.current.value;
        const enteredDate=date.current.value;
        const project={title:enteredTitle,description:enteredDescription,date:enteredDate};
        if(enteredTitle.trim()==""||enteredDescription.trim()=="")
        {
            // error modal
            modal.current.open();
            return;
        }
        handleAddProject(project)
    }
    // validation

    return(
        <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className="text-xl font-bold text-stone-800 mb-3">Invalid Input</h2>
            <p className={pclass}>Oops.. Looks like you forgot to enter a value.</p>
            <p className={pclass}>Please make sure to provide a valid value</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950" onClick={cancel}>cancel</button></li>
                <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>save</button></li>
            </menu>
            <div>
                {<Input  ref={title} label={"Title"} textarea={false} type={"text"} placeholder={"Enter title"}/>}
                {<Input  ref={description} label={"Description"} textarea={true}/>}
                {<Input ref={date} label={"Due date"} textarea={false} type={"date"} placeholder={"Select date"}/>}
            </div>
        </div>
        </>

    )
}