import Realm from 'realm';

export const ACTIVITY_SCHEMA  = 'Activity'

// Define schemas
export const  Activity = {
    name: ACTIVITY_SCHEMA,
    primaryKey: 'title',
    properties: {
        title: { type: 'string'},
        seconds: { type: 'int', default: 0 },
        minutes: { type: 'int', default: 0 },
        hours: { type: 'int', default: 0 },
        day: { type: 'int', default: new Date().getDate()},
        month: { type: 'int', default: new Date().getMonth()},
        year: { type: 'int', default: new Date().getFullYear()}
    }
}

const databaseOptions = {
    path: 'local.realm',
    schema: [Activity],
    schemaVersion: 5.0
}
//Functions
export const insertActivity = newActivity => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(()=> {
            realm.create(ACTIVITY_SCHEMA, newActivity)
            resolve(newActivity)
        })
    }).catch((error) => reject(error))
})

export const getActivities = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let activitiesList = realm.objects(ACTIVITY_SCHEMA)
        
        resolve(activitiesList)
    }).catch((error) => reject(error))
})

export const deleteActivities = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(()=> {
            let activitiesList = realm.objects(ACTIVITY_SCHEMA)
            realm.delete(activitiesList)
            
        })
    }).catch((error) => reject(error))
})


export default new Realm(databaseOptions)