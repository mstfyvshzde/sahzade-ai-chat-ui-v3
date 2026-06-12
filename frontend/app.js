const chatForm = document.getElementById("chatForm");
const messageInput = document.getElementById("messageInput");
const chatBox = document.getElementById("chatBox");
const sendButton = document.getElementById("sendButton");
const statusBadge = document.getElementById("statusBadge");


function addMessage(text, type) {
  const messageDiv = document.createElement("div");

  messageDiv.classList.add("message");

  if (type === "user") {
    messageDiv.classList.add("user-message");
  } else {
    messageDiv.classList.add("assistant-message");
  }

  const paragraph = document.createElement("p");
  paragraph.textContent = text;

  messageDiv.appendChild(paragraph);
  chatBox.appendChild(messageDiv);

  chatBox.scrollTop = chatBox.scrollHeight;
}


function addLoadingMessage() {
  const loadingDiv = document.createElement("div");

  loadingDiv.classList.add("message");
  loadingDiv.classList.add("assistant-message");
  loadingDiv.classList.add("loading-message");
  loadingDiv.id = "loadingMessage";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Thinking...";

  loadingDiv.appendChild(paragraph);
  chatBox.appendChild(loadingDiv);

  chatBox.scrollTop = chatBox.scrollHeight;
}


function removeLoadingMessage() {
  const loadingMessage = document.getElementById("loadingMessage");

  if (loadingMessage) {
    loadingMessage.remove();
  }
}


async function sendMessageToAPI(message) {
  const response = await fetch(API_CONFIG.CHAT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: message
    })
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  const data = await response.json();

  return data.response;
}


chatForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const userMessage = messageInput.value.trim();

  if (!userMessage) {
    return;
  }

  addMessage(userMessage, "user");

  messageInput.value = "";
  sendButton.disabled = true;
  statusBadge.textContent = "Generating...";

  addLoadingMessage();

  try {
    const assistantResponse = await sendMessageToAPI(userMessage);

    removeLoadingMessage();
    addMessage(assistantResponse, "assistant");

    statusBadge.textContent = "Local API";
  } catch (error) {
    removeLoadingMessage();

    addMessage("API connection error. Make sure V2 backend is running.", "assistant");

    statusBadge.textContent = "API Error";

    console.error(error);
  } finally {
    sendButton.disabled = false;
    messageInput.focus();
  }
});