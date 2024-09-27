
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { ChatContextProvider } from "./context/chat.jsx";
import { AuthContextProvider } from "./context/authContent.jsx";
import { ConversationContextProvider } from "./context/conversationContext.jsx";
import { MessageContextProvider } from "./context/messageContext.jsx";
import { GlobalRoomContextProvider } from "./context/globalRoomContext.jsx";
import { RoomContextProvider } from "./context/roomContext.jsx";


createRoot(document.getElementById("root")).render(
  <div>
    
   <RoomContextProvider>
    <GlobalRoomContextProvider>
      <MessageContextProvider>
        <ConversationContextProvider>
          <AuthContextProvider>
            <ChatContextProvider>
              <App />
            </ChatContextProvider>
          </AuthContextProvider>
        </ConversationContextProvider>
      </MessageContextProvider>
    </GlobalRoomContextProvider>
    </RoomContextProvider>
    
    <Toaster />
   
  </div>
);
