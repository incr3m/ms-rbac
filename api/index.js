const { rbacServer } = require('./config')
const axios = require('axios')

function middleware(roles){
    return async function (req, res, next) {
        console.log('LOGGED')
        next()
    }  
}

async function can(role, operation, params){
    const { data } = await axios.post(`http://${rbacServer}/can`, {
        role,
        operation,
        params
    })
    return data;
}

module.exports = {
    can,
    middleware
}