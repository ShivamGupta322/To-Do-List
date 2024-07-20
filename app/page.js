"use client"
import React, { useState } from 'react'

const page = () => {
 const [title, settitle] = useState("")
 const [desc, setdesc] = useState("")
const [mainTask, setmainTask] = useState([])
 const submitHandler=(e)=>{
  e.preventDefault()
  setmainTask([...mainTask,{title,desc}])
  settitle("")
  setdesc("")
};

const deleteHandler=(i)=>{
  let copytask=[...mainTask]
  copytask.splice(i,1)
  setmainTask(copytask)
}

let renderTask=<h2 className='flex justify-center items-center text-xl font-medium'>No Task Available</h2>

if(mainTask.length>0){
  renderTask=mainTask.map((t,i)=>{
    return (
    <li key={i} className='flex items-center justify-between mb-8'>
      <div className='flex justify-between mb-5 w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <t6 className='text-lg font-medium'>{t.desc}</t6>
    </div>
    <button onClick={()=>{deleteHandler(i)}} className='text-white bg-red-500 hover:bg-red-700 text-sm font-bold py-2 px-4 rounded-full m-5'>Delete</button>
    </li>
    
    );
  });
}


  return (
    <>
    <h1 className='bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-5 text-5xl font-bold text-center font-sans'>Shivam's ToDo List</h1>
    <form onSubmit={submitHandler}>
        <input type='text' className='bg-gradient-to-l hover:bg-gradient-to-r bg-gradient-to-r from-zinc-200 to-slate-300 text-2xl border-zinc-800 border-4 m-5 px-4 py-2 mt-[10vh]' placeholder='Add a new task' value={title} onChange={(e)=>{settitle(e.target.value)}}/>
        <input type='text' className='bg-gradient-to-l hover:bg-gradient-to-r bg-gradient-to-r from-zinc-200 to-slate-300 text-2xl border-zinc-800 border-4 m-5 px-4 py-2 mt-[10vh] ml-[20vw]' placeholder='Enter Description' value={desc} onChange={(e)=>{setdesc(e.target.value)}}/>
        <button className='text-white bg-blue-500 hover:bg-blue-700 text-xl font-bold py-2 px-4 rounded-full m-5 ml-[15vw]'>Add Task</button>  
     </form>
    <hr/>
    <div className='p-8 bg-gradient-to-r from-sky-500 to-indigo-500 '>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page