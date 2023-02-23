import { Text, View } from 'react-native';
import React, { Component } from 'react';
import styles from './Style/styles';
import Button from '../Button';
import { constant } from './Constant';

export default class GetDerivedStateFromPropss extends Component {
    constructor(props){
        super(props)
        this.state = {name: constant.lastName}
    }

    static getDerivedStateFromProps(props, state){
        return {name: constant.name};
    }
    
    hangeName = () =>{
        this.setState({name: constant.dummyName})
    }
sfsdfdsfdssdafdsf
  render() {
    return (
      <View>
        <Text style = {styles.headingText}>{constant.getDerivedStateFromProp}</Text>
        <Text style = {styles.textColor}>{constant.myNameis} {this.state.name}</Text>
        <Button text = {constant.onPressDerivedPops} onPres = {this.changeName} />
      </View>
    )
  }
}