document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('custom-cursor');
    const links = document.querySelectorAll('.link');
  
    // Initial state: Dot cursor
    cursor.classList.add('cursor-dot');
  
    let mouseX = 0,
      mouseY = 0,
      posX = 0,
      posY = 0;
  
    // Smooth cursor movement using requestAnimationFrame
    function updateCursor() {
      const speed = 0.1; // Controls smoothness (lower = smoother)
      posX += (mouseX - posX) * speed;
      posY += (mouseY - posY) * speed;
  
      cursor.style.left = `${posX}px`;
      cursor.style.top = `${posY}px`;
  
      requestAnimationFrame(updateCursor);
    }
  
    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
  
      // Show cursor
      cursor.style.display = 'block';
      mouseX = x;
      mouseY = y;
    });
  
    // Hover effect on links
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        // Remove dot class and add button class
        cursor.classList.remove('cursor-dot');
        cursor.classList.add('cursor-button');
        cursor.textContent = link.getAttribute('data-tooltip'); // Display tooltip text
      });
  
      link.addEventListener('mouseleave', () => {
        // Remove button class and add dot class
        cursor.classList.remove('cursor-button');
        cursor.classList.add('cursor-dot');
        cursor.textContent = ''; // Clear text
      });
    });
  
    // Start smooth cursor updates
    updateCursor();
  });