import React, { useState, useEffect } from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {getAllArchive} from '../DBSchemas/activitiesArchiveSchema'
import PieChart from '../PieChart'

const currArchives = async (setArchives) => setArchives(await getAllArchive())

// const AddupTime = (records, from, to) =>{
//   var Total = [0,0,0]
//   for (var i = 0, len = records.length; i < len; i++) {
//        Total[0] = Total[0] + records[i][0]
//        if(Total[0] > 59){
//          // increase mins Total[1]
//        }
//        Total[1] = Total[1] + records[i][1]
//        if(Total[1] > 59){
//         // increase hours Total[2]
//       }
//       Total[2] = Total[2] + records[i][2]
//   }
//   return time
// }

const Stats = () => {
  const [selectButton, setButton] = useState(false)         //  pressedHeaderSelection
  const [Archives, setArchives] = useState()                
   

  useEffect(() =>{
    currArchives(setArchives)  // test fun delays
  },[])

  return (
  <View style={styles.container}>  
      <View style={styles.header}>
        <View style={styles.buttonsContainer}>
          <View style={[styles.TouchInHeader, !selectButton && styles.pressedHeaderSelection]}>
          <TouchableOpacity onPress={() => { if (!selectButton) setButton(!selectButton)}} >
                <Text style={styles.textInHeader}> Daily </Text>
              </TouchableOpacity>
            </View>

          <View style={[styles.TouchInHeader, selectButton && styles.pressedHeaderSelection]}>
            <TouchableOpacity onPress={() => { if (selectButton) setButton(!selectButton)}} >
                <Text style={styles.textInHeader}> Weekly </Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
      
      {selectButton ?
        <View  style={styles.body}>
            <Text style={styles.textInHeader} >Hello</Text>
        </View>
      : 
          <View>
            <PieChart />
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
