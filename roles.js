const post = require('./permissions/post')

module.exports = {
    user: {
        can: Object.values(post)
      },  
}