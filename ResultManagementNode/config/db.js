const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect("mongodb+srv://aaryavrat:ojG2EMJkArByzZoC@cluster0.dnxleci.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });

    console.log("MongoDB Connected....");
  } catch (err) {
    console.error(err.message);

    process.exit(1);
  }
};

module.exports = connectDB;