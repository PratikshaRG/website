const mongoose = require('mongoose');

const mongoUrl = "mongodb+srv://pratikshaishere:pratiksha0711@cluster0.ujrxhrz.mongodb.net/PersonalPortfolio?retryWrites=true&w=majority";

const mongoDb = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected");

    const fetchData = mongoose.connection.db.collection("name");
    const data = await fetchData.find({}).toArray();
    
    global.contacts = data;
    // console.log(global.contacts);
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
};

module.exports = mongoDb;