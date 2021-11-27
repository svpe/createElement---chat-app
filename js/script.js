document.querySelector(".chat-window").addEventListener("submit", sendMessage);

function sendMessage(e){
  e.preventDefault();
  const messageEl = document.createElement("li");
  const messageTimeEl = document.createElement("span");
  const time = new Date();
  messageTimeEl.innerText = time.getHours() + ":" + time.getMinutes();
  const messageInput = document.querySelector(".chat-window-message");
  messageEl.innerText = messageInput.value;
  messageEl.appendChild(messageTimeEl);
  document.querySelector(".chat-thread").appendChild(messageEl);
  messageInput.value = "";
}