import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import TaskBoard from './components/task/TaskBoard'

const App = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-col justify-center items-center'>
      <Hero />
      <TaskBoard />
      </div>
      <Footer />
    </div>
  )
}

export default App