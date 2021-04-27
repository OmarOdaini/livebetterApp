import React from 'react'
import { VictoryPie } from "victory-native"

const PieChart = props => {
  return (      
        <>
          <VictoryPie
            padAngle={"0.045"}
            radius={200}
            cornerRadius={'10'}
            innerRadius={25}
            colorScale={["red","blue","green","purple","gold","brown","navy"]}
            style={{ labels: { fill: "white", fontSize: 20 }}}
            animate={{ easing: 'exp' }}

            // label props
            labelRadius={65}
            labels={({ datum }) => datum.x }
            labelPosition={({ index }) => index + 1 ? "centroid" : "startAngle" }
            labelPlacement={({ index }) => index + 1 ? "parallel" : "vertical" }

            // data
            data={props.data}
          />          
        </>
  )
}

export default PieChart;
    