document.addEventListener('DOMContentLoaded', function () {
  const rotatingText = document.getElementById('rotating-text');
  const words = ['developer', 'writer', 'freelancer', 'diver'];
  let currentIndex = 0;

  function rotateText() {
    rotatingText.classList.add('change');
    setTimeout(() => {
      rotatingText.textContent = words[currentIndex];
      rotatingText.classList.remove('change');
      currentIndex = (currentIndex + 1) % words.length;
    }, 500);
  }

  setInterval(rotateText, 3000);

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Navbar background change on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'var(--navbar-bg)';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.backgroundColor = 'transparent';
      navbar.style.boxShadow = 'none';
    }
  });

  const themeSwitch = document.getElementById('theme-switch');

  themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
  });

  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  document.addEventListener('mousedown', () => {
    cursor.classList.add('cursor-grow');
  });

  document.addEventListener('mouseup', () => {
    cursor.classList.remove('cursor-grow');
  });

  document.querySelectorAll('a, button').forEach(item => {
    item.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-grow');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-grow');
    });
  });

  // Add animation to section titles
  const sectionTitles = document.querySelectorAll('h2');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sectionTitles.forEach(title => {
    title.style.opacity = '0';
    title.style.transform = 'translateY(20px)';
    title.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(title);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Existing code for rotating text and smooth scrolling

  // Parallax effect for project cards
  const projectCards = document.querySelectorAll('.project-card');

  window.addEventListener('scroll', () => {
    projectCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const cardBottom = card.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (cardTop < windowHeight && cardBottom > 0) {
        const scrollPercent = (windowHeight - cardTop) / windowHeight;
        card.style.transform = `translateY(${scrollPercent * 20}px)`;
      }
    });
  });

  // Tilt effect for blog cards
  const blogCards = document.querySelectorAll('.blog-card');

  blogCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      const mouseX = e.clientX - cardCenterX;
      const mouseY = e.clientY - cardCenterY;

      const rotateX = (mouseY / cardRect.height) * 10;
      const rotateY = -(mouseX / cardRect.width) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });

  // Animated counter for a statistics section (you can add this section to your HTML)
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  const statsSection = document.querySelector('#stats');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'));
          animateValue(counter, 0, target, 2000);
        });
        observer.unobserve(statsSection);
      }
    }, {
      threshold: 0.5
    });

    observer.observe(statsSection);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const skillCategories = document.querySelectorAll('.skill-category');

  skillCategories.forEach(category => {
    category.addEventListener('mouseenter', () => {
      category.querySelector('.skill-icon').style.transform = 'scale(1.2) rotate(360deg)';
    });

    category.addEventListener('mouseleave', () => {
      category.querySelector('.skill-icon').style.transform = 'scale(1) rotate(0deg)';
    });
  });

  // Animate skill tags on scroll
  const skillTags = document.querySelectorAll('.skill-tag');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.5
  });

  skillTags.forEach(tag => {
    tag.style.opacity = '0';
    tag.style.transform = 'translateY(20px)';
    tag.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(tag);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Existing code...

  // Blog-specific enhancements
  if (document.querySelector('.blog-post')) {
    // Animate blog header on scroll
    const blogHeader = document.querySelector('.blog-header');
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        blogHeader.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        blogHeader.style.opacity = 1 - scrollPosition / 300;
      } else {
        blogHeader.style.transform = 'translateY(0)';
        blogHeader.style.opacity = 1;
      }
    });

    // Add parallax effect to blog image
    const blogImage = document.querySelector('.blog-image');
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      blogImage.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    });

    // Animate blog content sections on scroll
    const contentSections = document.querySelectorAll('.blog-content > *');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1
    });

    contentSections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(section);
    });

    // Add reading time estimate
    const articleText = document.querySelector('.blog-content').innerText;
    const wordCount = articleText.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200); // Assuming 200 words per minute
    const readingTimeElement = document.createElement('span');
    readingTimeElement.classList.add('reading-time');
    readingTimeElement.innerHTML = `<i class="far fa-clock"></i> ${readingTime} min read`;
    document.querySelector('.blog-meta').appendChild(readingTimeElement);

    // Add table of contents
    const headings = document.querySelectorAll('.blog-content h2');
    const toc = document.createElement('div');
    toc.classList.add('table-of-contents');
    toc.innerHTML = '<h3>Table of Contents</h3><ul></ul>';
    headings.forEach((heading, index) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = heading.textContent;
      a.href = `#heading-${index}`;
      li.appendChild(a);
      toc.querySelector('ul').appendChild(li);
      heading.id = `heading-${index}`;
    });
    document.querySelector('.blog-content').prepend(toc);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var blogCarousel = new bootstrap.Carousel(document.getElementById('blogCarousel'), {
    interval: 5000,
    wrap: true
  });
});