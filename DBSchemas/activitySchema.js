import Realm from 'realm'

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
///////////////////////////////////////////////
// MainView list current activities nonDeleted
//////////////////////////////////////////////
export const getCurrentActivities = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let activitiesList = realm.objects(ACTIVITY_SCHEMA).filtered('isDeleted == false')
        resolve(activitiesList)
    }).catch((error) => reject(error))
})

////////////////////////////////////
// MainView list current activities
///////////////////////////////////
export const getActivities = () =>  new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let activitiesList = realm.objects(ACTIVITY_SCHEMA)
        resolve(activitiesList)
    }).catch((error) => reject(error))
})


export const getSyncActivities = () =>{ 
    return new Promise((resolve, reject) => {
        Realm.open(databaseOptions).then(realm => {
            let activitiesList = realm.objects(ACTIVITY_SCHEMA)
            resolve(activitiesList)
        }).catch((error) => reject(error))
    })
}


export const getRunningActivities = (activity) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let activitiesList = realm.objects(ACTIVITY_SCHEMA).filtered('isRunning == true')
        resolve(activitiesList)
    }).catch((error) => reject(error))
})

// used for seving time when pausing the stopwatch
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

export const stopRunningActivites = activity => new Promise((resolve, reject) => {    
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


export const deleteActivities = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(()=> {
            let activitiesList = realm.objects(ACTIVITY_SCHEMA)
            realm.delete(activitiesList)        
            resolve('deleted')    
        })
    }).catch((error) => reject(error))
})


export default new Realm(databaseOptions)