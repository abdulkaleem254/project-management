// import { createPortal } from "react-dom";
// import { forwardRef, useImperativeHandle, useRef } from "react";
// const Modal = forwardRef(function Modal({children, ref})
// {
//     const dialog=useRef()
//     useImperativeHandle(ref,()=>{
//         return {
//             open(){
//                 dialog.current.showModal();
//             }
//         }
//     })
//     return(
//         createPortal(
//             <dialog>
//             {children}
//         </dialog>,document.getElementById("modal-root")
//         )
//     );
// });
// export default Modal;

import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";   

const Modal=forwardRef(function Modal({children,buttonCaption},ref)
{
    const dialog=useRef();
    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })
    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 rounded-md p-4 shadow-md">
            {children}
            <form method="dialog" className="w-100 border-stone-800 mt-4 text-right">
                <button className="bg-stone-800 text-stone-200 px-5 py-2 rounded-md text-right">{buttonCaption}</button>
            </form>
        </dialog>,document.getElementById("modal-root")
    );
});

export default Modal;


