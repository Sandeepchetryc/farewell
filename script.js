function addMessage() {
    let messageInput = document.getElementById("messageInput");
    let messageList = document.getElementById("messageList");

    if (messageInput.value.trim() !== "") {
        let newMessage = document.createElement("p");
        newMessage.textContent = messageInput.value;
        newMessage.style.padding = "10px";
        newMessage.style.background = "#ffe0b2";
        newMessage.style.borderRadius = "5px";
        newMessage.style.margin = "10px 0";
        
        messageList.appendChild(newMessage);
        messageInput.value = "";
    } else {
        alert("Please enter a message before submitting.");
    }
}