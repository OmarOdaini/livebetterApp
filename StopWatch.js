import React, { useEffect, useState, useRef }  from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Stopwatch = props => {
    const [timeArray, setTime] = useState([0,0,0])

    useInterval(()=> {
        if(props.run)
            setTime(val => [...time(val)])
    }, 1000)

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
    if (currTime[0] == 59){
        currTime[1]++
        currTime[0] = 0   
    }
    if (currTime[1] == 59 && currTime[0] == 59){
        currTime[2]++
        currTime[0] = 0
        currTime[1] = 0    
    }
    return currTime
}

const styles = StyleSheet.create({
    stopwatch: {
        fontSize: 18
    }
})
  

export default Stopwatch
