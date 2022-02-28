const user = require('../../models/user')



async function createUserInDb( email, hashedPassword) {

    return user.create({

            email: email,
            password: hashedPassword,
            secret: "10000"
            
        }) // Notice the return here
        .then((user) => {
            return user;
        })
        .catch((err) => {
            return 'error occured';
        });
}

async function fetchUserDetails(email) {
    return user.findOne({ email: email })
        .then((user) => { return user })
        .catch((error) => {})
}

async function fetchUserFromID(id) {
    return user.findOne({ _id: id })
        .then((user) => { return user })
        .catch((error) => {})
}

module.exports = {
    createUserInDb,
    fetchUserDetails,
    fetchUserFromID
}
