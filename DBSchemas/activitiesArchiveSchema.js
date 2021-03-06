import Realm from 'realm'


// Define schema
export const ACTIVITY_ARCHIVE_SCHEMA  = 'activities_archive'
export const ARCHIVE_LIST_SCHEMA  = 'archive_list'

const time = new Date()
const date =  time.getDate() + "/" + (time.getMonth() + 1) + "/" + time.getFullYear() 

export const  Activities_archive = {
    name: ACTIVITY_ARCHIVE_SCHEMA,
    properties: {
        date: { type: 'string', default: date},
        seconds: { type: 'int', default: 0 },
        minutes: { type: 'int', default: 0 },
        hours: { type: 'int', default: 0 }
    }
}

export const archive_list = {
    name: ARCHIVE_LIST_SCHEMA,
    primaryKey: 'title',
    properties: {
        title: { type: 'string',  default: 'Activity'},
        records: { type: 'list', objectType: ACTIVITY_ARCHIVE_SCHEMA },
    }
}
const databaseOptions = {
    path: 'local.realm',
    schema: [Activities_archive,archive_list]
}
/////////////////////////////////////////////
// Realm.close()
/////////////////////////////////////////////


//Functions
/////////////////////////////////////////////
// Get All Archives//
/////////////////////////////////////////////
export const getAllArchive = () =>{  return new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let activitiesList = realm.objects(ARCHIVE_LIST_SCHEMA) 
            resolve(activitiesList)
    }).catch((error) => reject(error))
})}
/////////////////////////////////////////////
// Get Archive based on title //
/////////////////////////////////////////////
export const getArchive = (title) =>{  return new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let activitiesList = realm.objects(ARCHIVE_LIST_SCHEMA).filtered('title == $0', title)   
            resolve(activitiesList)
    }).catch((error) => reject(error))
})}
/////////////////////////////////////////////
// Insert every activity in archive format //
/////////////////////////////////////////////
export const insertArchive = activity => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(()=> {
                realm.create(ARCHIVE_LIST_SCHEMA, activity)
            resolve()
        })
    }).catch((error) => reject(error))
})
/////////////////////////////////////////////
// Update Archive list //
/////////////////////////////////////////////
export const updateArchiveRecords = activity => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let UpdatedActivity = realm.objectForPrimaryKey(ARCHIVE_LIST_SCHEMA, activity.title)  
            UpdatedActivity.records.push({seconds: activity.seconds, minutes: activity.minutes, hours: activity.hours})
            resolve()     
        })
    }).catch((error) => reject(error))
})





// const PersonSchema = {
//     name: 'Person',
//     properties: {
//       // The following property definitions are equivalent
//       cars: {type: 'list', objectType: 'Car'},
//       vans: 'Car[]'
//     }
//   }
  
//   let carList = person.cars;
  
//   // Add new cars to the list
//   realm.write(() => {
//     carList.push({make: 'Honda', model: 'Accord', miles: 100});
//     carList.push({make: 'Toyota', model: 'Prius', miles: 200});
//   });
  
//   let secondCar = carList[1].model;  // access using an array index

// Changes to objects in a Realm—creating, updating and deleting—must take place within a write() transaction block. Note that write transactions have a non-negligible overhead; you should try to minimize the number of write blocks within your code.

//   // Update book with new price keyed off the id
//   realm.create('Book', {id: 1, price: 55}, 'modified');

// let tanDogs = dogs.filtered('color = "tan" AND name BEGINSWITH "B"');
// let onlyFiveTanDogs = dogs.filtered('color = "tan" AND name BEGINSWITH "B" SORT(name DESC) LIMIT(5)')