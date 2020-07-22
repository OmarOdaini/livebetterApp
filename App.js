import React from 'react'
import {StyleSheet,View} from 'react-native'
import TabNavigator from './TabNavigator'   
import Reset from './Reset'   



const App = () => {
  return (
  <View style={styles.body}>  
      <View style={styles.page}> 
          <TabNavigator />
          <Reset />
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
