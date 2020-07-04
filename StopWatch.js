import React, { useEffect, useReducer }  from 'react';
import { View, Text } from 'react-native';


const Stopwatch = () => {
    const [timeArray, dispatch] = useReducer(time,[0,0,0]);

   useEffect(() => {
        setInterval(dispatch({type: 'start'}), 1000);
    });

    return(
        <View>
        <Text>{timeArray[2]}:{timeArray[1]}:{timeArray[0]}</Text> 
        </View>
    );
};

//reducer
const time = (value, placeholder) =>{
    value[0] = value[0] + 1;
    if (value[0] == 59){
        value[0] = 0;
        value[1] = value[1] + 1;
    }
    if (value[1] == 59 && value[0] == 59){
        value[0] = 0;
        value[1] = 0;
        value[2] = value[2] + 1;
    }
    return value;
}
 
export default Stopwatch
