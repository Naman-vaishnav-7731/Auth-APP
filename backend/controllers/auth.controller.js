import bcrypt from 'bcrypt'; // Using This module for Password Hashing
import { validationResult } from "express-validator"; // Using for Server Side Validations
import { db } from '../models/index.js';
const User = db.users;

export const userRegister = async (req, res) => {
    try {

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      
      const { firstName, lastName, email, password, role } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.json({ message: "Email already registered !!!", code: 400 });
      }

      // Hash the password before storing
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role: role || "customer", // Default role is already mentioned in User Model 
      });

      res.json({
        code: 200,
        message: "User successfully created",
        user: {
          id: newUser.id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          role: newUser.role,
        },
      });

    } catch (error) {
        console.error(error);
        res.json({ message: "Internal Server Error ", code: 500 });
    }
}

// Login only allowed for Admin Role
export const userLogin = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Find User and check this user exists in database or not
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.json({ message: "Invalid email or password", code: 401 });
    }

    // Only Admin Can Login for Now
    if (user.role !== "admin") {
      return res.json({ message: "You are not allowed to login from here", code: 403 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ message: "Invalid email or password", code: 401 });
    }

    res.json({
      message: "Login successful",
      code: 200,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      }
    });

  } catch (error) {
    console.error(error);
    res.json({ message: "Internal Server Error ", code: 500 });
  }
}


