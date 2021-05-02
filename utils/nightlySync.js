import { useEffect } from 'react';
import { getSyncActivities, removeActivities, getActivities } from '../Schemas/activitySchema';
import { insertArchive } from '../Schemas/activitiesArchiveSchema';
import _ from 'lodash';

const time = new Date()
const date = (time.getMonth() + 1) + "/" + time.getDate();

const archiveDailyActivities = async () => {
    // Get Today's Activities
    const activities = await getActivities();
    const records = [];

    // reformat activities time
    _.forEach(activities, (activity) => {
        records.push({
            title: activity.title,
            minutes: activity.minutes,
            hours: activity.hours
        });
    });

    // create
    insertArchive({ date: date, records: records });

    // clean up table
    removeActivities();
}

const NightlySync = () => {
    useEffect(() => {
        try{
            archiveDailyActivities();
        }catch(err){
            console.log('Failed to archive daily table');
        }finally{
            console.log(date, ' table archived!');
        }
    }, []);
    return null;
};

export default NightlySync;
