import { combineReducers } from 'redux';
import postsReducer from "./postReducers";
import usersReducer from './usersReducer';

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});