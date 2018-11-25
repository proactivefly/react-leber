import {combineReducers} from 'redux';
import {user} from './redux/user.js';
import {chatuser} from './chatUser';
import {chat} from './chat';

const reducers = {
  user,
  chatuser,
  chat
}

export default combineReducers({
    ...reducers
})
