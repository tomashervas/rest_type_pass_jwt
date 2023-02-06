import { Request, Response } from "express";
import User, { IUser } from "../models/user";
import jwt from "jsonwebtoken";

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

    const { email, password } = req.body;
    if (!email ||!password) {
        return res.status(400).json({ error: "Please provide email and password" });
    }
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ error: "User does not exist" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(400).json({ error: "Invalid password" });
    }
    res.status(200).json({ token: generateAuthToken(user) });

}

const generateAuthToken = (user: IUser) => {
    const token = jwt.sign({id: user.id , email:user.email} , process.env.JWT_SECRET!, { expiresIn: "1d" });
    return token;
}