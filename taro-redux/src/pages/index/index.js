import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd, changeName } from '../../actions/counter'

import './index.scss'

// connect 方法将 redux 与我们的页面进行连接
@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  },
  changeName () {
    dispatch(changeName())
  }
}))
class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <div className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <Button className='dec_btn' onClick={this.props.changeName}>changeName</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>{this.props.counter.name}</Text></View>
        <View><Text>Hello, World</Text></View>
      </div>
    )
  }
}

export default Index
