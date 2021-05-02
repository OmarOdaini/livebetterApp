import Realm from 'realm'

// /Users/omaralodaini/Library/Developer/CoreSimulator/Devices/B1865D92-2C59-4044-8AFE-1B77565BDF86/data/Containers/Data/Application/EDC4E29D-0B8B-47D1-A75C-B4C9A8912C49/Documents
// filter example: x.filtered('title == $0', title)

// Define schema
export const ACTIVITY_SCHEMA  = 'Activity'
export const  Activity = {
    name: ACTIVITY_SCHEMA,
    primaryKey: 'title',
    properties: {
        title: { type: 'string'},
        isDeleted: { type: 'bool', default: false },
        isRunning: { type: 'bool', default: false },
        seconds: { type: 'int', default: 0 },
        minutes: { type: 'int', default: 0 },
        hours: { type: 'int', default: 0 }
    }
}

const databaseOptions = {
    path: 'local.realm',
    schema: [Activity]
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

// main view list current activities nonDeleted
export const getCurrentActivities = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let activitiesList = realm.objects(ACTIVITY_SCHEMA).filtered('isDeleted == false')
        resolve(activitiesList)
    }).catch((error) => reject(error))
})

// for creating new activites validation
export const getActivities = () =>  
    new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let activitiesList = realm.objects(ACTIVITY_SCHEMA)
        resolve(activitiesList)
    }).catch((error) => reject(error))
})

// when need to switch acts off and switch new one on
export const getRunningActivities = (activity) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let activitiesList = realm.objects(ACTIVITY_SCHEMA).filtered('isRunning == true')
        resolve(activitiesList)
    }).catch((error) => reject(error))
})

// used for saving time when pausing the stopwatch
export const updateActivity = activity => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let UpdatedActivity = realm.objectForPrimaryKey(ACTIVITY_SCHEMA, activity.title)   
            UpdatedActivity.seconds = activity.seconds  
            UpdatedActivity.minutes = activity.minutes    
            UpdatedActivity.hours = activity.hours 
            resolve()     
        })
    }).catch((error) => reject(error))
})

//used when creating an activity that exists before
export const updateActivityStatus = activity => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let UpdatedActivity = realm.objectForPrimaryKey(ACTIVITY_SCHEMA, activity.title)   
            UpdatedActivity.isDeleted = activity.isDeleted    
            resolve()     
        })
    }).catch((error) => reject(error))
})

//used when creating an activity that exists before
export const updateRunningStatus = activity => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let UpdatedActivity = realm.objectForPrimaryKey(ACTIVITY_SCHEMA, activity.title)   
            UpdatedActivity.isRunning = activity.isRunning    
            resolve()     
        })
    }).catch((error) => reject(error))
})

export const stopRunningActivites = () => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let UpdatedActivity = realm.objects(ACTIVITY_SCHEMA).filtered('isRunning == true') 
            UpdatedActivity.forEach(activity => activity.isRunning = false)
            resolve()     
        })
    }).catch((error) => reject(error))
})

// used when deleting an activity. Updates cuurent time and hide
export const deleteActivity = activity => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let UpdatedActivity = realm.objectForPrimaryKey(ACTIVITY_SCHEMA, activity.title)  
            UpdatedActivity.seconds = activity.seconds  
            UpdatedActivity.minutes = activity.minutes    
            UpdatedActivity.hours = activity.hours 
            UpdatedActivity.isDeleted = activity.isDeleted 
            UpdatedActivity.isRunning = activity.isRunning       
            resolve()     
        })
    }).catch((error) => reject(error))
})

export const removeActivities = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(()=> {
            let activitiesList = realm.objects(ACTIVITY_SCHEMA)
            realm.delete(activitiesList)        
            resolve()    
        })
    }).catch((error) => reject(error))
})

export default new Realm(databaseOptions)