const mongoose = require('mongoose');
const db = mongoose.connect("mongo_url").then(()=>console.log("Connection Successful")).catch((error)=>console.log(error))
module.exports = db
