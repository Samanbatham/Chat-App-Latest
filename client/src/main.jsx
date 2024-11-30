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
import { DependencyContextProvider } from "./context/dependencyContext.jsx";
import { SocketContextProvider } from "./context/SocketContext.jsx";
createRoot(document.getElementById("root")).render(
  <div>
    <AuthContextProvider>
      <SocketContextProvider>
        <DependencyContextProvider>
          <RoomContextProvider>
            <GlobalRoomContextProvider>
              <MessageContextProvider>
                <ConversationContextProvider>
                  <ChatContextProvider>
                    <App />
                  </ChatContextProvider>
                </ConversationContextProvider>
              </MessageContextProvider>
            </GlobalRoomContextProvider>
          </RoomContextProvider>
        </DependencyContextProvider>
      </SocketContextProvider>
    </AuthContextProvider>
    <Toaster />
  </div>
);
