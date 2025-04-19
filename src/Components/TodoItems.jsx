import React from 'react'
import tick_icon from '../assets/assets/tick.png'
import delete_icon from '../assets/assets/delete.png'

const TodoItems = (props) => {
 
  return (
    <>
             <div className="flex items-center my-3">
                <div className='flex flex-1 items-center gap-2 cursor-pointer'>
                   <img src={tick_icon} alt="Tick image"className='w-7'/>
                    <p className='text-slate-700 ml-4 text-[17px]'>{props.text}</p>
                </div>
               <img src={delete_icon} alt="Delete image" className="w-4 curser:pointr"/>
             </div>
    </>
  )
}

export default TodoItems
