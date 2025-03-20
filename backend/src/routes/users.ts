import express, { Request, Response } from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";
import verifyToken from "../middleware/auth";
const router = express.Router();

router.post(
  "/register",
  [
    check("firstName", "First Name is required").isString(),
    check("lastName", "Last Name is required").isString(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password must be at least 8 characters long").isLength({
      min: 8,
    }),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ message: errors.array() });
      return;
    }
    try {
      let user = await User.findOne({
        email: req.body.email,
      });

      if (user) {
        res.status(400).json({ message: "User already registered" });
        return; // Exit after sending response
      }
      user = new User(req.body);
      await user.save();

      const token = jwt.sign(
        {
          userId: user.id,
        },
        process.env.JWT_SECRET_KEY as string,
        {
          expiresIn: "1d",
        }
      );
      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24, // 1 day
      });
      res.status(200).json({
        message: "Registration successful",
        token,
      });
      return;
    } catch (error) {
      res.status(500).send({ message: "Something went wrong" });
    }
  }
);
router.get("/me", verifyToken, async (req: Request, res: Response) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId).select("-password");
    if (!user) {
      res.status(400).json({ message: "User not found" });
      return;
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
});
export default router;
