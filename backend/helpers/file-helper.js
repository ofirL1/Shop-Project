const fs = require("fs");

function safeDelete(absolutePath){
    try{
        if(!absolutePath || !fs.existsSync(absolutePath)) return;
        console.log("safeDelete",absolutePath)
        fs.unlinkSync(absolutePath);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    safeDelete
}