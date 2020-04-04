// 处理

import { ADD, MINUS, NAME } from '../constants/counter'

const INITIAL_STATE = {
  num: 0,
  name: '丽丽酱'
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
     case MINUS:
       return {
         ...state,
         num: state.num - 1
       }
     case NAME:
       return {
         ...state,
         name: '罗宾酱'
       }
     default:
       return state
  }
}
