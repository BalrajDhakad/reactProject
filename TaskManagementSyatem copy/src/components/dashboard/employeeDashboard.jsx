import { useState } from 'react'
import Header from '../sections/header'
import TaskDisplayCard from '../sections/taskDiaplayCard'
import SwipeCards from '../sections/swipeCards'

function EmployeeDash() {

  return (
    <>
    <div className="main p-16">
      <Header/>
      <br />
      <br />
      <br />
      <div className="taskDisplayCards flex gap-10">
        <TaskDisplayCard /> 
      </div>
      <div className="cards mt-20">
        <SwipeCards/>
      </div>
    
    </div>
    </>
  )
}

export default EmployeeDash
