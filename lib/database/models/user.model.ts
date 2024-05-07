import { Document, Schema, model, models } from "mongoose";

interface IUser extends Document {
    clerkId: string;
    email: string;
    userName: string;
    firstName: string;
    lastName: string;
    photo: string;
    planId?: number;
    creditBalance?: number;
}

const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    userName: { type: String, required: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    photo: { type: String, required: true },
    planId: { type: Number, default: 10 },
    creditBalance: { type: Number, default: 10 },
});

const User = models?.User || model("User", UserSchema);

export default User;
