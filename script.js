document.addEventListener('DOMContentLoaded', () => {
  // Form handling code remains the same
  const form = document.querySelector('form');
  if (form) {
      form.addEventListener('submit', function(e) {
          e.preventDefault();
          document.getElementById('form-response').textContent = 'Submitting...';
          setTimeout(() => {
              document.getElementById('form-response').textContent = 'Your message has been sent successfully!';
              form.reset();
          }, 2000);
      });
  }
// Add this to your script.js file or in a script tag
document.getElementById('contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const formResponse = document.getElementById('form-response');
  formResponse.textContent = 'Sending message...';
  
  try {
      const formData = new FormData(this);
      
      const response = await fetch('https://getform.io/f/apjjkova', {
          method: 'POST',
          body: formData,
          headers: {
              'Accept': 'application/json'
          }
      });
      
      if (response.ok) {
          formResponse.textContent = 'Message sent successfully!';
          this.reset(); // Clear the form
      } else {
          throw new Error('Form submission failed');
      }
  } catch (error) {
      console.error('Error:', error);
      formResponse.textContent = 'Failed to send message. Please try again.';
  }
});
  // Updated mobile menu functionality
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');
  const navItems = document.querySelectorAll('.nav-links li a');
  const sections = document.querySelectorAll('section');

  // Debug check for elements
  if (!hamburger || !navLinks || !navbar) {
      console.error('Required navigation elements not found');
      return;
  }

  // Improved toggle menu with stopPropagation
  hamburger.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent event bubbling
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      navbar.classList.toggle('active');
  });

  // Updated nav items click handler
  navItems.forEach(item => {
      item.addEventListener('click', (e) => {
          e.stopPropagation(); // Prevent event bubbling
          
          // Remove active class from all nav items
          navItems.forEach(nav => nav.classList.remove('active'));
          
          // Add active class to clicked item
          item.classList.add('active');
          
          // Close mobile menu
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
          navbar.classList.remove('active');
      });
  });

  // Improved outside click handler
  document.addEventListener('click', (e) => {
      const isClickInside = navbar.contains(e.target);
      const isMenuActive = navLinks.classList.contains('active');
      
      if (!isClickInside && isMenuActive) {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
          navbar.classList.remove('active');
      }
  });

  // Enhanced scroll handler with throttling
  let isScrolling = false;
  const handleScroll = () => {
      if (!isScrolling) {
          isScrolling = true;
          
          window.requestAnimationFrame(() => {
              let current = '';
              
              sections.forEach(section => {
                  const sectionTop = section.offsetTop;
                  const sectionHeight = section.clientHeight;
                  if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                      current = section.getAttribute('id');
                  }
              });

              navItems.forEach(item => {
                  item.classList.remove('active');
                  if (item.getAttribute('href').slice(1) === current) {
                      item.classList.add('active');
                  }
              });
              
              isScrolling = false;
          });
      }
  };

  // Set home as active by default
  const homeLink = document.querySelector('a[href="#home"]');
  if (homeLink) {
      homeLink.classList.add('active');
  }

  // Add scroll event listener with passive option for better performance
  window.addEventListener('scroll', handleScroll, { passive: true });
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');
  const navItems = document.querySelectorAll('.nav-links li a');
  const body = document.body;

  // Toggle menu with improved functionality
  hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      navbar.classList.toggle('active');
      body.classList.toggle('menu-open'); // Prevent background scrolling
      
      // Debug log
      console.log('Hamburger clicked', {
          hamburgerActive: hamburger.classList.contains('active'),
          navLinksActive: navLinks.classList.contains('active')
      });
  });

  // Close menu when clicking nav items
  navItems.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
          navbar.classList.remove('active');
          body.classList.remove('menu-open');
      });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
          navbar.classList.remove('active');
          body.classList.remove('menu-open');
      }
  });

  // Prevent clicks inside the menu from closing it
  navLinks.addEventListener('click', (e) => {
      e.stopPropagation();
  });
});

// Keep your existing scroll handling code below
// Add this to your script.js file or in a script tag
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formResponse = document.getElementById('form-response');
    formResponse.textContent = 'Sending message...';
    
    try {
        const formData = new FormData(this);
        
        const response = await fetch('https://getform.io/f/apjjkova', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            formResponse.textContent = 'Message sent successfully!';
            this.reset(); // Clear the form
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Error:', error);
        formResponse.textContent = 'Failed to send message. Please try again.';
    }
});
