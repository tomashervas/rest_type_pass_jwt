import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser {
    id?: string;
    email: string;
    password: string;
    comparePassword: (candidatePassword: string) => Promise<boolean>;
}

const userSchema = new Schema<IUser>({
    email: { type: String, required: true, lowercase: true, trim: true },
    password: { type: String, required: true },
});

userSchema.pre("save", function(next) {
    if (!this.isModified("password")) return next();
    try{
        this.password = bcrypt.hashSync(this.password, 10);
        next();
    }
    catch(err){
        next(new Error('Problem hashing password'));
    }
    
})

userSchema.methods.comparePassword = function(candidatePassword: string): boolean {
    return bcrypt.compareSync(candidatePassword, this.password);
}


export default model<IUser>('User', userSchema);