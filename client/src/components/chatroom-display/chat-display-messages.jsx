import { Messagefrom } from "./message-from";
import { MessageTo } from "./message-to";
import { useSelector } from "react-redux";
import { useEffect,useRef } from "react";


export function ChatDisplayMessage() {

  const messages = useSelector((state) => state.ChatReducer.messages);
  const AI_id = useSelector((state) => state.ChatReducer.AI_id);
  const AI_image = useSelector((state) => state.ChatReducer.AI_image);

  // to autoscroll to the new message
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
        <div ref={messagesEndRef} key={AI_id} />
      </div>
    </>
  );
}
