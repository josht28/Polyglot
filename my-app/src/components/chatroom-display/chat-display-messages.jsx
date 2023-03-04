import { Messagefrom } from "./message-from";
import { MessageTo } from "./message-to";
import { useSelector} from "react-redux";

export function ChatDisplayMessage() {
  //destructure the messages
  const messages = useSelector((state) => state.messages);
  const AI_id = useSelector((state) => state.AI_id);
  const AI_image = useSelector((state)=>state.AI_image)

  // map through the messages and check who the senderId belongs to and render accordingly
  return (
    <>
      <div className="message_wrapper">
        {messages.map((message) => {
          return message.senderId === AI_id ? (
            <Messagefrom
              key={message.messageId}
              message={message}
              AI_image={AI_image}
            />
          ) : (
            <MessageTo key={message.messageId} message={message} />
          );
        })}
      </div>
    </>
  );
}
