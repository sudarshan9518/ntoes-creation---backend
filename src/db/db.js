const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect("mongodb+srv://bankarsudarshan6_db_user:LCSxSZGZXvXkE6DH@cluster0.ryidzl.mongodb.net/first").then(()=>{
        console.log("Connected to DB")
    }).catch((err)=>{
        console.log("Error connecting to DB",err)
    })
}

module.exports = connectToDB;