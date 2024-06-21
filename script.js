function throwEmojis() {
    const emojiContainer = document.getElementById('emoji-container');
    const emojis = ['🌾', '🌱', '🌻', '🍀', '🌳']; // Array of emojis

    const interval = setInterval(() => {
        for (let i = 0; i < 5; i++) { // Throw 5 emojis at a time
            const emoji = document.createElement('div');
            emoji.classList.add('emoji');
            emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + 'vw';
            emoji.style.animationDelay = Math.random() * 2 + 's';
            emojiContainer.appendChild(emoji);

            // Remove the emoji after animation
            emoji.addEventListener('animationend', () => {
                emoji.remove();
            });
        }
    }, 500); // Throw emojis every 500 milliseconds

    // Stop throwing emojis after 20 seconds
    setTimeout(() => {
        clearInterval(interval);
    }, 20000);
}
