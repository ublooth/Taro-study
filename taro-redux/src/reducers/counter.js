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
        console.log("action方法传参", action)
        let str = '';
        if(action.data) {
          str = '丽丽酱'
        } else {
          str = '罗宾酱'
        }
        return {
          ...state,
          name: str
        }
    default:
      return state
  }
}
