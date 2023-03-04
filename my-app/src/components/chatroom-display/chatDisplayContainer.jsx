import { ChatDisplayHeader } from "./chat-display-header";
import { ChatDisplayMessage } from "./chat-display-messages";
import { ChatDisplayFooter } from "./chat-display-footer";
export function ChatDisplayContainer() {
  return (
    <>
      <div className="chat_display_container">
        <ChatDisplayHeader />
        <ChatDisplayMessage />
        <ChatDisplayFooter />
      </div>
    </>
  );
}
