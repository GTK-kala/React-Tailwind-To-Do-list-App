import React from 'react'
import  todo_icon from '../assets/assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {
  return (
    <>
        <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-5 min-h-[400px] rounded-xl my-5">
              
{/* ------------------------titel-------------------- */}

        <div className='flex items-center  mt-2 gap-2'>
          <img src={todo_icon} alt="Image of ToDoList" className='w-8 h-8'/>
           <h1 className='text-3xl font-semibold'>To-Do-List</h1>
        </div>  

{/* ------------------------input-------------------- */}      
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
          <input type="text" placeholder='Add a new task' className='bg-transparent border-0 outiline-none flex-1 h-14 pl-6 placeholder:text-slete-600'/>
          <button className='border-none rounded-full bg-orange-600 w-32 h-14 tex-white text-xl font-medium   hover:bg-orange-500 active:bg-orange-400 font-bold cursor-pointer focus-none'>ADD +</button>
        </div> 

{/* ------------------------task-------------------- */}

        <div>
              <TodoItems/> 
              <TodoItems/> 
              <TodoItems/> 
        </div>
        
      </div>   
    </>
  )
}

export default Todo
