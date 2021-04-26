import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const FeedBack = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textInHeader}>FeedBack Coming soon . . . </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#0A0A0A"
  },
  textInHeader: {
    color: 'white',
    textAlign: 'center',
    fontSize: 38
  }
})

export default FeedBack
