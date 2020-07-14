import React, {useState} from 'react';
import DialogInput from 'react-native-dialog-input';
import {View} from 'react-native';
import {insertActivity, getActivities, updateActivityStatus} from './activitySchema'

const InputPrompt = props => {
    var exists = false
    return(
        <View>
        <DialogInput 
                    title={"New Activity"}
                    submitText={"Add"}
                    hintInput ={"Enter activity name....."}
                    submitInput={ (inputText) => {
                            getActivities().then((activities) => {
                                for (var i = 0; i < activities.length; i++) {
                                    if (activities[i].title === inputText && activities[i].isDeleted == true){
                                        updateActivityStatus({title: inputText,  isDeleted: false}).then().catch((error) => {console.log(error)})
                                        exists = true
                                        break
                                    }else if (activities[i].title === inputText && activities[i].isDeleted == false){
                                        console.log('activity already exists!')
                                        exists = true
                                        break
                                    }
                                  }

                                if(!exists){
                                    insertActivity({title: inputText}).then().catch((error) => {console.log(error)})
                                }
                                props.setPrompt(false)    
                            
                            }).catch((error) => {console.log('Can\'t get activities InputPrompt.js line 23 ',error), props.setPrompt(false)})                 
                        }
                    }
                    closeDialog={() => {props.setPrompt(false)}}>
        </DialogInput>
        </View>
    );
}

export default InputPrompt
