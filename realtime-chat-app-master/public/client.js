//  client libery jo aaraha call io koi bhi broser connect ho jayega 
const socket = io()
let name;
// Get text yeriya ko
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')
// jab tak user name complsory infinite loop
do {
    name = prompt('Please enter your name: ')
} while(!name)

//event recive and chack koi key enter hua hai ya nahi (keyup event hai)
textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        sendMessage(e.target.value)
    }
})
// send message function
function sendMessage(message) {
    let msg = {
        user: name,
        message: message.trim()
    }
    // Append 
    appendMessage(msg, 'outgoing')
    textarea.value = ''
    scrollToBottom()

    // Send to server 
    socket.emit('message', msg)

}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
}

// Recieve messages 
socket.on('message', (msg) => {
    appendMessage(msg, 'incoming')
    scrollToBottom()
})

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight
}
