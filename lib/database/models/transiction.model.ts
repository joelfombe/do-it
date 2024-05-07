import { Schema, model, models } from "mongoose";

const TransictionSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    stripedId: {
        type: String,
        required: true,
        unique: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    plan: {
        type: String,
    },
    credits: {
        type: Number,
    },
    buyer: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const Transiction =
    models?.Transictions || model("Transiction", TransictionSchema);
