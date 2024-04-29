import  Mongoose  from 'mongoose';

const connectToMongoDB = async () => {
    try{
        await Mongoose.connect("mongodb://localhost:27017/college");
        console.log("connected to MongoDB");
    }catch(error){
        console.log("Error connecting to MongoDB",error.message);
    }
};

export default connectToMongoDB;

