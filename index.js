const opts = require('./roles')
const rbac = require('easy-rbac').create(opts);
const bodyParser = require('body-parser');
const express = require('express')
const app = express();

( async ()=>{
    const ret = await rbac.can('user', 'post.create');
})();


app.post('/can', bodyParser.json(), async (req, res) => {
    const { role, operation, params } = req.body;
    
    if(!role) throw Error(`'role' must not be empty`)
    if(!operation || (operation && operation.length===0)) throw Error(`'operation' must not be empty`)
    
    const ret2 = await rbac.can('user', 'post.create');

    const ret = await rbac.can(role, operation, params);

    res.jsonp({
        result: ret
    })

})
app.listen(3000, () => console.log('Example app listening on port 3000!'))