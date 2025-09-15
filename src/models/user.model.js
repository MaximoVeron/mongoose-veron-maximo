import { model, Schema, Types } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    race: {
      type: Types.ObjectId,
      ref: "Race",
    },
    weapons: [
      {
        type: Types.ObjectId,
        ref: "Weapon",
      },
    ],
  },
  {
    versionKey: false,
  }
);

export const UserModel = model("User", UserSchema);
