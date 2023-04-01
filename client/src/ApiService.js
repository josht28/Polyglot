const URL = 'http://localhost:4000/';

export const getChatroomMessages = async function (chatroomId) {
  try {
    const response = await fetch(`${URL}messages/${chatroomId}`);
    const chatroom = await response.json();
    return chatroom;
  } catch (error) {
    console.log(`Error while retrieving chatroom messages: ${error}`);
  }
};

export const getChatrooms = async function () {
  try {
    const response = await fetch(`${URL}chatrooms`);
    const chatrooms = await response.json();
    return chatrooms;
  } catch (error) {
    console.log(`Error while retrieving all chatrooms: ${error}`);
  }
};

export const createChatRoom = async function (data) {
  try {
    const response = await fetch(`${URL}createnewchat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const chatroom = await response.json();
    return chatroom;
  } catch (error) {
    console.log(`Error while creating chatroom: ${error}`);
  }
};

export const saveMessage = async function (data) {
  try {
    const response = await fetch(`${URL}savemessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const message = await response.json();
    return message;
  } catch (error) {
    console.log(`Error while saving messages: ${error}`);
  }
};

export const AIresponse = async function (context) {
  try {
    const response = await fetch(`${URL}respond`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(context),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(`Error while generating AI response: ${error}`);
  }
};

export const translateText = async function (message) {
  try {
    const response = await fetch(`${URL}translate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(`Error while translating messages ${error}`);
  }
};

export const translateGrammar = async function (message) {
  try {
    const response = await fetch(`${URL}translategrammar`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });
    const result = await response.json();
    const data = result.data;
    return data;
  } catch (error) {
    console.log(`Error while traanslating grammar: ${error}`);
  }
};

export const checkGrammar = async function (message) {
  try {
    const response = await fetch(`${URL}grammar`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });
    const result = await response.json();
    const data = await result.data;
    return data;
  } catch (error) {
    console.log(`Error while checking grammar: ${error}`);
  }
};

export const sendingRecord = async function (message) {
  try {
    const response = await fetch(`${URL}audio`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });
    const result = await response.json();
    const data = await result.data;
    return data;
  } catch (error) {
    console.log(`Error while sending the audio file: ${error}`);
  }
};

export const getVoiceResponse = async function (message) {
  try {
    const response = await fetch(`${URL}audioresponse`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(`Error while generating voice response: ${error}`);
  }
};
