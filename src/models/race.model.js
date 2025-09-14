import { model, Schema } from "mongoose";

const RaceSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        }
    },
    {
        versionKey: false,
    }
)

export const RaceModel = model("Race", RaceSchema);