import { Messagefrom } from "./message-from";
import { MessageTo } from "./message-to";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const AI_images = {
  ChatGPTEnglish: "english user pic",
};

export function ChatDisplayMessage() {
  //destructure the messages
  const messages = useSelector((state) => state.messages);
  const AI_id = useSelector((state) => state.AI_id);
  const AI_image = AI_images[AI_id];
  console.log(messages);

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
