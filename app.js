const envelope = document.querySelector('.envelope');
const letter = document.querySelector('.letter');
const yesButton = document.querySelector('#yes');
const noButton = document.querySelector('#no');
const bearContainer = document.querySelector('.bear-container');
const photoGrid = document.querySelector('.photo-grid');
const heartsContainer = document.querySelector('.hearts-container');

function openEnvelope() {
    envelope.classList.add('open');
    letter.classList.add('open');
}

yesButton.addEventListener('click', () => {
    // Hide the letter
    letter.style.opacity = '0';
    letter.style.transform = 'translate(-50%, -50%) scale(0)';

    // Show the bear and photo grid
    bearContainer.classList.add('active');
    photoGrid.classList.add('active');

    // Start continuous hearts
    createHearts();
    setInterval(createHearts, 1000); // Generate hearts every second
});

noButton.addEventListener('click', () => {
    alert("Aww, I'll keep trying! 💖");
});

function createHearts() {
    for (let i = 0; i < 10; i++) { // Generate 10 hearts at a time
        const heart = document.createElement('span');
        heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        heart.style.top = Math.random() * 100 + 'vh'; // Random vertical position
        heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random speed
        heart.style.opacity = Math.random(); // Random opacity
        heart.style.width = Math.random() * 20 + 10 + 'px'; // Random size
        heart.style.height = heart.style.width;

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000); // Remove heart after animation ends
    }
}