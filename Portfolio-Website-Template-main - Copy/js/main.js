// Typing Animation
const typingAnimationElement = document.getElementById('typing-animation');
const typingTexts = [
  'Video Editor  ',
  'Graphics Designer  ',
  'Freelancer   ',
];

function playTypingAnimation(text) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingAnimationElement.textContent += text[i];
    }, i * 200);
  }

  setTimeout(() => {
    typingAnimationElement.textContent = '';
    playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
  }, text.length * 200);
}

playTypingAnimation(typingTexts[0]);

// Fade-in Animation for Sections
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// Animated Counter for Achievements
document.addEventListener('DOMContentLoaded', function () {
  const counters = document.querySelectorAll('.number');
  const speed = 200;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-number');
      const count = +counter.innerText;

      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});

// Video Overlay Functionality
const video = document.getElementById('project-video');
const overlay = document.getElementById('video-overlay');

// Show overlay when the page loads
overlay.style.display = 'flex';

// Hide overlay and play video when clicked
overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  video.play();
});

// Show overlay again when the video ends
video.addEventListener('ended', () => {
  overlay.style.display = 'flex';
});