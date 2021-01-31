import axios from 'axios';
import {
  GET_POSTS,
  INSERT_POST,
  REMOVE_POST
} from './types/posts';
import { POST_SERVER } from '../components/Config.js';

export function insertPost(dataToSubmit) {
  const request = axios.post(`${POST_SERVER}/insertPost`, dataToSubmit)
    .then(response => response.data);
    
  return {
    type: INSERT_POST,
    payload: request
  }
}

export function removePost(id) {
  const request = axios.post(`${POST_SERVER}/removePost`, id)
    .then(response => response.data);

  return {
    type: REMOVE_POST,
    payload: request
  }
}

export function getPosts() {
  const request = axios.get(`${POST_SERVER}/getPosts`)
    .then(response => response.data);

  return {
    type: GET_POSTS,
    payload: request
  }
}