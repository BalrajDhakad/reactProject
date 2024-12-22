import { useState } from 'react'
import TaskDisplayCard from './taskDiaplayCard'

function TaskList() {

  return (
    <>
    <div className="main">
      <div className="emp1 bg-gray-800 rounded-xl mt-10 p-10">
        <p className='text-4xl mb-5 font-bold'>Balraj</p>

        <div className="dataCards flex gap-10">
          <TaskDisplayCard/>
        </div>
      </div>
      <div className="emp1 bg-gray-800 rounded-xl mt-10 p-10">
        <p className='text-4xl mb-5 font-bold'>Kuldeep</p>

        <div className="dataCards flex gap-10">
          <TaskDisplayCard/>
        </div>
      </div>
      <div className="emp1 bg-gray-800 rounded-xl mt-10 p-10">
        <p className='text-4xl mb-5 font-bold'>Karan</p>

        <div className="dataCards flex gap-10">
          <TaskDisplayCard/>
        </div>
      </div>
      <div className="emp1 bg-gray-800 rounded-xl mt-10 p-10">
        <p className='text-4xl mb-5 font-bold'>Rohit</p>

        <div className="dataCards flex gap-10">
          <TaskDisplayCard/>
        </div>
      </div>
    </div>
    </>
  )
}

export default TaskList
