import {combineReducers} from 'redux'
import usersReducer from './usersReducer'
import singleMeditationReducer from './singleMeditationReducer'
import quizzesReducer,{quizReducer} from './quizzesReducer'
import authReducer from './authReducer'
import {journalsReducer,oneJournalReducer} from './journalsReducer'

const reducer = combineReducers({
    usersReducer,
    singleMeditationReducer,
    quizzesReducer,
    quizReducer,
    authReducer,
    journalsReducer,
    oneJournalReducer})

export default reducer
