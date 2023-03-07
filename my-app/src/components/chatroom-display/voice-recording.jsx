import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneLines } from "@fortawesome/free-solid-svg-icons/faMicrophoneLines";
import { faCircleStop } from "@fortawesome/free-solid-svg-icons/faCircleStop";
import { sendingRecord, saveMessage } from "../../ApiService";
import MicRecorder from "mic-recorder-to-mp3";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

export function VoiceRecording() {
  const dispatch = useDispatch();
  const chatroom = useSelector((state) => state.ChatReducer);
  const [isRecording, SetisRecording] = useState(false);
  const [blobURL, setblobURL] = useState("");
  const [isBlocked, setisBlocked] = useState(false);

  useEffect(() => {
    // on mount we want the permission from the user for the recording
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("Permission Granted");
        setisBlocked(false);
      },
      () => {
        console.log("PermissionDenied");
        setisBlocked(true);
      }
    );
  }, []);
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
        formData.append("file", blob);
        formData.append("upload_preset", "PolyglotAudio");
        let POST_URL =
          "https://api.cloudinary.com/v1_1/" + "dayg41e9c" + "/auto/upload";
        const response = await fetch(`${POST_URL}`, {
          method: "POST",
          body: formData,
        });
        const audio = await response.json();
        const audioFileLink = audio.url;
        console.log(audioFileLink);
        // update the audio link
        setblobURL(audioFileLink);

        // sending data to the backend to translate
        const info = {
          audio: audioFileLink,
          chatroom: chatroom,
        };
        console.log(info);
        const text = await sendingRecord(info);
        // save to the database
        const message = {
          chatroomId: chatroom.chatroomId,
          user_name: "Josh",
          targetLanguage: chatroom.targetLanguage,
          messages: {
            messageId: uuidv4(),
            senderId: chatroom.userId,
            senderName: "Josh",
            timeStamp: Date.now(),
            text: text,
            audio: audioFileLink,
            translatedText: "",
          },
        };
        const updatedChatroom = await saveMessage(message);
        // update the message on the front end
        dispatch({ type: "updatemessages", payload: updatedChatroom });

        // // make a response call to ChatGPT and display the new message
        // const ChatroomWithAIresponse = await AIresponse(chatroomDetail);

        // // convert the text to audio through google cloud
        // // take the last message from the chatroom
        // lastMessage = ChatroomWithAIresponse.messages.slice(-1)

        SetisRecording(false);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <FontAwesomeIcon
        className="speak"
        icon={faMicrophoneLines}
        onClick={start}
        disable={isRecording}
      />
      <FontAwesomeIcon
        icon={faCircleStop}
        onClick={stop}
        disable={!isRecording}
      />
      <audio src={blobURL} controls="controls" />
    </>
  );
}
