import { TrashIcon, CheckIcon } from 'react-native-heroicons/outline'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import { defaultTheme } from '../../../../styles/themes/defaultTheme'
import { useContext } from 'react'
import { TasksContext } from '../../../../contexts/TasksContext'

interface TaskProps {
  id: string
  title: string
  description?: string
  isCompleted: boolean
}

interface Task {
  task: TaskProps
}

export function Task({ task }: Task) {
  const { changeTaskIsCompleted, deleteTask } = useContext(TasksContext)

  function handleChangeTaskState() {
    changeTaskIsCompleted(task.id)
  }

  function handleDeleteTask() {
    deleteTask(task.id)
  }

  return (
    <View style={styles.baseContainer}>
      {task.isCompleted ? (
        <>
          <TouchableOpacity
            onPress={handleChangeTaskState}
            style={styles.checkedButton}
          >
            <CheckIcon
              fontWeight={700}
              size={14}
              color={defaultTheme.gray100}
            />
          </TouchableOpacity>
          <Text style={styles.textChecked}>{task.title}</Text>
        </>
      ) : (
        <>
          <TouchableOpacity
            onPress={handleChangeTaskState}
            style={styles.uncheckedButton}
          ></TouchableOpacity>
          <Text style={styles.textUnchecked}>{task.title}</Text>
        </>
      )}
      <TouchableOpacity
        onPress={() =>
          Alert.alert(
            'Deletar tarefa?',
            `Deseja deletar tarefa - ${task.title}?`,
            [
              { text: 'Sim', onPress: handleDeleteTask },
              { text: 'Não', style: 'cancel' },
            ],
          )
        }
      >
        <TrashIcon size={22} color={defaultTheme.gray300} />
      </TouchableOpacity>
    </View>
  )
}
