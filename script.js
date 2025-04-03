// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
      const preloader = document.querySelector('.preloader');
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    });
  
    // Initialize AOS (Animate on Scroll)
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursorFollower.style.left = e.clientX + 'px';
      cursorFollower.style.top = e.clientY + 'px';
      
      if (!cursor.style.opacity) {
        setTimeout(() => {
          cursor.style.opacity = '1';
          cursorFollower.style.opacity = '1';
        }, 500);
      }
    });
    
    document.addEventListener('mouseout', function() {
      cursor.style.opacity = '0';
      cursorFollower.style.opacity = '0';
    });
    
    // Add hover effect to links, buttons, etc.
    const hoverElements = document.querySelectorAll('a, button, .menu-toggle, .tool-item, .social-link');
    
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', function() {
        cursorFollower.style.transform = 'scale(1.5)';
        cursorFollower.style.backgroundColor = 'rgba(123, 104, 238, 0.4)';
      });
      
      element.addEventListener('mouseleave', function() {
        cursorFollower.style.transform = 'scale(1)';
        cursorFollower.style.backgroundColor = 'rgba(123, 104, 238, 0.2)';
      });
    });
    
    // Sticky Navigation
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
      
      // Back to top button
      const backToTop = document.querySelector('.back-to-top');
      if (window.scrollY > 300) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    });
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // Animate hamburger menu
      const bars = document.querySelectorAll('.bar');
      if (menuToggle.classList.contains('active')) {
        bars[0].style.transform = 'translateY(9px) rotate(45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'translateY(-9px) rotate(-45deg)';
      } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
      }
    });
    
    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        
        // Reset hamburger menu
        const bars = document.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
        
        // Set active nav link
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      });
    });
    
    // Auto-update active nav link based on scroll position
    window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100; // Add offset
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
              link.classList.add('active');
            }
          });
        }
      });
    });
    
    // Projects Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Set active filter button
        filterBtns.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        projectItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
            
            // Add animation
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 200);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            // Hide after animation
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (name && email && subject && message) {
          // In a real scenario, you would send this data to a server
          alert('Thank you for your message! I will get back to you soon.');
          contactForm.reset();
        } else {
          alert('Please fill in all fields.');
        }
      });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for navbar
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Animate skill bars on scroll
    const skillSection = document.querySelector('.skills');
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkills = () => {
      skillBars.forEach(bar => {
        const width = bar.style.width;
        // Reset width before animation
        bar.style.width = '0';
        
        // Animate to actual width
        setTimeout(() => {
          bar.style.width = width;
        }, 200);
      });
    };
    
    // Check if skills section is in viewport
    const isInViewport = el => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    };
    
    // Animate skills when scrolled into view
    let skillsAnimated = false;
    window.addEventListener('scroll', () => {
      if (!skillsAnimated && isInViewport(skillSection)) {
        animateSkills();
        skillsAnimated = true;
      }
    });
    
    // Initialize animation if skills section is already visible on page load
    if (isInViewport(skillSection)) {
      animateSkills();
      skillsAnimated = true;
    }
    
    // Back to top button functionality
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
    
    // Parallax effect on hero section
    const heroSection = document.querySelector('.hero');
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      if (scrollPosition < heroSection.clientHeight) {
        heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
      }
    });
    
    // Text typing animation for hero section (optional)
    const createTypingAnimation = (element, texts, delay = 100, pauseDelay = 1000) => {
      let textIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let isPaused = false;
      let pauseTimer = null;
      
      const type = () => {
        const currentText = texts[textIndex];
        
        if (isPaused) {
          return;
        }
        
        if (isDeleting) {
          element.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
        } else {
          element.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
        }
        
        // Check if word is complete
        if (!isDeleting && charIndex === currentText.length) {
          // Set pause timer before deleting
          isPaused = true;
          pauseTimer = setTimeout(() => {
            isPaused = false;
            isDeleting = true;
            clearTimeout(pauseTimer);
          }, pauseDelay);
        }
        
        // Check if word is deleted
        if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }
        
        // Set typing speed
        let typingSpeed = isDeleting ? delay / 2 : delay;
        setTimeout(type, typingSpeed);
      };
      
      // Start typing
      type();
    };
    
    // Initialize typing animation if element exists
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
      const typingTexts = typingElement.dataset.texts ? JSON.parse(typingElement.dataset.texts) : ['Web Developer', 'UI/UX Designer', 'Freelancer'];
      createTypingAnimation(typingElement, typingTexts);
    }
    
    // Tilt effect for project cards (optional)
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      card.addEventListener('mousemove', function(e) {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        
        const mouseX = e.clientX - cardCenterX;
        const mouseY = e.clientY - cardCenterY;
        
        const rotateX = mouseY * -0.05;
        const rotateY = mouseX * 0.05;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      
      card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      });
    });
    
    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
      let currentSlide = 0;
      const slides = testimonialSlider.querySelectorAll('.testimonial-item');
      const totalSlides = slides.length;
      const nextBtn = testimonialSlider.querySelector('.next-btn');
      const prevBtn = testimonialSlider.querySelector('.prev-btn');
      
      const updateSlider = () => {
        slides.forEach((slide, index) => {
          if (index === currentSlide) {
            slide.style.opacity = '1';
            slide.style.transform = 'translateX(0)';
          } else if (index < currentSlide) {
            slide.style.opacity = '0';
            slide.style.transform = 'translateX(-100%)';
          } else {
            slide.style.opacity = '0';
            slide.style.transform = 'translateX(100%)';
          }
        });
      };
      
      // Initialize slider
      updateSlider();
      
      // Next button action
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          currentSlide = (currentSlide + 1) % totalSlides;
          updateSlider();
        });
      }
      
      // Previous button action
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
          updateSlider();
        });
      }
      
      // Auto slide (optional)
      let slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
      }, 5000);
      
      // Pause auto slide on hover
      testimonialSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
      });
      
      testimonialSlider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
          currentSlide = (currentSlide + 1) % totalSlides;
          updateSlider();
        }, 5000);
      });
    }
    
    // Theme toggle (light/dark mode)
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      // Check for saved user preference or system preference
      const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const savedTheme = localStorage.getItem('theme');
      
      // Set initial theme
      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        if (savedTheme === 'dark') {
          themeToggle.classList.add('active');
        }
      } else if (userPrefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.classList.add('active');
      }
      
      // Toggle theme on click
      themeToggle.addEventListener('click', () => {
        themeToggle.classList.toggle('active');
        
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
      });
    }
  });