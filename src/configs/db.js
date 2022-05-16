const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://ajit:12345@cluster0.517og.mongodb.net/ECommerce-Website?retryWrites=true&w=majority");
 
};

//https://ecommerceajit.herokuapp.com/