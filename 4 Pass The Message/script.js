const messageInput = document.getElementById("messageInput");

document.querySelector("#messageInput").addEventListener("keydown", (event) => {
  if(event.key === "Enter")
    getMessage();
});

function getMessage(){
    document.getElementById("messageOutput").innerHTML = messageInput.value;
    messageInput.value = "";
}