import React, { useState, useEffect } from 'react'
import {StyleSheet,View,FlatList} from 'react-native'

 import Activity from './Activity'  
import Newact from './Newact'   
import InputPrompt from './InputPrompt' 

import {insertActivity, getActivities, deleteActivities} from './activitySchema'
import realm from './activitySchema'


const MainPage = () => {
  const [activities, setActivities] = useState([])


  useEffect(() => {
      reloadData()
      realm.addListener('change', () => {reloadData()})
    },[])

    const reloadData = () => {
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
          <View style={styles.flatList}>
              <FlatList
                data={activities}
                keyExtractor={(item) => item.title}
                numColumns={2}
                renderItem={({ item }) => ( 
                  item.isDeleted == false ?  
                       <Activity title={item.title} seconds={item.seconds} minutes={item.minutes} hours={item.hours}/>
                     : null
                )}
              />
            </View>

            <View style={styles.addButtom} >
               <Newact activities={activities} setActivities={setActivities}/>
            </View>
        </View>
    ) 
}


const styles = StyleSheet.create({
    mainView: {
      flex: 1,
    },
    flatList: {
        flex: 1,
        // flexDirection: 'column',
        backgroundColor:"#0A0A0A"
    },
    addButtom:{
      position: 'absolute',
      bottom:10,
      right:10
    }
  })
  

export default MainPage