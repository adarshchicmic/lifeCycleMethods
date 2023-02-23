import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from './Style/styles';
export default class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {hasError : false}
    }
    static getDerivedStateFromError(error){
        console.log(error);
        return {hasError: true};
    }
    componentDidCatch(error, errorInfo){
        console.log (error, "   herer ", errorInfo)
        logErrorToMyService(error, errorInfo);
    }

  render() {
    if (this.state.hasError){
        return(<Text style = {[styles.headingText,{flex:1,justifyContent:'center',alignItems:'center'}]}> Something Went Wrong</Text>)
    }
    return this.props.children;
  }
}