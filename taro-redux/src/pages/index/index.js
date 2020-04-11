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
  changeName (data) {
    dispatch(changeName(data))
  }
}))
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: true,
    }
  }

  config = {
    navigationBarTitleText: '首页'
  }

  goToHome = () => {
    Taro.navigateTo({
      url: '/pages/home/index',
    })
  }
// 先保存，后调用,解决 setState 异步问题
  change = () => {
    this.setState({
      bool: !this.state.bool
    },() => {
      console.log('this', this.state.bool)
      this.props.changeName(this.state.bool)
    })
    
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
        <Button className='dec_btn' onClick={this.change}>changeName</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>{this.props.counter.name}</Text></View>
        <View><Text>Hello, World</Text></View>
        <Button onClick={this.goToHome}>跳转到home页面</Button>
      </div>
    )
  }
}

export default Index
