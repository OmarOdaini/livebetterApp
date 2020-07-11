import React, { useEffect, useState }  from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Stopwatch = () => {
    const [timeArray, setTime] = useState([0,0,0])
    const [run, setRun] = useState(false)   //could be sit to prop

    useEffect(() => {
            if(run){
                const interval = setInterval(() => {
                    setTime(val => [...time(val)])
                }, 1000)
                return () => clearInterval(interval)  // check if needed
            }
        },[])

    return(
        <View >
             <Text style={styles.stopwatch}>{("0" + timeArray[2]).slice(-2)}:{("0" + timeArray[1]).slice(-2)}:{("0" + timeArray[0]).slice(-2)}</Text> 
        </View>
    )
}


const time = (value) =>{
    value[0]++
    if (value[0] == 59){
        value[1]++
        value[0] = 0   
    }
    if (value[1] == 59 && value[0] == 59){
        value[2]++
        value[0] = 0
        value[1] = 0    
    }
    return value
}
 
const styles = StyleSheet.create({
    stopwatch: {
        fontSize: 18
    }
  })
  

export default Stopwatch
