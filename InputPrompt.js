import React from 'react';
import DialogInput from 'react-native-dialog-input';
import {View} from 'react-native';
import {insertActivity} from './activitySchema'

const InputPrompt = props => {
    return(
        <View>
        <DialogInput 
                    title={"New Activity"}
                    submitText={"Add"}
                    hintInput ={"Enter activity name....."}
                    submitInput={ (inputText) => {
                        insertActivity({title: inputText}).then().catch((error) => {console.log(error) })
                        props.setPrompt(false)  
                        }
                    }
                    closeDialog={ () => {props.setPrompt(false)}}>
        </DialogInput>
        </View>
    );
}

export default InputPrompt
