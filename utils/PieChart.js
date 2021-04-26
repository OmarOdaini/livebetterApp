import React, { useState, useEffect } from 'react'
import {StyleSheet, View, Text, Dimensions} from 'react-native'
import { VictoryPie, VictoryLegend } from "victory-native"
import {getAllArchive} from '../DBSchemas/activitiesArchiveSchema'

const currArchives = async (setArchives) => setArchives(await getAllArchive())


const PieChart = props => {
    const [Archives, setArchives] = useState()  
    const [DailyFormat, setDailyformat] = useState()                
              
    // useEffect(() =>{
    //   currArchives(setArchives).then(setDailyformat(DailyReformat(Archives, "27/7/2020"))) 
    //   console.log(DailyFormat)
    //   },[])
    
  return (      
        <View>
            <VictoryPie
            padAngle={"0.045"}
            radius={160}
            cornerRadius={'10'}
            labelRadius={175}
            innerRadius={25}
            colorScale={["red","blue","green","white","purple","gold","brown","navy"]}
            style={{ labels: { fill: "white", fontSize: 20 }}}
            data={DailyFormat}
            animate={{ easing: 'exp' }}
            />

            <VictoryLegend 
            x={20}
            y={0}
            width={400}
            itemsPerRow={3}
            orientation="horizontal"
            gutter={25}
            colorScale={["red","blue","green","white","purple","gold","brown","navy"]}
            style={{ border: { stroke: "" }, title: {fontSize: 22, stroke: "gray"}, labels: {fontSize: 19, stroke: "gray"}}}
            data={DailyFormat}
            />              
        </View>
  )
}

// const DailyReformat = (data, day) =>{
//     var DailyPieData = []
//     let time = 0.0

//     if(data)
//         for (var i = 0, len = data.length; i < len; i++) {
//             for (var j = 0, len2 = data[i].records.length; j < len2; j++) 
//                 if(data[i].records[j].date === day){
//                     DailyPieData.push({name: data[i].title, label:  data[i].records[j].hours  + ':' + data[i].records[j].minutes, y: data[i].records[j].hours + data[i].records[j].minutes*20 + 3})
//                 }
//         }
//     return DailyPieData
// }

export default PieChart
    