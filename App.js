import React from 'react'
import {StyleSheet,View, Text} from 'react-native'
import MainPage from './MainPage'   
import TabNavigator from './TabNavigator'   



const App = () => {
  return (
  <View style={styles.body}>  
      <View style={styles.page}> 
          <TabNavigator />
        </View>
  </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex:1,
  },
  mainMenuView: {
    flex:1, 
    backgroundColor:"#C0C0C0"
  },
  page: {
    flex:10
  }
})

export default App
