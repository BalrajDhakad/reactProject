import { useState } from 'react'

function CreateTask() {

  return (
    <>
      <div className="main rounded-xl mt-16 w-full h-full bg-gray-800 p-24 ">
        <form className='flex justify-between'>
          <div className="content1">
            <p>Task Title</p>
            <input 
              type="text"
              className='rounded bg-gray-800 px-4 mb-5 w-[300%] outline-none py-2 border-2 border-gray-700 '
              placeholder='Make a UI design'
            />
            <p>Date</p>
            <input 
              type="date"
              className='rounded bg-gray-800 px-4 mb-5 w-[300%] outline-none py-2 border-2 border-gray-700 '
              placeholder=''
            />
            <p>Assign To</p>
            <input 
              type="text"
              className='rounded bg-gray-800 px-4 mb-5 w-[300%] outline-none py-2 border-2 border-gray-700 '
              placeholder='Employee names'
            />
            <p>Category</p>
            <input 
              type="text"
              className='rounded bg-gray-800 px-4 mb-5 w-[300%] outline-none py-2 border-2 border-gray-700 '
              placeholder='Design, dev, etc'
            />
          </div>

          <div className="content2 flex flex-col">
            <p>Description</p>
            <textarea className='rounded bg-gray-800 mb-10 w-96 h-full py-5 px-5 border-2 border-gray-700 '></textarea>
            <button 
              type='submit' 
              className='bg-green-400 px-10 hover:bg-green-500 hover:text-white py-5 rounded text-black font-semibold text-xl '
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateTask
