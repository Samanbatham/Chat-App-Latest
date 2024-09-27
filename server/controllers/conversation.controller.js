import User from "../model/user.model.js";
import Google from "../model/google.model.js";
import Conversation from "../model/conversation.model.js";

export const getConversation = async (req, res) => {
  const loggedInUser = req.user.userId;
  try {
    const users = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    ).lean();

    const googleUsers = await Google.find({ _id: { $ne: loggedInUser } }).lean();

    const allUser = users.concat(googleUsers);

    let iterate = allUser.length;

    
      for(let i=0; i < iterate; i++){
        const latestMsg = await Conversation.findOne({
          participants: { $all: [loggedInUser, allUser[i]] },
        }).populate("messages");
        const lastMessage = latestMsg?.messages[latestMsg.messages.length-1] || []
        allUser[i] =  { ...allUser[i], lastMessage }
        
      }

      
   

    if (allUser) {
      res.status(200).json({ user: allUser, success: true });
    }
  } catch (error) {
    console.log("error in the getConversation", error.message);
    res.status(500).json({ msg: "Invernal server error", success: false });
  }
};
