import React, { useState } from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'




const Stats = () => {
  const [selectButton, setButton] = useState(false) //  pressedHeaderSelection

  return (
  <View style={styles.container}>  
      <View style={styles.header}>
        <View style={styles.buttonsContainer}>
          <View style={[styles.TouchInHeader, !selectButton && styles.pressedHeaderSelection]}>
          <TouchableOpacity onPress={() => { if (!selectButton) setButton(!selectButton)}} >
                <Text style={styles.textInHeader}> Left </Text>
              </TouchableOpacity>
            </View>

          <View style={[styles.TouchInHeader, selectButton && styles.pressedHeaderSelection]}>
            <TouchableOpacity onPress={() => { if (selectButton) setButton(!selectButton)}} >
                <Text style={styles.textInHeader}> Right </Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>

      {selectButton ?
          <View  style={styles.body}>
              <Text style={styles.textInHeader} >Left</Text>
          </View>
        : 
          <View  style={styles.body}>
              <Text  style={styles.textInHeader} >Right</Text>
          </View>
      }     
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#0A0A0A"
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  header:{
    paddingTop: 30,
    alignItems:'center'
  },
  textInHeader:{
    color: 'gray',
    fontSize: 28
  },
  buttonsContainer:{
    flexDirection: 'row',
    width: 290,
    height: 55,
    borderRadius: 50/2,
    borderColor: 'white',
    borderWidth: 1,
    overflow: 'hidden' // prevent child views from overflowing
  },
  TouchInHeader:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ececec"
  },
  pressedHeaderSelection:{
    backgroundColor: "#5a5a5a",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 10.0,
    shadowRadius: 16.00,
    elevation: 24
  }
})



export default Stats
