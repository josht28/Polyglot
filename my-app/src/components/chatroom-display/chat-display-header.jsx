import { useSelector } from "react-redux";
export function ChatDisplayHeader() {
  // const AI_image = useSelector((store) => AI_image)
  // console.log(AI_image);
  // const AI_name = useSelector((store)=>AI_name)
  return (
    <>
      <div className="chat_display_header">
        <div className="chat_display_image">
          <img
            className="AI_image"
            src={require("../../pics/william.png")}
          ></img>
        </div>
        <div className="AI_name"> William </div>
      </div>
    </>
  );
}