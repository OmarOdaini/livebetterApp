import React from 'react'
import {StyleSheet,View, Text} from 'react-native'




const FeedBack = () => {
  return (
  <View style={styles.container}>  
    <Text style={styles.textInHeader}>Hello To FeedBack </Text>
  </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:"#0A0A0A"
    },
    textInHeader:{
      color: 'gray',
      fontSize: 28
    }
})

export default FeedBack
