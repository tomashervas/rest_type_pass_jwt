import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

interface IUser {
    name: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true, lowercase: true, trim: true },
    password: { type: String, required: true },
});

userSchema.pre("save", function(next) {
    if (!this.isModified("password")) return next();
    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash;
    
})

userSchema.methods.comparePassword = function(candidatePassword: string): boolean {
    return bcrypt.compareSync(candidatePassword, this.password);
}


export default model<IUser>('User', userSchema);