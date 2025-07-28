        // Mobile Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Honeypot check
            if (document.getElementById('honeypot').value !== '') {
                return;
            }
            
            // Form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            if (name && email && service && message) {
                // In a real implementation, you would send this data to a server
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });

        // Project filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                // Filter projects based on category
                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.style.display = 'block';
                        // Trigger animation again when showing
                        card.classList.add('animate');
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Scroll animations
        function animateOnScroll() {
            const sections = document.querySelectorAll('section');
            const elements = document.querySelectorAll('.skills-category, .certifications, .project-card, .service-card, .about-text, .timeline, .projects, .services, .contact');
            
            // Section animations
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (sectionTop < windowHeight * 0.75) {
                    section.classList.add('animate');
                }
            });
            
            // Element animations
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight * 0.85) {
                    element.classList.add('animate');
                }
            });
        }
        
        // Initial check on page load
        window.addEventListener('load', animateOnScroll);
        
        // Check on scroll
        window.addEventListener('scroll', animateOnScroll);

        // Skill item hover effect
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const dots = item.querySelectorAll('.proficiency-dot');
                dots.forEach(dot => {
                    if (!dot.classList.contains('active')) {
                        dot.style.backgroundColor = 'rgba(0, 238, 255, 0.4)';
                    }
                });
            });
            
            item.addEventListener('mouseleave', () => {
                const dots = item.querySelectorAll('.proficiency-dot');
                dots.forEach(dot => {
                    if (!dot.classList.contains('active')) {
                        dot.style.backgroundColor = 'rgba(0, 238, 255, 0.2)';
                    }
                });
            });
        });