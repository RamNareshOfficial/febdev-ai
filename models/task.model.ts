import mongoose from "mongoose";
import { Schema } from "mongoose";

const TaskSchema = new Schema(
    {
        title: { type: String, required: true, },
        description: String,
        duration: String,
        isRepeatable: Boolean,
        skipped: {type: Number, required: false},
        goodWill: {type: String, required: false}, // if skipped = bad(< 10), good(< 7), better(< 5), best(< 2), excillent(< 1)
        priority: String,
        status: {type: String, required: false},
    },
    {
        timestamps: true
    }
)

export const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema); 