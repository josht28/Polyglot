import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";
export function UserProfile() {
  const user_name = useSelector((state) => state.ChatReducer.user_name);
  return (
    <>
      <div className="profile_container">
        <div className="profile_top_half">
          <div className="profile_details">
          <div>
            <img className="user_image" src={require("../pics/josh.jpg")}></img>
          </div>
          <div>{user_name}</div>
          </div>
          <div className="welcome_message"> Welcome back {user_name}</div>
        </div>
        <div className="profile_bottom_half">
          <div className="logout">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </div>
        </div>
      </div>
    </>
  );
}
