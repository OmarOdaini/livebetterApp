import React, { useEffect, useState, useRef }  from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {updateActivity} from '../DBSchemas/activitySchema'

const Stopwatch = props => {
    // maintain time 
    const [timeArray, setTime] = useState([props.seconds,props.minutes,props.hours])

    // custom Hook based on setInterval
    useInterval(()=> {
        if(props.isRunning) 
            setTime(val => [...time(val)])
    }, 1000)

    // when isRunning switch from true to false (Paused)
    useEffect(() => {
        if(!props.isRunning) 
            updateActivity({title: props.title, seconds: timeArray[0], minutes:  timeArray[1], hours: timeArray[2]}).then().catch((error) =>{ console.log(error)  })
    },[props.isRunning])

     return(
        <View>
             <Text style={styles.stopwatch}>{("0" + timeArray[2]).slice(-2)}:{("0" + timeArray[1]).slice(-2)}:{("0" + timeArray[0]).slice(-2)}</Text> 
        </View>
    )
}

const useInterval = (callback, delay) => {
    const savedCallback = React.useRef();
  
    React.useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    React.useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
}
const time = currTime =>{
    currTime[0]++
    if (currTime[1] >= 59 && currTime[0] >= 59){
        currTime[2]++
        currTime[0] = 0
        currTime[1] = 0    
    }

    if (currTime[0] >= 59){
        currTime[1]++
        currTime[0] = 0   
    }
    return currTime
}
const styles = StyleSheet.create({
    stopwatch: {
        fontSize: 18,
        color: '#C0C0C0'
    }
})
  
export default Stopwatch
