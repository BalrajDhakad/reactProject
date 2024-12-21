import { useState } from 'react'

function SwipeCards() {

  return (
    <>
    <div id='swipeCard' className="main flex gap-10 flex-nowrap items-center justify-start overflow-x-auto ">
      <div className="bg-blue-400 w-1/4 h-96 rounded-xl flex-shrink-0 bg-green-400 p-10">
        <div className="header flex justify-between">
          <p className="priority text-md bg-red-600 px-3 py-1 rounded">High</p>
          <p className="date">21 Dec 2024</p>
        </div>

        <div className="content mt-12">
          <p className="heading text-2xl font-semibold mb-3">
            Make a YT video
          </p>
          <p className="text text-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dolor nihil magni amet debitis. Dignissimos fugit perferendis saepe soluta accusantium.
          </p>
        </div>
      </div>


      <div className="bg-blue-400 w-1/4 h-96 rounded-xl flex-shrink-0 bg-red-400 p-10">
        <div className="header flex justify-between">
          <p className="priority text-md bg-green-600 px-3 py-1 rounded">Medium</p>
          <p className="date">22 Dec 2024</p>
        </div>

        <div className="content mt-12">
          <p className="heading text-2xl font-semibold mb-3">
            Make a IG video
          </p>
          <p className="text text-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dolor nihil magni amet debitis. Dignissimos fugit perferendis saepe soluta accusantium.
          </p>
        </div>
      </div>


      <div className="bg-blue-400 w-1/4 h-96 rounded-xl flex-shrink-0 bg-yellow-500 p-10">
        <div className="header flex justify-between">
          <p className="priority text-md bg-gray-400 px-3 py-1 rounded">Low</p>
          <p className="date">20 Dec 2024</p>
        </div>

        <div className="content mt-12">
          <p className="heading text-2xl font-semibold mb-3">
            Make a YT video
          </p>
          <p className="text text-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dolor nihil magni amet debitis. Dignissimos fugit perferendis saepe soluta accusantium.
          </p>
        </div>
      </div>


      <div className="bg-blue-400 w-1/4 h-96 rounded-xl flex-shrink-0 bg-blue-400 p-10">
        <div className="header flex justify-between">
          <p className="priority text-md bg-green-600 px-3 py-1 rounded">Medium</p>
          <p className="date">21 Dec 2024</p>
        </div>

        <div className="content mt-12">
          <p className="heading text-2xl font-semibold mb-3">
            Make a YT video
          </p>
          <p className="text text-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dolor nihil magni amet debitis. Dignissimos fugit perferendis saepe soluta accusantium.
          </p>
        </div>
      </div>
    </div>
    </>
  ) 
}

export default SwipeCards