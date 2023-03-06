import { useSelector } from "react-redux";
import { Image,Transformation } from 'cloudinary-react'

export function ChatDisplayHeader() {
  const AI_image = useSelector((state) => state.ChatReducer.AI_image);
  const AI_name = useSelector((state) => state.ChatReducer.AI_name);
  console.log(AI_image);
  return (
    <>
      <div className="chat_display_header">
        <div className="chatroom_user_image">
          <Image
            cloudName="dayg41e9c"
            publicId={AI_image}
            width="40"
            height="40"
            radius = "max"
          />
        </div>
        <div className="AI_name"> {AI_name} </div>
      </div>
    </>
  );
}