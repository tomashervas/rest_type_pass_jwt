"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true, lowercase: true, trim: true },
    password: { type: String, required: true },
});
userSchema.pre("save", function (next) {
    if (!this.isModified("password"))
        return next();
    const hash = bcrypt_1.default.hashSync(this.password, 10);
    this.password = hash;
});
userSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt_1.default.compareSync(candidatePassword, this.password);
};
exports.default = (0, mongoose_1.model)('User', userSchema);
