import User from "../model/user.model.js";

export const editUsername = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { username } = req.body;
    const isUser = await User.findOne({ _id: userId });
    if (!isUser) {
      return res.status(200).json({ message: "User not found",success:false });
    }
    if (isUser.username === username) {
      return res.status(200).json({ message: "Username already exists",success:false });
    }
    const existedUsername = await User.findOne({username})
    if(existedUsername){
        return res.status(200).json({ message: "Username already exists",success:false });
    }
    const updatedUser = await User.findByIdAndUpdate(
      {_id:userId},
      { username },
      { new: true }
    );
    res.status(200).json({ message: "Username Updated", data: updatedUser ,success:true });
  } catch (error) {
    console.log("Error in the editUsername controller", error);
    res.status(500).json("Internal server error");
  }
};
