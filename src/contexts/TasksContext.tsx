import { ReactNode, createContext, useState } from 'react'
import { api } from '../services/api'

interface TasksType {
  id: string
  title: string
  isCompleted: boolean
  description?: string
}

interface TaskRequisition {
  _id: string
  title: string
  isCompleted: boolean
  description?: string
}

interface TasksContextType {
  tasksData: TasksType[]
  fetchTasksData: () => void
  deleteTask: (id: string) => void
  createTask: (title: string) => void
  changeTaskIsCompleted: (id: string) => void
}

export const TasksContext = createContext({} as TasksContextType)

interface TasksProviderProps {
  children: ReactNode
}

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasksData, setTasksData] = useState<TasksType[]>([])

  async function changeTaskIsCompleted(id: string) {
    await api.patch(`/tasks/${id}/complete`).catch((e) => console.log(e))
  }

  async function deleteTask(id: string) {
    await api.delete(`/tasks/${id}`).catch((e) => console.log(e))
  }

  async function createTask(title: string) {
    await api
      .post('/tasks', { title, isCompleted: 'false', description: '' })
      .catch((e) => console.log(e))
  }

  async function fetchTasksData() {
    try {
      const response = await api.get('/tasks').catch((e) => {
        console.log(e)
      })

      const tasks = response?.data.tasks.map((task: TaskRequisition) => ({
        id: task._id,
        title: task.title,
        description: task.description,
        isCompleted: task.isCompleted,
      }))

      setTasksData(tasks)
    } catch (error) {}
  }

  return (
    <TasksContext.Provider
      value={{
        tasksData,
        fetchTasksData,
        changeTaskIsCompleted,
        deleteTask,
        createTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
