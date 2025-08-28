import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootStackNavigator from './src/navigator/RootStackNavigator'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
         <RootStackNavigator/>
   
    </NavigationContainer>


  )
}

export default App

const styles = StyleSheet.create({})