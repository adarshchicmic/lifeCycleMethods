import { Text, View } from 'react-native'
import React, { Component } from 'react';
import styles from "./Style/styles";
import Button from '../Button';
import {constant} from './Constant'
export default class ShouldComponentUpdatee extends Component {
    constructor(props){
        super(props);
        this.state = {UpdateComponent: true, text: constant.red}
    }
    shouldComponentUpdate(prevState,nextProps){
        // console.log(prevState,nextProps,"states");
        return true;
    }
    changeText = () =>{
        this.setState({text: constant.blue})
    }
  render() {
    return (
      <View>
        <Text style = {styles.headingText}>{constant.shouldContentUpdate}</Text>
        <Text style = {styles.textColor}>{constant.fovoriteColor} {this.state.text}</Text>
        <Button text = {constant.shouldComponentUpdateText} onPress = {this.changeText} />
      </View>
    )
  }
}