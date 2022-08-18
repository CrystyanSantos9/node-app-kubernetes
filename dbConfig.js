const mongoose = require("mongoose");

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGO_PORT, MONGO_DB } = process.env;

const options = {
    autoIndex: false, 
    maxPoolSize: 10, 
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000, //Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};

//stringConnection
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, options).then(() => {
  const isOk =
    mongoose.connection.readyState === 1
      ? "Database is Ready"
      : "Failed Connection with mongodb";
})
.catch(function(err){
    console.log(err)
});
