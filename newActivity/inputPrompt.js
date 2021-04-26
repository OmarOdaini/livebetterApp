import React, { useState } from 'react';
import DialogInput from 'react-native-dialog-input';
import { View } from 'react-native';
import { insertActivity, getActivities, updateActivityStatus } from '../Schemas/activitySchema'

const InputPrompt = props => {
    const [hint, setHint] = useState('Enter activity name.....')
    var exists = false
    return (
        <View>
            <DialogInput
                title={"New Activity"}
                submitText={"Add"}
                hintInput={hint}
                dialogStyle={{ backgroundColor: "white" }}
                // modalStyle={the background of prompt}
                submitInput={(inputText) => {
                    if (!inputText) {
                        setHint("This field can't be left empty!")
                    } else if (inputText.length > 8) {
                        setHint("max length is 8 characters")
                    } else {
                        getActivities().then((activities) => {
                            for (var i = 0; i < activities.length; i++) {
                                // checking if this activity exists
                                if (activities[i].title === inputText && activities[i].isDeleted == true) {
                                    updateActivityStatus({ title: inputText, isDeleted: false }).then().catch((error) => { console.log(error) })
                                    exists = true
                                    break
                                } else if (activities[i].title === inputText && activities[i].isDeleted == false) {
                                    console.log('activity already exists!')
                                    exists = true
                                    break
                                }
                            }

                            if (!exists) {
                                insertActivity({ title: inputText }).catch((error) => { console.log(error) })
                            }
                        }).catch((error) => { console.log('getactivities InputPrompt.js ', error) })

                        props.setPrompt(false)
                    }
                }
                }
                closeDialog={() => { props.setPrompt(false) }}>
            </DialogInput>
        </View>
    );
}

export default InputPrompt
