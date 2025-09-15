import { model, Schema } from "mongoose";

const WeaponSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    power: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export const WeaponModel = model("Weapon", WeaponSchema);
