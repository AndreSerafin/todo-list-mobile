import { StyleSheet } from 'react-native'
import { defaultTheme } from '../../../../styles/themes/defaultTheme'

export const styles = StyleSheet.create({
  baseContainer: {
    flexDirection: 'row',
    backgroundColor: defaultTheme.gray500,
    flex: 1,
    width: 328,
    height: 64,
    alignItems: 'center',
    padding: 12,
    paddingRight: 8,
    marginBottom: 8,
    borderRadius: 6,
    gap: 8,
  },
  textUnchecked: {
    flex: 1,
    fontSize: 14,
    alignSelf: 'center',
    color: defaultTheme.gray100,
  },
  textChecked: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: defaultTheme.gray300,
    textDecorationLine: 'line-through',
  },
  checkedButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 999,
    borderColor: defaultTheme.blue,
    backgroundColor: defaultTheme.purple,
  },
  uncheckedButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 999,
    borderColor: defaultTheme.blue,
  },
})
