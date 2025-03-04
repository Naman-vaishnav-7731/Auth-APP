import { body } from "express-validator";

// Server Side Validation for User Registration
export const userRegisterValidator = [
  body("firstName")
    .notEmpty().withMessage("First name is required"),
  
  body("lastName")
    .notEmpty().withMessage("Last name is required"),
  
  body("email")
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email format"),
  
  body("password")
    .notEmpty().withMessage("Password is required"),

  body("role")
    .optional()
    .isIn(["admin", "customer"]).withMessage("Invalid role, choose 'admin' or 'customer'")
];

// Server Side Validation for Login
export const userLoginValidator = [
  body("email")
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email format"),
  
  body("password").notEmpty().withMessage("Password is required")
];
