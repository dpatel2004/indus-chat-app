import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    console.log("userid =-", userId, res)
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:'15d'})
    console.log("token = ", token)
    res.cookie("jwt",token,{
        httpOnly: true,
        sameSite:"none",
        secure: true,
    });
};

export default generateTokenAndSetCookie;