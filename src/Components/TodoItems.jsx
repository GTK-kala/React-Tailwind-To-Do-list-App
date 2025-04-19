import React from 'react'
import tick_icon from '../assets/assets/tick.png'
import not_tick_icon from '../assets/assets/not_tick.png'
import delete_icon from '../assets/assets/delete.png'

const TodoItems = ({text, id , Completed , DeletTaskes , complet}) => {
 
  return (
    <>
             <div className="flex items-center my-3">
                <div onClick={() =>{
                    Completed(id)
                }} className='flex flex-1 items-center gap-2 cursor-pointer'>
                   <img src={complet ? tick_icon : not_tick_icon} alt="Tick image"className='w-7'/>
                    <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${complet ? "line-through" : ""}`}>{text}</p>
                </div> 
                <button  onClick={() =>{
                   DeletTaskes(id)
                }} className='cursor-pointer'>
                   <img src={delete_icon} alt="Delete image" className="w-4"/>
                </button> 
                  
             </div>
    </>
  )
}

export default TodoItems
