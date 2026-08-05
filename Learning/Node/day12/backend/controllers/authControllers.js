import userModel from "../model/authModel.js";
import bcrypt from "bcrypt"

export const createUser = async (req, res) => {
  try {
    const { username, useremail, userpassword } = req.body;

    if (!username || !email || !userpassword) {
      return res.status(400).json({ msg: "please fill the fields" });
    }

    const normalizedEmail = useremail.toString().trim().toLowerCase();

    const checkEmail = await userModel.findOne({ useremail: normalizedEmail });

    if (checkEmail) {
      return res.status(409).json({ msg: "email already exist" });
    }

    const hashPassword = await bcrypt.hash(userpassword,10)

    const regsiterData = await userModel.create({ username, useremail: normalizedEmail, userpassword:hashPassword })

    res.status(201).json({msg:"successfully added",regsiterData})

  } catch (error) {
    res.status(500).json({msg:"internal server error register ",error:error.message})
  }
};
