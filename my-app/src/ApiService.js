const URL = "http://localhost:4000/";
export const getChatroomMessages = async function (chatroomId) {
  const response = await fetch(`${URL}messages/${chatroomId}`);
  const chatroom = await response.json();
  return chatroom;
};
export const getChatrooms = async function () {
  const response = await fetch(`${URL}chatrooms`);
  const chatrooms = await response.json();
  return chatrooms;
};
export const createChatRoom = async function (data) {
  const response = await fetch(`${URL}createnewchat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const chatroom = await response.json();
  return chatroom;
};
export const saveMessage = async function (data) {
  const response = await fetch(`${URL}message`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const message = await response.json();
  return message;
};
export const AIresponse = async function (context) {
  const response = await fetch(`${URL}respond`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(context),
  });
  const result = await response.json();
  return result;
};
export const translateText = async function (message) {
   const response = await fetch(`${URL}translate`, {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(message),
   });
   const result = await response.json();
   return result;
}
export const translateGrammar = async function (message) {
  const response = await fetch(`${URL}translategrammar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  });
  const result = await response.json();
  const data = result.data
  return data;
};
export const checkGrammar = async function (message) {
  const response = await fetch(`${URL}grammar`, {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(message),
   });
  const result = await response.json();
  const data = await result.data
  return data;
}
