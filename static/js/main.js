// Navigation is now handled by the unified hamburger system in index.html
// This function is kept for compatibility but hamburger menu is handled elsewhere
function initMobileNav() {
    console.log('📱 Mobile navigation is handled by the unified hamburger system');
    console.log('🔧 See index.html for the main hamburger implementation');
}

// Initialize mobile navigation when DOM is loaded - Now a no-op
document.addEventListener('DOMContentLoaded', initMobileNav);

// Services Tab Functionality - Will be called by router
function initServiceTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const serviceCards = document.querySelectorAll('.service-card');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                tabBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Filter services
                const filter = btn.getAttribute('data-filter');
                
                serviceCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
}

// Form validation utilities
function showError(input, message) {
    const formGroup = input.parentElement;
    const errorDiv = formGroup.querySelector('.error-message') || document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = 'red';
    errorDiv.style.fontSize = '0.9rem';
    errorDiv.style.marginTop = '5px';
    errorDiv.textContent = message;
    
    if (!formGroup.querySelector('.error-message')) {
        formGroup.appendChild(errorDiv);
    }
    
    input.style.borderColor = 'red';
}

function clearError(input) {
    const formGroup = input.parentElement;
    const errorDiv = formGroup.querySelector('.error-message');
    if (errorDiv) {
        formGroup.removeChild(errorDiv);
    }
    input.style.borderColor = '';
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Smooth scrolling for anchor links - Will be reinitialized on each page load
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// FAQ Accordion Functionality - Will be called by router for internship page
function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const isActive = question.classList.contains('active');
                
                // Close all FAQs
                document.querySelectorAll('.faq-question').forEach(q => {
                    q.classList.remove('active');
                });
                
                document.querySelectorAll('.faq-answer').forEach(a => {
                    a.classList.remove('active');
                });
                
                // Open clicked FAQ if it wasn't already active
                if (!isActive) {
                    question.classList.add('active');
                    answer.classList.add('active');
                }
            });
        });
    }
}

// Global function exports for router access
window.initServiceTabs = initServiceTabs;
window.initSmoothScrolling = initSmoothScrolling;
window.initFAQAccordion = initFAQAccordion;
window.showError = showError;
window.clearError = clearError;
window.isValidEmail = isValidEmail;