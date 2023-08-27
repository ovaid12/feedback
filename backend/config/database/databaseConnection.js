const mongoose = require('mongoose');
const db = mongoose.connect("mongodb+srv://Ovaid:Ovaid123@cluster0.qcv5rah.mongodb.net/Training").then(()=>console.log("Connection Successful")).catch((error)=>console.log(error))
module.exports = db