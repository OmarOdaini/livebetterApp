/*
Might consider minimize the number of write commands and make this one DB method
*/
import {useEffect} from 'react'
import {getSyncActivities, deleteActivities} from '../DBSchemas/activitySchema'
import {insertArchive, updateArchiveRecords, getArchive} from '../DBSchemas/activitiesArchiveSchema'

const currActivities = async () => { 
    // Get Today's Activities
    var activities =  await getSyncActivities()                 
    for (var i = 0, len = activities.length; i < len; i++) {
        // Check if this activity has an archive
        var archive = await getArchive(activities[i].title)

        // Update or create
        if(archive.length)
            updateArchiveRecords(activities[i]).catch((error) => console.log( 'Reset.js updateArchiveRecords()', error))
        else
            insertArchive({title: activities[i].title, records: [{seconds: activities[i].seconds, minutes: activities[i].minutes, hours: activities[i].hours}]}).catch((error) => console.log( 'Reset.js insertArchive()', error))            
        
    }
    // Clean up today activities after archiving
    deleteActivities().catch((error) => console.log('Reset.js deleteActivities()', error))
}
const NightlySync = () => {
    //Runs only on first render
    useEffect(() => {
            currActivities()
    },[])
    return null
}

export default NightlySync