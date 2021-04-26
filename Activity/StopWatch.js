import React, {useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {updateActivity} from '../Schemas/activitySchema';
import {deleteActivity, updateRunningStatus, stopRunningActivites} from '../Schemas/activitySchema'


const Stopwatch = (props) => {
    // time state
    const [timeArray, setTime] = useState([
        props.seconds,
        props.minutes,
        props.hours,
    ]);

    useEffect(() => {
        // Run increment function when (isRunning)
        if (props.isRunning){
            let id = setInterval(() => { setTime((val) => [...time(val)]) }, 1000);
            return () => clearInterval(id);
        } else {
            // Save current time on (!isRunning)
            updateActivity({
                title: props.title,
                seconds: timeArray[0],
                minutes: timeArray[1],
                hours: timeArray[2],
            }).catch((error) => console.log(error));
        }
    }, [props.isRunning]);

    // Delete and update time in DB
    useEffect(() => {
      if(props.delete){
        deleteActivity({title: props.title, isDeleted: true, isRunning:false, seconds: timeArray[0], minutes: timeArray[1], hours: timeArray[2]}
          ).catch((error) =>{console.log(error)});
      }
    }, [props.delete])
    
    // Stopwatch output
    return (
        <>
        <Text style={styles.stopwatch}>
            {('0' + timeArray[2]).slice(-2)}:
            {('0' + timeArray[1]).slice(-2)}:
            {('0' + timeArray[0]).slice(-2)}
        </Text>
        </>
    );
};

const time = (timeArr) => {
  // increment seconds
  timeArr[0]++;

  // increment minutes
  if (timeArr[0] > 59) {
    timeArr[1]++;
    timeArr[0] = 0;

    // increment hours
    if (timeArr[1] > 59) {
      timeArr[2]++;
      timeArr[1] = 0;
    }
  }

  return timeArr;
};

const styles = StyleSheet.create({
  stopwatch: {
    fontSize: 22,
    color: 'white',
    marginBottom: 3, 
    marginTop: 2
  },
});

export default Stopwatch;
