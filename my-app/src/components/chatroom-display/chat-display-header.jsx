import { useSelector } from "react-redux";
export function ChatDisplayHeader() {
  const AI_image = useSelector((state) => state.AI_image);
  const AI_name = useSelector((state) => state.AI_name);
  return (
    <>
      <div className="chat_display_header">
        <div className="chat_display_image">
          <img
            className="AI_image"
            src={require(`../../pics/${AI_image}.png`)}
          ></img>
        </div>
        <div className="AI_name"> {AI_name} </div>
      </div>
    </>
  );
}