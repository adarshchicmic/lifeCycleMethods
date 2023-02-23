import React, {Component} from "react";
import {
  View,
  Text,
  SafeAreaView,
} from "react-native";
// import ErrorBoundary from "./src/Component/ErrorBoundary";
import GetDerivedStateFromPropss from "./src/Component/GetDerivedStateFromPropss";
import ShouldComponentUpdatee from './src/Component/ShouldComponentUpdatee';
import styles from './src/Component/Style/styles';
import {constant} from "./src/Component/Constant";

class App extends Component{
  render(){
    return(
        // <ErrorBoundary>
      <SafeAreaView style = {styles.container}>
          <ShouldComponentUpdatee />
          <GetDerivedStateFromPropss value = "Adarsh" />
      </SafeAreaView>
        // </ErrorBoundary>
    )
      
  }
}

export default App;



