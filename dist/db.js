"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set('strictQuery', false);
mongoose_1.default.connect(process.env.MONGO_URL || 'mongodb://localhost/prueba');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});
connection.on('error', err => { throw err; });
