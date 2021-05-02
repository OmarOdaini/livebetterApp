import Realm from 'realm'


// Define schema
export const ACTIVITY_ARCHIVE_SCHEMA = 'activities_archive'
export const ARCHIVE_LIST_SCHEMA = 'archive_list'

const time = new Date()
const date = (time.getMonth() + 1) + "/" + time.getDate() + "/" + time.getFullYear()

export const Activities_archive = {
    name: ACTIVITY_ARCHIVE_SCHEMA,
    primaryKey: 'title',
    properties: {
        title: { type: 'string', default: 'Activity' },
        minutes: { type: 'int', default: 0 },
        hours: { type: 'int', default: 0 }
    }
}

export const archive_list = {
    name: ARCHIVE_LIST_SCHEMA,
    primaryKey: 'date',
    properties: {
        date: { type: 'string', default: date },
        records: { type: 'list', objectType: ACTIVITY_ARCHIVE_SCHEMA },
    }
}

const databaseOptions = {
    path: 'local.realm',
    schema: [Activities_archive, archive_list]
}

//Functions
// Get All Archives
export const getAllArchive = () => {
    return new Promise((resolve, reject) => {
        Realm.open(databaseOptions).then(realm => {
            let activitiesList = realm.objects(ARCHIVE_LIST_SCHEMA)
            resolve(activitiesList)
        }).catch((error) => reject(error))
    })
}

// Insert every activity in archive format
export const insertArchive = activity => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(ARCHIVE_LIST_SCHEMA, activity)
            resolve()
        })
    }).catch((error) => reject(error))
})