import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export function UserProfile() {
  const user_name = useSelector((state) => state.user_name);
  return (
    <>
      <div className="profile_container">
        <div className="profile_details">
          <div>
            <img className="user_image" src={require("../pics/josh.jpg")}></img>
          </div>
          <div>{user_name}</div>
        </div>
        <div>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
          </div>
        </div>
      </div>
    </>
  );
}
