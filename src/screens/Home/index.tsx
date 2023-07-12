import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './style'
import logo from '../../../assets/imgs/logo.png'
import {
  PlusCircleIcon,
  ClipboardDocumentListIcon,
} from 'react-native-heroicons/outline'
import { defaultTheme } from '../../styles/themes/defaultTheme'
import { useContext, useEffect, useState } from 'react'
import { Task } from './components/Task'
import { TasksContext } from '../../contexts/TasksContext'

export function Home() {
  const [focusedInput, setFocusedInput] = useState('')
  const { tasksData, fetchTasksData, createTask } = useContext(TasksContext)
  const [totalTasksCreated, setTotalTasksCreated] = useState(0)
  const [totalTasksConcluded, setTotalTasksConcluded] = useState(0)
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    fetchTasksData()
    setTotalTasksCreated(tasksData.length)
    const tasksConcluded = tasksData.filter((task) => task.isCompleted)
    setTotalTasksConcluded(tasksConcluded.length)
  }, [fetchTasksData, tasksData])

  function handleFocus(inputName: string) {
    setFocusedInput(inputName)
  }

  function handleBlur() {
    setFocusedInput('')
  }

  function handleCreateNewTask(title: string) {
    createTask(title)
    setTypedText('')
  }

  return (
    <>
      <View style={styles.headerContainer}>
        <Image style={styles.image} source={logo} alt="" />
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            onFocus={() => handleFocus('input1')}
            onBlur={handleBlur}
            onChangeText={(e) => setTypedText(e)}
            value={typedText}
            style={[
              styles.input,
              focusedInput === 'input1' && styles.inputFocus,
            ]}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={defaultTheme.gray300}
          />
          <TouchableOpacity
            onPress={() => handleCreateNewTask(typedText)}
            style={styles.button}
            disabled={typedText.length < 1}
          >
            <PlusCircleIcon
              size={24}
              color={defaultTheme.gray100}
              fontWeight="bold"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoTypeContainer}>
            <Text style={styles.createdText}>Criadas</Text>
            <View style={styles.count}>
              <Text style={styles.countText}>{totalTasksCreated}</Text>
            </View>
          </View>
          <View style={styles.infoTypeContainer}>
            <Text style={styles.concludedText}>Concluídas</Text>
            <View style={styles.count}>
              <Text style={styles.countText}>{totalTasksConcluded}</Text>
            </View>
          </View>
        </View>
        <View style={styles.tasksContainer}>
          {tasksData.length >= 1 ? (
            <FlatList
              inverted
              data={tasksData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <Task task={item} />}
            />
          ) : (
            <>
              <ClipboardDocumentListIcon
                size={80}
                color={defaultTheme.gray400}
              />
              <Text style={styles.emptyTasksText1}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyTasksText2}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </>
          )}
        </View>
      </View>
    </>
  )
}
