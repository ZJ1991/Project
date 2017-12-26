/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  //初始化方法 --> 相当于viewdidload -->返回具体的组件内容
  render() {
    //返回
    return (
      <View style={styles.container}>

          {/*<Text>这是一个view</Text> 注释 */}
        <Text>这是一个view</Text>
        <View style={styles.difStyle}>
          <Text>我是里面的view</Text>
        </View>
        <View style={styles.style2}>
          <Text>我是下面的view</Text>
        </View>
      </View>
    );
  }
}

//变量用();结束
const styles = StyleSheet.create({
  container: {
    // flex: 1,//整个view展示
    backgroundColor: 'red',
      width: 200,
      height: 300,
      flexDirection:'row'/*主轴方向*/
  },
    difStyle:{
    backgroundColor: 'green',
        width:100
    },
    style2:{
        backgroundColor: 'yellow',
        width:100
    }

});
