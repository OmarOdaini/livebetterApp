import React, { useState, useEffect } from 'react'
import {StyleSheet, View, Text, Dimensions} from 'react-native'
import { VictoryPie, VictoryLegend } from "victory-native"

const PieChart = props => {
  return (      
        <View style={styles.container}>
                <View>
                    <VictoryPie
                    padAngle={"0.045"}
                    radius={160}
                    cornerRadius={'10'}
                    labelRadius={165}
                    innerRadius={"25"}
                    colorScale={["tomato", "orange", "cyan", "navy", 'purple', 'yellow', 'green', 'gray' ]}
                    style={{ labels: { fill: "white", fontSize: 20 }}}
                    data={[{ y: 2, label: "2" },{ y: 8, label: "8" }, { y: 2, label: "2" }, { y: 1, label: "1"}]}
                    />
            </View>
        <View>
            <VictoryLegend 
                x={20}
                 y={-10}
                 width={400}
                itemsPerRow={3}
                title="Legend"
                // centerTitle
                orientation="horizontal"
                gutter={25}
                style={{ border: { stroke: "black" }, title: {fontSize: 22, stroke: "white"}, labels: {fontSize: 19, stroke: "white"}}}
                data={[
                { name: "App Dev", symbol: { fill: "orange" } },
                { name: "Fortnite", symbol: { fill: "cyan"} },
                { name: "work", symbol: { fill: "orange" } },                    
                { name: "Study", symbol: { fill: "navy" } }
                ]}
            />
            </View>
                
        </View>
            



  )
}
const styles = StyleSheet.create({
    container:{
    }
})



export default PieChart
