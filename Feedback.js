import React from 'react'
import {StyleSheet,View, Text} from 'react-native'




const FeedBack = () => {
  return (
  <View style={styles.body}>  
    <Text>Hello To FeedBack </Text>
  </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex:1,
    fontSize: 200,
    justifyContent: 'center'
  }
})

export default FeedBack
