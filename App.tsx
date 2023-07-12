import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Home } from './src/screens/Home'
import { TasksProvider } from './src/contexts/TasksContext'

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <TasksProvider>
        <Home />
      </TasksProvider>
    </>
  )
}
