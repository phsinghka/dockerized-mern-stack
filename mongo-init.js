db = db.getSiblingDB('mernDatabase');  // Switch to the desired database

db.createUser({
    user: 'myLocalUser',
    pwd: 'myLocalPassword',
    roles: [
        {
            role: 'readWrite',
            db: 'mernDatabase',
        },
    ],
});

db.createCollection('myCollection');  // Create a collection to make sure the DB is created
