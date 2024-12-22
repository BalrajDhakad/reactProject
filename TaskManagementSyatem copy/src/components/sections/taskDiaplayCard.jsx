import { useState } from 'react'

function TaskDisplayCard() {


  return (
    <>
      <div 
        className="main w-[25%] py-16 rounded-lg bg-green-400 flex flex-col items-center justify-center"
      >
        <p className="taskNumber text-6xl font-black">10</p>
        <p className="taskType text-2xl ">New Task</p>
      </div>
      <div 
        className="main w-[25%] py-16 rounded-lg bg-blue-400 flex flex-col items-center justify-center"
      >
        <p className="taskNumber text-6xl font-black">50</p>
        <p className="taskType text-2xl ">Completed Task</p>
      </div>
      <div 
        className="main w-[25%] py-16 rounded-lg bg-yellow-500 flex flex-col items-center justify-center"
      >
        <p className="taskNumber text-6xl font-black">5</p>
        <p className="taskType text-2xl ">Accepted Task</p>
      </div>
      <div 
        className="main w-[25%] py-16 rounded-lg bg-red-400 flex flex-col items-center justify-center"
      >
        <p className="taskNumber text-6xl font-black">0</p>
        <p className="taskType text-2xl ">Failed Task</p>
      </div>
    </>
  )
}

export default TaskDisplayCard
