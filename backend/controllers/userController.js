import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs";
import createToken from "../utils/createToken.js";

// CREATE USER
const createUser = asyncHandler(async (req, res) => {
  ///////////GETTING DATA//////////
  // put request to each fields
  const { username, email, password } = req.body;

  /////////ERROR HANDLING/////////
  // by exception
  if (!username || !email || !password) {
    throw new Error("Please fill all the inputs.");
  }

  // by unique field
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).send("User already exists.");
  }

  ///////////MAIN LOGIC///////////
  // hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // post request to database
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    createToken(res, newUser._id);

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    });
  } catch (e) {
    res.status(400);
    throw new Error("Invalid user data");
  }

  ///////////DEBUGGING////////////
  // by html

  // by console
  console.log(`username: ${username}`);
  console.log(`email: ${email}`);
  console.log(`password: ${password}`);
});

// LOGIN AS USER
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    const isPasswordValue = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (isPasswordValue) {
      createToken(res, existingUser._id);
      res.status(201).json({
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        isAdmin: existingUser.isAdmin,
      });

      return;
    }
  }
});

// LOGOUT USER
const logoutCurrentUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully." });
});

// GET ALL USERS
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

export { createUser, loginUser, logoutCurrentUser, getAllUsers };
