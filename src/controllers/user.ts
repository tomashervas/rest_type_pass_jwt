import { Request, Response } from "express";

export const signUp = async (req: Request, res: Response) => {
    res.json({mess: "Sign Up Successful"});
}

export const signIn = async (req: Request, res: Response) => {
    res.json({mess: "Sign In Successful"});
}