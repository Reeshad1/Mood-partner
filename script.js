document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userMessage = inputField.value.trim();

    if (userMessage) {
        addMessageToChat(userMessage, 'user-message');
        inputField.value = '';

        setTimeout(() => {
            const botReply = generateBotReply(userMessage);
            addMessageToChat(botReply, 'bot-message');
        }, 500);
    }
}

function addMessageToChat(message, messageType) {
    const chatWindow = document.getElementById('chat-window');
    const newMessage = document.createElement('div');
    newMessage.className = `chat-message ${messageType}`;
    newMessage.textContent = message;
    chatWindow.appendChild(newMessage);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function generateBotReply(userMessage) {
    const userMessageLower = userMessage.toLowerCase();

    const responses = {
        'hi': 'Hello! 😊 How are you felling today ? [ Sad, Happy, Bored, Angry, Excied] Tell me 🙏 ', 
        'how are you': 'I\'m just a bot, but I\'m here to chat! How about you?',
        'happy': 'I\'m glad 😊to hear that! What made you happy today?',
        'sad': 'I\'m sorry 😔to hear that. Do you want to talk about it?',
        'bored': 'Let\'s find something🤔 fun to talk about! What do you like to do for fun😚?',
        'angry': 'It\'s okay to feel angry🤬 sometimes. Do you want to share what happened?',
        'excited': 'That\'s awesome😱! What are you excited about?'
    };

    for (let key in responses) {
        if (userMessageLower.includes(key)) {
            return responses[key];
        }
    }

    return 'That\'s interesting! Tell me more.';
}
