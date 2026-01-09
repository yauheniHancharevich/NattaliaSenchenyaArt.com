<script>
  const galleryImages = document.querySelectorAll('.gallery img');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      // Create overlay
      const overlay = document.createElement('div');
      overlay.className = 'image-overlay';

      // Create close button
      const closeBtn = document.createElement('span');
      closeBtn.className = 'image-close';
      closeBtn.innerHTML = '&times;'; // ✕ symbol

      // Create fullscreen image
      const fullImg = document.createElement('img');
      fullImg.src = img.src;
      fullImg.alt = img.alt;

      overlay.appendChild(closeBtn);
      overlay.appendChild(fullImg);
      document.body.appendChild(overlay);

      // Close on X click
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent overlay click
        overlay.remove();
      });

      // Close on ESC
      document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
          overlay.remove();
          document.removeEventListener('keydown', escHandler);
        }
      });
    });
  });
</script>
