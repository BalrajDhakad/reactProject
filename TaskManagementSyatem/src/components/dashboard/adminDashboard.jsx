import { useState } from 'react'
import Header from '../sections/header'
import CreateTask from '../sections/taskCreation'
import TaskList from '../sections/taskList'

function AdminDash() {

  return (
    <>
    <div className="main p-16">
      <Header/>
      <CreateTask/>
      <TaskList/>
    </div>
    </>
  )
}

export default AdminDash
