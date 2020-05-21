import { Component, connectSocket } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { changeName } from '../../actions/counter.js'

@connect(({counter}) => ({
  counter
}),(dispatch) => ({
  setName(str) {
    dispatch(changeName(str))
  }
}))

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: true,
    }
  }

  config = {
    navigationBarTitleText: 'home'
  }

  componentDidShow (nextProps) {
    console.log('22', this.props)
    console.log("路由", this.$router.params)
  }

  name = () => {
    // setState() 不仅能够接受一个对象作为参数，还能够接受一个函数作为参数。参数即为 state 的前一个状态以及 props
    this.setState((prevState, props) => (
      {bool: !prevState.bool}
    ),() => {
      this.props.setName(this.state.bool)
    })
  }

  render() {
    return(
      <View>
        <View>{this.props.counter.num}</View>
        <View>{this.props.counter.name}</View>
        <View>{this.$router.params.bool}</View>
        <Button onClick={ this.name }>改变name</Button>
      </View>
    )
  }
}