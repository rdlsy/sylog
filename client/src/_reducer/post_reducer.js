import {
  GET_POSTS,
  INSERT_POST,
  REMOVE_POST
} from '../_action/types/posts';


export default function post(state = {}, action){
  switch(action.type){
    case GET_POSTS:
      return { ...state, posts: action.payload }
    case INSERT_POST:
      return { ...state, success: action.payload }
    case REMOVE_POST:
      return { ...state, success: action.payload }
    default:
      return state;
  }
}
