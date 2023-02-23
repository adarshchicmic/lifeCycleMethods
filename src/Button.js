import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import styles from './Component/Style/styles';

export default class Button extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <TouchableOpacity style = {styles.button} onPress = {this.props.onPress}>
        <Text style = {styles.buttonText}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}