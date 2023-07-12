import { StyleSheet } from 'react-native'
import { defaultTheme } from '../../styles/themes/defaultTheme'

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: defaultTheme.gray700,
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    height: 54,
    width: 328,
    marginTop: -30,
    gap: 5,
    alignSelf: 'center',
  },
  mainContainer: {
    backgroundColor: defaultTheme.gray600,
    flex: 1,
  },
  infoContainer: {
    marginTop: 15,
    flexDirection: 'row',
    width: 328,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tasksContainer: {
    width: 328,
    paddingTop: 48,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: defaultTheme.gray400,
    flex: 1,
  },
  image: {
    width: 120,
    height: 32,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    borderRadius: 6,
    backgroundColor: defaultTheme.gray500,
    color: defaultTheme.gray100,
  },
  inputFocus: {
    borderColor: defaultTheme.blue,
    borderWidth: 2,
    flex: 1,
    paddingLeft: 10,
    borderRadius: 6,
    backgroundColor: defaultTheme.gray500,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 52,
    borderRadius: 6,
    backgroundColor: defaultTheme.blue,
  },
  infoTypeContainer: {
    flexDirection: 'row',
    gap: 6,
  },
  createdText: {
    color: defaultTheme.blue,
    fontWeight: 'bold',
  },
  concludedText: {
    color: defaultTheme.purple,
    fontWeight: 'bold',
  },
  count: {
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: defaultTheme.gray400,
    color: 'white',
    fontWeight: 'bold',
  },
  countText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyTasksText1: {
    marginTop: 16,
    color: defaultTheme.gray300,
    fontWeight: 'bold',
  },
  emptyTasksText2: {
    color: defaultTheme.gray300,
  },
})
