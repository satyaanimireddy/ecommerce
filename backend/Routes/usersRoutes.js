import express from "express";
import { User } from "../Models/userModel.js";
import jwt from 'jsonwebtoken'

let userRoute = express.Router();

userRoute.post("/signup", async (req, res) => {
  try {
    let { username, email, password, confirmpassword } = req.body;
    console.log(req.body);
    if (!username || !email || !password || !confirmpassword) {
      return res
        .status(400)
        .send("Required username,email,password,confirmpassword");
    }

    if (password !== confirmpassword) {
      return res.status(400).send("Passwords not matched");
    }

    let newUser = {
      username,
      email,
      password,
      confirmpassword,
    };

    let emailExist = await User.findOne({ email });

    if (emailExist) {
      return res.status(400).send("User already exist in DB");
    }
    let user = await User.create(newUser);
    return res.status(201).send(user);
    // return res.status(201).send('User is created successfully');
  } catch (error) {
    res.status(500).send("Internal server Error");
  }
});

userRoute.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    console.log(req.body);

    if (!email || !password) {
      return res.status(400).send("Required email and password");
    }

    let existUser = await User.findOne({ email });
    console.log(existUser);

    if (!existUser) {
      return res.status(404).send("User not found");
    }
    if (existUser.password !== password) {
      return res.status(400).send("Invalid Credentials");
    }

    if (existUser.email && existUser.password) {
      let token = jwt.sign({ id: existUser._id }, "secret", {
        expiresIn: "1d",
      });
      // console.log(token);

      return res.json({ token, username: existUser.username });
    }

    // if (existUser) {
    //   return res.status(200).send("Login success");
    // }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});
export default userRoute;
