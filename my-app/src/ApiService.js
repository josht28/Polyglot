const URL = 'http://localhost:4000/';
export const getChatroomMessages = async function (chatroomId,message) {
  const response = await fetch(`${URL}messages/${chatroomId}`);
  return await response.json();
}
export const getChatrooms = async function () {
 const  response = await fetch(`${URL}chatrooms`)
  const chatrooms = await response.json();
  return chatrooms;
}