/*
difference between passing set func or having func inside component line 18
*/

import React, { useState, useEffect } from 'react'
import {StyleSheet,View,FlatList,Dimensions} from 'react-native'
import Activity from '../Activity/Activity'  
import Newact from '../newActivity/plusBtn'   
import {getCurrentActivities} from '../DBSchemas/activitySchema'
import realm from '../DBSchemas/activitySchema'
 
const Main = () => {
  const [activities, setActivities] = useState()

  useEffect(() => {
      reloadData(setActivities)
      realm.addListener('change', () => reloadData(setActivities))
    },[])

    return(
        <View style={styles.mainView}>
          <FlatList
            numColumns={2}
            data={activities}
            renderItem={({ item }) => (
                    <Activity title={item.title} seconds={item.seconds} minutes={item.minutes} hours={item.hours} isRunning={item.isRunning} />
            )}
            keyExtractor={(item) => item.title}
          />

          <View style={styles.addButtom} >
              <Newact />
          </View>
        </View>
    ) 
}

const reloadData = (setActivities) => {
  getCurrentActivities().then((activities) =>{
    setActivities(activities)
    
  }).catch((error) => {
    setActivities([])
    console.log( 'MainPage.js getCurrentActivities()', error)
  })
}


const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      backgroundColor:"#0A0A0A",
      paddingTop: 35
    },
    addButtom:{
      position: 'absolute',
      bottom:15,
      right:15
    }
  })
  

export default Main