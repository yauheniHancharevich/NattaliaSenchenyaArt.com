// Create Modal Elements Dynamically
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
    <span class="close-modal">&times;</span>
    <img class="modal-content" id="modal-img">
`;
document.body.appendChild(modal);

const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close-modal');

// Select all images in all galleries
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = image.src;
    });
});

// Close when clicking X
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target !== modalImg) {
        modal.style.display = 'none';
    }
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.style.display = 'none';
    }
});
