// controllers/authController.js
//const login = require("../../service/users");
const User=require("../../models/userSchema")
const logout = async (req, res) => {
  try {
    console.log("controlers");
    const user = await User.findOne({ _id: require.user._id });
    if (!user) {
      return res.status(401).json({ message: "Not authorized" });
    }
    user.token = ""; // Delete the token on the user
    await user.save();
    res.status(204).send(); // Successful response without content
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
module.exports = {
  logout,
};