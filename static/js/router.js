// JavaScript Router for E-Faws Tech Services Website
class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = '';
        this.app = document.getElementById('main-content');
        this.loading = document.getElementById('loading');
        
        // Bind methods to maintain context
        this.navigate = this.navigate.bind(this);
        this.handlePopState = this.handlePopState.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    // Add a route
    addRoute(path, component) {
        this.routes[path] = component;
    }

    // Initialize the router
    init() {
        // Add all routes
        this.addRoute('/', 'home');
        this.addRoute('/about', 'about');
        this.addRoute('/services', 'services');
        this.addRoute('/internship', 'internship');
        this.addRoute('/blog', 'blog');
        this.addRoute('/contact', 'contact');

        // Handle browser back/forward buttons
        window.addEventListener('popstate', this.handlePopState);

        // Handle link clicks
        document.addEventListener('click', this.handleLinkClick);

        // Load initial route
        this.navigate(window.location.pathname, false);
    }

    // Handle browser back/forward
    handlePopState(event) {
        this.navigate(window.location.pathname, false);
    }

    // Handle link clicks
    handleLinkClick(event) {
        const link = event.target.closest('[data-route]');
        if (link) {
            event.preventDefault();
            const route = link.getAttribute('data-route') || link.getAttribute('href');
            this.navigate(route);
        }
    }

    // Navigate to a route
    navigate(path, pushState = true) {
        // Show loading
        this.showLoading();

        // Normalize path
        const normalizedPath = path === '' ? '/' : path;

        // Check if route exists
        if (!this.routes[normalizedPath]) {
            this.navigate('/', false);
            return;
        }

        // Update browser URL
        if (pushState) {
            history.pushState(null, '', normalizedPath);
        }

        // Update current route
        this.currentRoute = normalizedPath;

        // Update page title
        this.updatePageTitle(normalizedPath);

        // Update active nav link
        this.updateActiveNavLink(normalizedPath);

        // Load component
        this.loadComponent(this.routes[normalizedPath]);
    }

    // Show loading indicator
    showLoading() {
        if (this.loading) {
            this.loading.classList.add('active');
        }
    }

    // Hide loading indicator
    hideLoading() {
        if (this.loading) {
            this.loading.classList.remove('active');
        }
    }

    // Update page title and meta tags based on route
    updatePageTitle(path) {
        const pageData = {
            '/': {
                title: 'E-Faws Tech Services - AI Solutions for Small Business | India\'s #1 AI Partner',
                description: 'Transform your business with AI! E-Faws Tech Services offers WhatsApp AI assistants, business automation, and 150+ AI tools. Serving 1000+ businesses in Coimbatore & Bangalore.',
                keywords: 'AI solutions India, WhatsApp AI assistant, business automation, AI tools small business, artificial intelligence services, Coimbatore AI company',
                canonical: 'https://efawstech.com/',
                ogTitle: 'E-Faws Tech Services - AI Solutions for Small Business | India\'s #1 AI Partner',
                ogDescription: 'Transform your business with AI! WhatsApp AI assistants, business automation, and 150+ AI tools. Serving 1000+ businesses.',
                ogImage: 'https://efawstech.com/static/images/Services/ai_img.png'
            },
            '/about': {
                title: 'About E-Faws Tech Services - Leading AI Solutions Company in India',
                description: 'Learn about E-Faws Tech Services, India\'s leading AI solutions provider. Founded in Coimbatore, serving 1000+ businesses with cutting-edge AI technology and automation.',
                keywords: 'about E-Faws, AI company India, artificial intelligence services, Coimbatore tech company, AI solutions provider, business automation experts',
                canonical: 'https://efawstech.com/about',
                ogTitle: 'About E-Faws Tech Services - Leading AI Solutions Company',
                ogDescription: 'India\'s leading AI solutions provider serving 1000+ businesses with cutting-edge AI technology and automation.',
                ogImage: 'https://efawstech.com/static/images/team-member2.png'
            },
            '/services': {
                title: 'AI Services & Solutions - WhatsApp AI, Automation & Digital Marketing',
                description: 'Explore E-Faws Tech Services comprehensive AI solutions: WhatsApp AI assistants, business automation, digital marketing, and 150+ AI tools for business growth.',
                keywords: 'AI services, WhatsApp AI assistant, business automation services, digital marketing AI, AI tools, artificial intelligence solutions, automation services',
                canonical: 'https://efawstech.com/services',
                ogTitle: 'AI Services & Solutions - WhatsApp AI, Automation & Digital Marketing',
                ogDescription: 'Comprehensive AI solutions: WhatsApp AI assistants, business automation, digital marketing, and 150+ AI tools for business growth.',
                ogImage: 'https://efawstech.com/static/images/Services/ai_img.png'
            },
            '/internship': {
                title: 'AI Internship Program - Learn Artificial Intelligence at E-Faws Tech',
                description: 'Join E-Faws Tech Services AI internship program. Learn practical AI skills, work on real projects, and kickstart your career in artificial intelligence and automation.',
                keywords: 'AI internship, artificial intelligence training, AI learning program, tech internship India, AI career, machine learning internship',
                canonical: 'https://efawstech.com/internship',
                ogTitle: 'AI Internship Program - Learn Artificial Intelligence',
                ogDescription: 'Join our AI internship program. Learn practical AI skills, work on real projects, and kickstart your career in artificial intelligence.',
                ogImage: 'https://efawstech.com/static/images/Services/ai_img.png'
            },
            '/blog': {
                title: 'AI Insights & Resources - Latest Trends in Artificial Intelligence',
                description: 'Stay updated with latest AI trends, insights, and resources. Expert articles on artificial intelligence, business automation, and digital transformation.',
                keywords: 'AI blog, artificial intelligence insights, AI trends, business automation tips, AI resources, machine learning articles, AI news',
                canonical: 'https://efawstech.com/blog',
                ogTitle: 'AI Insights & Resources - Latest Trends in Artificial Intelligence',
                ogDescription: 'Stay updated with latest AI trends, insights, and resources. Expert articles on artificial intelligence and business automation.',
                ogImage: 'https://efawstech.com/static/images/Services/aibook.jpg'
            },
            '/contact': {
                title: 'Contact E-Faws Tech Services - Get Your AI Solutions Today',
                description: 'Contact E-Faws Tech Services for AI solutions. Located in Coimbatore & Bangalore. Call +91-63802-13834 or email efawstech@gmail.com for business automation.',
                keywords: 'contact E-Faws, AI solutions contact, Coimbatore AI company contact, Bangalore AI services, AI consultation, business automation contact',
                canonical: 'https://efawstech.com/contact',
                ogTitle: 'Contact E-Faws Tech Services - Get Your AI Solutions Today',
                ogDescription: 'Contact us for AI solutions. Located in Coimbatore & Bangalore. Expert AI consultation and business automation services.',
                ogImage: 'https://efawstech.com/static/images/logo.png'
            }
        };
        
        const data = pageData[path] || pageData['/'];
        
        // Update document title
        document.title = data.title;
        
        // Update meta description
        this.updateMetaTag('name', 'description', data.description);
        this.updateMetaTag('name', 'keywords', data.keywords);
        
        // Update Open Graph meta tags
        this.updateMetaTag('property', 'og:title', data.ogTitle);
        this.updateMetaTag('property', 'og:description', data.ogDescription);
        this.updateMetaTag('property', 'og:image', data.ogImage);
        this.updateMetaTag('property', 'og:url', data.canonical);
        
        // Update Twitter meta tags
        this.updateMetaTag('property', 'twitter:title', data.ogTitle);
        this.updateMetaTag('property', 'twitter:description', data.ogDescription);
        this.updateMetaTag('property', 'twitter:image', data.ogImage);
        this.updateMetaTag('property', 'twitter:url', data.canonical);
        
        // Update canonical URL
        this.updateCanonicalUrl(data.canonical);
    }
    
    // Helper method to update meta tags
    updateMetaTag(attribute, name, content) {
        let element = document.querySelector(`meta[${attribute}="${name}"]`);
        if (element) {
            element.setAttribute('content', content);
        } else {
            element = document.createElement('meta');
            element.setAttribute(attribute, name);
            element.setAttribute('content', content);
            document.head.appendChild(element);
        }
    }
    
    // Helper method to update canonical URL
    updateCanonicalUrl(url) {
        let canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', url);
        } else {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            canonical.setAttribute('href', url);
            document.head.appendChild(canonical);
        }
    }

    // Update active navigation link
    updateActiveNavLink(path) {
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to current route link
        const activeLink = document.querySelector(`[data-route="${path}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Load component content
    loadComponent(componentName) {
        // Check if templates are available
        if (!window.Templates || !window.Templates[componentName]) {
            console.error(`Template '${componentName}' not found`);
            this.hideLoading();
            return;
        }

        // Simulate loading delay for better UX
        setTimeout(() => {
            try {
                // Get template content
                const content = window.Templates[componentName]();
                
                // Update app content
                this.app.innerHTML = content;

                // Initialize component-specific functionality
                this.initializeComponentFeatures(componentName);

                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });

                // Hide loading
                this.hideLoading();

                // Trigger any animations
                this.triggerAnimations();
                
                // Track page view with analytics
                if (window.analyticsManager) {
                    window.analyticsManager.trackPageView(this.currentRoute, document.title);
                }

            } catch (error) {
                console.error('Error loading component:', error);
                this.hideLoading();
            }
        }, 300);
    }

    // Initialize component-specific features
    initializeComponentFeatures(componentName) {
        switch (componentName) {
            case 'home':
                this.initializeHomeFeatures();
                break;
            case 'services':
                this.initializeServicesFeatures();
                break;
            case 'blog':
                this.initializeBlogFeatures();
                break;
            case 'contact':
                this.initializeContactFeatures();
                break;
            case 'internship':
                this.initializeInternshipFeatures();
                break;
        }
    }

    // Initialize home page features
    initializeHomeFeatures() {
        // Service tabs functionality
        this.initializeServiceTabs();
        
        // Logo slider functionality
        this.initializeLogoSlider();
        
        // Popup modal functionality
        this.initializePopupModal();
        
        // PDF modal functionality
        this.initializePdfModal();
    }

    // Initialize services page features
    initializeServicesFeatures() {
        this.initializeServiceTabs();
    }

    // Initialize blog page features
    initializeBlogFeatures() {
        // Newsletter form functionality
        const newsletterForm = document.getElementById("newsletter-form");
        if (newsletterForm) {
            newsletterForm.addEventListener("submit", async function (e) {
                e.preventDefault();
                const phone = this.phone.value;

                if (!/^\d{10}$/.test(phone)) {
                    alert("⚠️ Please enter a valid 10-digit phone number.");
                    return;
                }

                const response = await fetch("https://formspree.io/f/xldwwvdr", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ phone: phone })
                });

                if (response.ok) {
                    alert("✅ Thanks for subscribing!");
                    this.reset();
                } else {
                    alert("❌ Something went wrong. Please try again.");
                }
            });
        }
    }

    // Initialize contact page features
    initializeContactFeatures() {
        // Contact form is already handled by Formspree
        // No additional JavaScript needed for the contact form
    }

    // Initialize internship page features
    initializeInternshipFeatures() {
        // FAQ functionality
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const faqItem = button.parentElement;

                // Close other open items
                document.querySelectorAll('.faq-item').forEach(item => {
                    if (item !== faqItem) {
                        item.classList.remove('active');
                    }
                });

                // Toggle current item
                faqItem.classList.toggle('active');
            });
        });
    }

    // Initialize service tabs
    initializeServiceTabs() {
        const tabs = document.querySelectorAll(".tab-btn");
        const cards = document.querySelectorAll(".service-card");

        if (tabs.length === 0) return;

        function filterServices(filter) {
            cards.forEach(card => {
                if (filter === "all" || card.getAttribute("data-category") === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        }

        // Default active = AI
        filterServices("ai");

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                tabs.forEach(t => t.classList.remove("active"));
                tab.classList.add("active");

                const filter = tab.getAttribute("data-filter");
                filterServices(filter);
            });
        });
    }

    // Initialize logo slider
    initializeLogoSlider() {
        let index = 0;
        const track = document.querySelector(".logo-track");
        const logos = document.querySelectorAll(".logo-track img");
        
        if (!track || logos.length === 0) return;
        
        const total = logos.length;

        function updateSlider() {
            track.style.transform = `translateX(-${index * logos[0].clientWidth}px)`;
        }

        window.nextLogo = function() {
            index = (index + 1) % total;
            updateSlider();
        };

        window.prevLogo = function() {
            index = (index - 1 + total) % total;
            updateSlider();
        };

        // Auto-slide every 3 seconds
        let autoSlide = setInterval(window.nextLogo, 3000);

        // Pause on hover
        track.addEventListener("mouseenter", () => clearInterval(autoSlide));

        // Resume on mouse leave
        track.addEventListener("mouseleave", () => {
            autoSlide = setInterval(window.nextLogo, 3000);
        });
    }

    // Initialize popup modal
    initializePopupModal() {
        const cards = document.querySelectorAll(".service-card");
        const popupOverlay = document.getElementById("popupOverlay");
        const popupContent = document.getElementById("popupContent");
        const popupClose = document.getElementById("popupClose");
        const confettiCanvas = document.getElementById("confettiCanvas");

        if (!popupOverlay || cards.length === 0) return;

        const ctx = confettiCanvas.getContext("2d");
        let confetti = [];
        let confettiAnimation;

        function resizeCanvas() {
            confettiCanvas.width = popupContent.offsetWidth;
            confettiCanvas.height = popupContent.offsetHeight;
        }

        function createConfetti() {
            confetti = [];
            for (let i = 0; i < 80; i++) {
                let fromLeft = i % 2 === 0;
                confetti.push({
                    x: fromLeft ? 0 : confettiCanvas.width,
                    y: Math.random() * confettiCanvas.height,
                    w: 6,
                    h: 10,
                    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
                    speedX: fromLeft ? (Math.random() * 8 + 6) : -(Math.random() * 8 + 6),
                    speedY: (Math.random() - 0.5) * 6
                });
            }
        }

        function drawConfetti() {
            ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
            confetti.forEach((c) => {
                ctx.fillStyle = c.color;
                ctx.fillRect(c.x, c.y, c.w, c.h);
                c.x += c.speedX;
                c.y += c.speedY;
            });
            confettiAnimation = requestAnimationFrame(drawConfetti);
        }

        function startConfetti() {
            resizeCanvas();
            createConfetti();
            drawConfetti();
            setTimeout(() => cancelAnimationFrame(confettiAnimation), 1000);
        }

        cards.forEach(card => {
            card.addEventListener("click", () => {
                let clonedCard = card.cloneNode(true);
                popupContent.querySelectorAll(".service-card").forEach(e => e.remove());
                popupContent.appendChild(clonedCard);
                popupOverlay.classList.add("active");
                startConfetti();
            });
        });

        popupClose.addEventListener("click", () => {
            popupOverlay.classList.remove("active");
        });

        popupOverlay.addEventListener("click", (e) => {
            if (e.target === popupOverlay) {
                popupOverlay.classList.remove("active");
            }
        });
    }

    // Initialize PDF modal
    initializePdfModal() {
        const modal = document.getElementById("pdfModal");
        const openBtn = document.getElementById("openPdfModal");
        const closeBtn = document.getElementById("closePdfModal");

        if (!modal || !openBtn || !closeBtn) return;

        openBtn.addEventListener("click", function () {
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
        });

        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        });

        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });
    }

    // Trigger animations for fade-in elements
    triggerAnimations() {
        const fadeElements = document.querySelectorAll('.fade-in');
        
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) * 1.2 &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        function checkScroll() {
            fadeElements.forEach(element => {
                if (isInViewport(element)) {
                    element.classList.add('visible');
                }
            });
        }
        
        // Initial check
        checkScroll();
        
        // Listen for scroll events
        window.addEventListener('scroll', checkScroll);
    }
}

// Create global router instance
window.Router = new Router();

// Export for modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Router;
}