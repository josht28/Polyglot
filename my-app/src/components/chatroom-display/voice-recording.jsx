import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneLines } from "@fortawesome/free-solid-svg-icons/faMicrophoneLines";
import{faCircleStop} from '@fortawesome/free-solid-svg-icons/faCircleStop'
import { sendingRecord } from "../../ApiService";
import MicRecorder from "mic-recorder-to-mp3";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

export function VoiceRecording() {
  // const dispatch = useDispatch();
  const chatroom = useSelector((state) => state.ChatReducer);
  const [isRecording, SetisRecording] = useState(false);
  const [blobURL, setblobURL] = useState("");
  const [isBlocked, setisBlocked] = useState(false);


  useEffect(() => {
    // on mount we want the permission from the user for the recording
    navigator.getUserMedia({ audio: true },
      () => {
        console.log("Permission Granted");
        setisBlocked(false);
      },
      () => {
        console.log("PermissionDenied");
        setisBlocked(true);
      });
  }, []);

    // console.log("clicked");
    // let result = await sendingRecord({ data: "testing" });
    // console.log(result);
const start = () => {
  if (isBlocked) {
    console.log("Permission Denied");
  } else {
    console.log("recording");
    Mp3Recorder.start()
      .then(() => {
        SetisRecording(true);
      })
      .catch((e) => console.error(e));
  }
};
  const stop = () => {
    console.log("stopping");
    Mp3Recorder.stop()
      .getMp3()
      .then(async ([buffer, blob]) => {
        // upload the mp3 to cloudinary and retrieve the url
        const formData = new FormData();
        formData.append('file', blob);
        formData.append('upload_preset', 'PolyglotAudio');
        let POST_URL =
            "https://api.cloudinary.com/v1_1/" + 'dayg41e9c' + "/auto/upload";
        const response = await fetch(`${POST_URL}`, {
          method: "POST",
          body: formData,
        });
        const audio = await response.json();
        const audioFileLink = audio.url;
        console.log(audioFileLink);

        // sending data to the backend to translate
        const info = {
          audio: audioFileLink,
          chatroom: chatroom,
        }
        console.log(info);
       const updatedChat = await sendingRecord(info);
        console.log(updatedChat);

        // update the state and send a request for response

          SetisRecording(false);

      })
      .catch((e) => console.log(e));
  };


  return (
    <>
      <FontAwesomeIcon className="speak" icon={faMicrophoneLines} onClick={start} disable={isRecording} />
      <FontAwesomeIcon icon={faCircleStop} onClick={stop} disable ={!isRecording} />
      <audio src={blobURL} controls ="controls"/>
    </>
  );
}
