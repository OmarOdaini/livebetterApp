import React, { useState } from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Ripple from 'react-native-material-ripple'
import PieChart from '../utils/PieChart'

const Stats = () => {
  const [selectButton, setButton] = useState(false)         //  pressedHeaderSelection
  
  return (
  <View style={styles.container}>  
      <View style={styles.header}>
        <View style={styles.buttonsContainer}>
            <View style={[styles.ButtonInHeader, !selectButton && styles.pressedHeaderSelection]}>
              <TouchableOpacity style={ styles.TOinHeader} onPress={() => { if (!selectButton) setButton(!selectButton)}} >
                    <Text style={[styles.textInHeader, selectButton && styles.PressedtextInHeader]}>Daily </Text>
                  </TouchableOpacity>
                </View>

            <View style={[styles.ButtonInHeader, selectButton && styles.pressedHeaderSelection]}>
                <TouchableOpacity style={ styles.TOinHeader} onPress={() => { if (selectButton) setButton(!selectButton)}} >
                    <Text style={[styles.textInHeader, !selectButton && styles.PressedtextInHeader]}> Weekly </Text>
                  </TouchableOpacity>
                </View> 
        </View>
      </View>
      
      {selectButton ?
        <View  style={styles.body}>          
            <View style={styles.slider}>   
                  <Ripple style={styles.CounterButton} rippleDuration={800} rippleCentered={true} onpress={() => console.log('dd')}>
                      <Icon style={[{color: 'white'}]} size={30} name={'ios-arrow-back'} />
                    </Ripple>
                  
                  <Text style={styles.Day} >Tuesday 06/12</Text>

                  <Ripple style={styles.CounterButton} rippleDuration={800} rippleCentered={true} onpress={() => console.log('dd')}>
                      <Icon style={[{color: 'white'}]} size={30} name={'ios-arrow-forward'} />
                    </Ripple>
                  
              </View>
              <View style={ styles.Chart}>
                <PieChart  data={[{ title: 'App Dev', data: [{time: '3.2', date: '12/03/2014'}, {time: '3', date: '12/04/2014'}]},{ title: 'App Dev', data: [{time: '1.2', date: '12/03/2014'}, {time: '3', date: '12/04/2014'}]},{ title: 'App Dev', data: [{time: '1.2', date: '12/03/2014'}, {time: '3', date: '12/04/2014'}]}]}/>
              </View>
        </View> 
      : 
          <View style={styles.body}> 
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
  header:{
    paddingTop: 50,
    alignItems:'center'
  },
  body: {
    flex: 1
  }, 
  slider:{
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Chart:{
    flex: 6,
    // backgroundColor: 'green',
  },
  textInHeader:{
    color: '#C2C2C2',
    fontSize: 20
  },
  PressedtextInHeader:{
    color: 'black',
    fontSize: 20
  },
  buttonsContainer:{
    flexDirection: 'row',
    width: 290,
    height: 35,
    borderRadius: 30/2,
    borderColor: 'white',
    borderWidth: 0.5,
    overflow: 'hidden' // prevent child views from overflowing
  },
  ButtonInHeader:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#CCD2CF"
  },
  TOinHeader:{
    width: 290/2,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pressedHeaderSelection:{
    backgroundColor: "#383838",
    shadowColor: "black"
  },
  Day:{
    fontWeight: 'bold',
    marginLeft: 15,
    marginRight: 15,
    color: '#CCD2CF',
    fontSize: 25
  },
  CounterButton:{
    elevation: 30,
    width: 60,
    height: 60,
    borderRadius: 60/2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#011137"
  }
})



export default Stats
