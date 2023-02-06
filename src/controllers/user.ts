import { Request, Response } from "express";
import User from "../models/user";

export const signUp = async (req: Request, res: Response) => {

    const { email, password } = req.body;
    if (!email ||!password) {
        return res.status(400).json({ error: "Please provide email and password" });
    }

    const user = await User.findOne({ email });
    console.log(user)
    if (user) {
        return res.status(400).json({ error: "User already exists" });
    }

    const newUser = await new User(req.body).save();
    console.log(newUser)


    res.status(201).json({ user: newUser });
}

export const signIn = async (req: Request, res: Response) => {
    res.json({msg: "Sign In Successful"});
}