import { Messagefrom } from "./message-from";
import { MessageTo } from "./message-to";
export function ChatDisplayMessage() {
  return (
    <>
      <div className="message_wrapper">
    <Messagefrom />
        <MessageTo />
        </div>
    </>
  );
}
