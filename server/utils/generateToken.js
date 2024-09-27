import jwt from "jsonwebtoken";
const generateToken = (userId, res) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
      expiresIn: "15d",
    });
    if (!token) {
      return res.status(500).json({ message: "Error generating token" });
    }
    return res.cookie("jwt", token, {
      maxAge: 24 * 60 * 60 * 15 * 1000,
      httpOnly: true,
      // sameSite: "strict",
    });
  } catch (error) {
    console.log("Error in generateToken", error);
  }
};

export default generateToken;
