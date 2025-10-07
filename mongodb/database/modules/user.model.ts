import { model, models, Schema } from "mongoose";
const UserSchema = new Schema({
  clerlId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  fisrtName: { type: String, required: true },
  lastname: { type: String, required: true },
});
const User = models.User || model("User", UserSchema);
export default User;
