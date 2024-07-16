import React, { useState } from 'react'
import SearchTask from './SearchTask'
import TaskAction from './TaskAction'
import TaskList from './TaskList'
import AddTaskModal from './AddTaskModal'
import NoTasksFound from './NoTasksFound'


const TaskBoard = () => {

  const defaultTask = {
    'id': crypto.randomUUID(),
    'title':'Learn React Native',
    'description': 'I want to Learn React such than I can treat it like my slave and make it do whatever I want to do.',
    'tags': ['web', 'react', 'js'],
    'priority': 'High',
    'isFavorite': true
  }

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddEditTask(newTask, isAdd) {
    if(isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if(task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      )
    }
    
    setShowAddModal(false)
  }

  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModal(true);

  }

  function handleCloseClick() {
    setShowAddModal(false);
    setTaskToUpdate(null);
  }

  function handleDeleteTask(taskId) {
    const taskAfterDelete = tasks.filter(task => task.id !== taskId)
    setTasks(taskAfterDelete)
  }

  function handleDeleteAllClick() {
    tasks.length = 0
    setTasks([...tasks])
  }

  function handleOnFav(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId)

    const newTasks = [...tasks]

    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite

    setTasks(newTasks)
  }

  function handleSearch(searchTerm) {
    console.log(searchTerm)

    const filtered = tasks.filter((task) => task.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))

    setTasks([...filtered])
  }

  return (
    <section className='mb-20 '>
      {showAddModal && <AddTaskModal onSave={handleAddEditTask} taskToUpdate={taskToUpdate} onCloseClick={handleCloseClick}/>}
        <div className='container'>
            <div className='p-2 flex justify-end'>
                <SearchTask onSearch={handleSearch}/>
            </div>
            <div className='rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16'>
            <TaskAction onAddClick={() => setShowAddModal(true)} onDeleteAllClick={handleDeleteAllClick}/>
              {
                tasks.length > 0 ?
            (<TaskList  tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} onFav={handleOnFav}/>)
            : (<NoTasksFound />)
              }
            </div>
        </div>
    </section>
  )
}

export default TaskBoard