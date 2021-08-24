var striptags = require('striptags');

function sanitize(request,response,next){
    for(const prop in request.body) {
        if(typeof request.body[prop] === "string") {
            request.body[prop] = striptags(request.body[prop]);
        }
    }
    next();
}

module.exports = sanitize;