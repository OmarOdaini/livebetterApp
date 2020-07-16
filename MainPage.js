import React, { useState, useEffect } from 'react'
import {StyleSheet,View,FlatList,Dimensions} from 'react-native'

 import Activity from './Activity'  
import Newact from './Newact'   
import InputPrompt from './InputPrompt' 

import {insertActivity, getActivities, deleteActivities} from './activitySchema'
import realm from './activitySchema'
 
const {width, height} = Dimensions.get('window');

const MainPage = () => {
  const [activities, setActivities] = useState([])


  useEffect(() => {
      reloadData()
      realm.addListener('change', () => {reloadData()})
    },[])

    const reloadData = () => {
      console.log('gettiung datat')
      getActivities().then((activities) =>{
        setActivities(activities)
        
      }).catch((error) => {
        setActivities([])
        console.log(error)
      })
    }
    console.log()
    return(
        <View style={styles.mainView} >
          
              <FlatList
                numColumns={2}
                data={activities}
                renderItem={({ item }) => (
                        <Activity title={item.title} seconds={item.seconds} minutes={item.minutes} hours={item.hours} isRunning={item.isRunning} />
                )}
                keyExtractor={(item) => item.title}
              />

            <View style={styles.addButtom} >
               <Newact activities={activities} setActivities={setActivities}/>
            </View>
        </View>
    ) 
}


const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor:"#0A0A0A"
    },
    addButtom:{
      position: 'absolute',
      bottom:10,
      right:10
    }
  })
  

export default MainPage