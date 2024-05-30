import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: false,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture:{
     type: String, 
     default:'https://ih1.redbubble.net/image.2080968211.3332/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
  },
},{timestamps:true});

const User = mongoose.model("User", userSchema);
export default User
