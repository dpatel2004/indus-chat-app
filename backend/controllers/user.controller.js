import User from '../models/user.model.js';
import mongoose from 'mongoose';

export const getUsersForSidebar = async (req, res) => {
    try{
        const loggedInUserId = new mongoose.Types.ObjectId(req.params.id);

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
    }catch(error){
        console.error("Error in getUsersForSidebar:", error.message);
        res.status(500).json({ error: "Internal server error"});
    }
};