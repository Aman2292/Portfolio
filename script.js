document.addEventListener("DOMContentLoaded", function () {
  // Array of dynamic texts
  const texts = [
    "Flutter Developer",
    "Frontend Developer",
    "Android Developer",
    "UI/UX Designer",
    "HTML/CSS",
  ];
  // Select the <p> element by its ID
  const dynamicText = document.getElementById("dynamic-text");
  let currentIndex = 0;
  function updateText() {
    dynamicText.classList.add("fade-out");
    setTimeout(() => {
      dynamicText.textContent = texts[currentIndex];
      currentIndex = (currentIndex + 0.00) % texts.length;
      setTimeout(() => {
        dynamicText.classList.remove("fade-out");
      }, 50); 
    }, 500); 
  }
  setInterval(updateText, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
  // Select all images inside .threedimages
  const images = document.querySelectorAll('.threedimages img');

  // Function to animate images infinitely
  function animateImages() {
    const amplitude = 10; // Maximum translateY value (pixels)
    const speed = Math.random() * 0.001 + 0.001; // Random speed between 0.002 and 0.005; // Speed of oscillation (lower = slower)

    function animate(time) {
      images.forEach((img, index) => {
        // Calculate staggered phase for each image
        const phaseOffset = index * 0.5 + Math.PI / 2; // Offset with PI/2 to start upward

        // Use sine wave to calculate translateY
        const translateY = Math.sin(time * speed - phaseOffset) * amplitude;

        // Apply the transformation
        img.style.transform = `translateY(${translateY}px)`;
      });

      // Continue the animation
      requestAnimationFrame(animate);
    }

    // Start the animation loop
    requestAnimationFrame(animate);
  }

  // Start the animation when the page loads
  animateImages();
});





document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section ");
  const navLinks = document.querySelectorAll(".nav-item a");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.contact-section');
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

    // Check if the cursor is within the footer bounds
    const footerRect = footer.getBoundingClientRect();
    if (
      x >= footerRect.left &&
      x <= footerRect.right &&
      y >= footerRect.top &&
      y <= footerRect.bottom
    ) {
      cursor.style.display = 'block'; // Show cursor
      mouseX = x;
      mouseY = y;
    } else {
      cursor.style.display = 'none'; // Hide cursor outside the footer
    }
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