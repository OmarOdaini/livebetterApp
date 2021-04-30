import React, { useState, useEffect } from 'react'
import {StyleSheet, View, Text, Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';
import {getAllArchive} from '../Schemas/activitiesArchiveSchema';
import PieChart from '../utils/PieChart';
import _ from 'lodash'


const Stats = () => {
  // get all data in archive
  const getArchive = async () => setArchives(await getAllArchive());
  const [selectButton, setButton] = useState(true);
  const [datesList, setDatesList] = useState([])
  const [dateSelector, setDateSelector] = useState();
  const [Archives, setArchives] = useState();
  const [DailyFormat, setDailyformat] = useState();

  useEffect(() => {
    getArchive();
    setDatesList(getAllDates(Archives));
    setDateSelector(datesList.length - 1);
  }, []);

  useEffect(() => {
    setDailyformat(DailyReformat(Archives, datesList[dateSelector]));
  }, [dateSelector]);

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
              
                      <Ripple onPress={() => setDateSelector(val => {if(val - 1 >= 0) return val - 1; else return val})} style={styles.CounterButton} rippleDuration={800} rippleCentered={true}>
                          <Icon style={[{color: 'white'}]} size={30} name={'ios-arrow-back'} />
                        </Ripple>
                      
                        <Text style={styles.Day} >{getDay(datesList[dateSelector])} {datesList[dateSelector].match(/^.*(?=\/)/g)}</Text>
                        
                      <Ripple onPress={() => setDateSelector(val => {if(val + 1 < datesList.length) return val +1; else return val})}  style={styles.CounterButton} rippleDuration={800} rippleCentered={true}>
                          <Icon style={[{color: 'white'}]} size={30} name={'ios-arrow-forward'} />
                        </Ripple>
                </View>

                <View style={ styles.Chart}>
                      <PieChart data={(DailyFormat !== undefined)? DailyFormat.filter(obj => obj!== undefined && obj.y > 0) : DailyFormat} />
                </View>
        </View> 
      : 
          <View style={styles.body}> 
          </View>
      }     
  </View>
  )
}

const getAllDates = (data) => {
  const dates = []

  _.forEach(data, (activity) => {
    _.forEach(activity.records, (dailyRecord) => {
      if(!dates.includes(dailyRecord.date))
        dates.push(dailyRecord.date);
    })
  })
  return dates;
}

const DailyReformat = (data, day) => {
    const DailyPieData = [];

    // reformat
    _.forEach(data, (activity) => {
      _.forEach(activity.records, (dailyRecord) => {
        if(dailyRecord.date == day){
            DailyPieData.push({
              x: activity.title + "  " + dailyRecord.hours  + ':' + dailyRecord.minutes + " hrs",
              y: dailyRecord.hours + dailyRecord.minutes / 60
          })
        }
      })
    })

    return DailyPieData;
}

const getDay = (date) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[new Date(date).getDay()];
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
    flex: 5,
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