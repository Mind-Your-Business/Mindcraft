import { AsyncStorage } from 'react-native';

const STORAGE_KEY= 'USER'

const DEFAULT_SETTINGS = {
  email: '',
  googleId: '',
  id: null,
  totalJournalEntries: null,
  totalMeditations: null,
  totalQuizzes: null
}

export const loadUser = async () => {
  try {
    let user = await AsyncStorage.getItem(STORAGE_KEY)

    if (user === null) {return DEFAULT_SETTINGS}
    console.log("USER", user)
    return JSON.parse(user)
  } catch (error) {
    console.log('Error loading settings', error)
  }
}

export const saveUser = (user) => {
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(user))
}