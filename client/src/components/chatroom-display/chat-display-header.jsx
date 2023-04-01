import { useSelector } from "react-redux";
import { Image} from "cloudinary-react";

export function ChatDisplayHeader() {
  const AI_image = useSelector((state) => state.ChatReducer.AI_image);
  const AI_name = useSelector((state) => state.ChatReducer.AI_name);
  const isTyping = useSelector((state) => state.TypingReducer);
  return (
    <>
      <div className="chat_display_header">
        <div className="chatdisplay_header_user_image">
          <Image
            cloudName="dayg41e9c"
            publicId={AI_image}
            width="40"
            height="40"
            radius="max"
          />
        </div>
        <div className="details_wrapper">
          <div className="AI_name"> {AI_name} </div>
          {(isTyping) ? (
            <div className="typing_wrapper">
              <div>typing</div>
              <div className="typing">
                <div className="typing__dot">.</div>
                <div className="typing__dot">.</div>
                <div className="typing__dot">.</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
