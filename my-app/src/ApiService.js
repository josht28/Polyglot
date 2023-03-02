const URL = 'http://localhost:4000/';
export const getChatroomMessages = async function (chatroomId) {
  const response = await fetch(`${URL}messages/${chatroomId}`);
  const chatroom = await response.json();
  return chatroom;
}
export const getChatrooms = async function () {
 const  response = await fetch(`${URL}chatrooms`)
  const chatrooms = await response.json();
  return chatrooms;
}
export const createChatRoom = async function (data){
  const response = await fetch(`${URL}createnewchat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  const chatroom = await response.json();
  return chatroom;
}
export const saveMessage = async function (data) {
  const response = await fetch(`${URL}message`, {
    method: "POST",
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify(data),
  });
  const message = await response.json();
  return message;

}