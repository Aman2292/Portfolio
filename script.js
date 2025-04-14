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
  const sections = document.querySelectorAll(".section");
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



