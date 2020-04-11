import { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

@connect(({counter}) => ({
  counter
}),(dispatch) => ({
  
}))

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  config = {
    navigationBarTitleText: 'home'
  }

  componentDidShow (nextProps) {
    console.log('22', this.props)
  }

  render() {
    return(
      <View>
        <View>{this.props.counter.num}</View>
        <View>{this.props.counter.name}</View>
      </View>
    )
  }
}