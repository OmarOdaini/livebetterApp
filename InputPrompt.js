import React, {useState} from 'react';
import DialogInput from 'react-native-dialog-input';
import {View,Text} from 'react-native';

const InputPrompt = props => {
    const [name, setName] = useState('');

    return(
        <View>
        <DialogInput 
                     title={"New Activity"}
                        submitText={"Add"}
                        hintInput ={"Enter activity name....."}
                        submitInput={ (inputText) => {props.setActivities([...props.activities, {key: 1, title: inputText, seconds: "0", minutes: "0", hours: "0"}]), props.setPrompt(false)} }
                        closeDialog={ () => {props.setPrompt(false)}}>
        </DialogInput>
        <Text>{name}</Text>
        </View>
    );
}

export default InputPrompt
