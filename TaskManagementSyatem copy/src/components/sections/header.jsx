import { useState } from 'react'

function Header() {

  return (
    <>
      <div className="main text-white flex justify-between w-[100%] items-end">
        <p className='text-3xl'>Hello, <br /> <span className='text-6xl'>Balraj 👋🏻</span> </p>
      

        <button
          className='bg-red-500 py-2 px-5 rounded'
        >
          Log out
        </button>
      </div>
    </>
  )
}

export default Header
