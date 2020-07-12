import React from 'react'
import {StyleSheet,View, Text} from 'react-native'




const Stats = () => {
  return (
  <View style={styles.body}>  
    <Text>Hello To Statistics </Text>
  </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex:1,
    fontSize: 200
  }
})

export default Stats
