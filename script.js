// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Login form handling
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your authentication logic here
            alert('Login functionality will be implemented soon!');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add animation on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.timeline-item, .achievement-card');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if(position.top < window.innerHeight) {
            element.classList.add('animate');
        }
    });
});
// Add GSAP CDN to HTML file
document.addEventListener('DOMContentLoaded', function() {
    // Custom Cursor
    const cursor = document.createElement('div');
    const cursorDot = document.createElement('div');
    cursor.classList.add('custom-cursor');
    cursorDot.classList.add('cursor-dot');
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    document.addEventListener('mousemove', function(e) {
        gsap.to(cursor, {
            x: e.clientX - 10,
            y: e.clientY - 10,
            duration: 0.2
        });
        gsap.to(cursorDot, {
            x: e.clientX - 2,
            y: e.clientY - 2,
            duration: 0.1
        });
    });

    // GSAP Navbar Animation
    gsap.from('.navbar-brand', {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.nav-item', {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out'
    });

    // Hero Section Animation
    gsap.from('.hero-section .col-md-6:first-child', {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top center'
        }
    });

    gsap.from('.profile-image', {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top center'
        }
    });

    // Section Titles Animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: title,
                start: 'top bottom'
            }
        });
    });

    // Timeline Items Animation
    gsap.utils.toArray('.timeline-item').forEach(item => {
        gsap.from(item, {
            opacity: 0,
            x: -50,
            duration: 0.8,
            scrollTrigger: {
                trigger: item,
                start: 'top bottom'
            }
        });
    });

    // Achievement Cards Animation
    gsap.utils.toArray('.achievement-card').forEach(card => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            scrollTrigger: {
                trigger: card,
                start: 'top bottom'
            }
        });
    });

    // Contact Form Animation
    gsap.from('#contact-form', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '#contact',
            start: 'top center'
        }
    });

    // Hover Effects
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(cursor, {
                scale: 1.5,
                duration: 0.3
            });
        });
        link.addEventListener('mouseleave', () => {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.3
            });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Login form handling
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login functionality will be implemented soon!');
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: target,
                    ease: 'power3.inOut'
                });
            }
        });
    });
});