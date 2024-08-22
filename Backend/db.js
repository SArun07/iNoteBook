const mongoose= require('mongoose');
const mongoURI = "";

const connetcToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully")
    })
}

module.exports = connetcToMongo;