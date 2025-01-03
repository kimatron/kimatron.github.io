document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  mobileMenuBtn?.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  // Typing Animation
  const texts = ['Full Stack Developer', 'Technical Writer', 'Marine Conservationist', 'Scuba Instructor'];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  const typingElement = document.querySelector('.typing-text');

  function typeText() {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
          typingElement.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
      } else {
          typingElement.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
      }

      if (!isDeleting && charIndex === currentText.length) {
          isDeleting = true;
          setTimeout(typeText, pauseTime);
          return;
      }

      if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(typeText, typingSpeed);
          return;
      }

      setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
  }

  if (typingElement) {
      typeText();
  }

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
              // Close mobile menu if open
              navLinks.classList.remove('active');
          }
      });
  });

  // Active Section Highlighting
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');

  function highlightNavigation() {
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          const sectionBottom = sectionTop + section.offsetHeight;
          const sectionId = section.getAttribute('id');

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              navItems.forEach(item => {
                  item.classList.remove('active');
                  if (item.getAttribute('href') === `#${sectionId}`) {
                      item.classList.add('active');
                  }
              });
          }
      });
  }

  window.addEventListener('scroll', highlightNavigation);

  // Form Handling
  const form = document.querySelector('.cyber-form');
  if (form) {
      form.addEventListener('submit', (e) => {
          e.preventDefault();
          // Add your form submission logic here
          
          // Example animation for successful submission
          const button = form.querySelector('button[type="submit"]');
          button.innerHTML = '<span>Message_Sent</span>';
          button.classList.add('success');
          
          setTimeout(() => {
              button.innerHTML = '<span>Send_Message()</span>';
              button.classList.remove('success');
          }, 2000);
      });
  }
});