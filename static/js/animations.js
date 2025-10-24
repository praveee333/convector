// Scroll animations - Initialize when DOM is loaded and reinitialize on route changes
function initScrollAnimations() {
    // Initialize fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) * 1.2 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to handle scroll events
    function checkScroll() {
        fadeElements.forEach(element => {
            if (isInViewport(element)) {
                // Check for different animation types
                if (element.classList.contains('zoom-in')) {
                    element.style.opacity = '1';
                    element.style.transform = 'scale(1)';
                } else if (element.classList.contains('slide-in-left')) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateX(0)';
                } else if (element.classList.contains('slide-in-right')) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateX(0)';
                } else {
                    element.classList.add('visible');
                }
            }
        });
        
        // Handle animated icons
        handleAnimatedIcons();
        // Handle process steps
        handleProcessSteps();
    }
    
    // Initial check
    checkScroll();
    
    // Remove existing scroll listeners to avoid duplicates
    window.removeEventListener('scroll', checkScroll);
    
    // Listen for scroll events
    window.addEventListener('scroll', checkScroll);
    
    // Counter animation for stats
    initStatsAnimation();
    
    // Handle animated icons
    handleAnimatedIcons();
    // Handle process steps
    handleProcessSteps();
}

// Initialize stats animation
function initStatsAnimation() {
    const stats = document.querySelectorAll('.stat-number');
    let counted = false;
    
    function animateCounters() {
        if (counted) return;
        
        stats.forEach(stat => {
            const target = parseInt(stat.textContent);
            let count = 0;
            const duration = 2000; // in milliseconds
            const increment = target / (duration / 16); // 16ms per frame approx
            
            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    if (count > target) count = target;
                    stat.textContent = Math.round(count);
                    requestAnimationFrame(updateCount);
                }
            };
            
            updateCount();
        });
        
        counted = true;
    }
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) * 1.2 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Check if stats are in viewport
    function checkStats() {
        if (stats.length && isInViewport(stats[0])) {
            animateCounters();
        }
    }
    
    // Reset counted flag for new page loads
    counted = false;
    
    // Initial check and scroll listener for stats
    checkStats();
    window.addEventListener('scroll', checkStats);
}

// Handle animated icons that move from right to left with rotation and scaling
function handleAnimatedIcons() {
    const animatedIcons = document.querySelectorAll('.animated-icon');
    if (!animatedIcons.length) return;
    
    let animated = false;
    
    function checkIconsScroll() {
        if (animated) return;
        
        const section = document.querySelector('.animated-icons-section');
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;
        
        if (isVisible) {
            animatedIcons.forEach((icon, index) => {
                setTimeout(() => {
                    icon.classList.add('visible');
                }, index * 300); // Stagger the animation
            });
            animated = true;
        }
    }
    
    // Initial check and scroll listener for icons
    checkIconsScroll();
    window.addEventListener('scroll', checkIconsScroll);
}

// Handle process steps animations
function handleProcessSteps() {
    const processSteps = document.querySelectorAll('.process-step');
    if (!processSteps.length) return;
    
    let animated = false;
    
    function checkStepsScroll() {
        if (animated) return;
        
        const section = document.querySelector('.process');
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;
        
        if (isVisible) {
            processSteps.forEach((step, index) => {
                setTimeout(() => {
                    step.classList.add('visible');
                }, index * 200); // Stagger the animation
            });
            animated = true;
        }
    }
    
    // Initial check and scroll listener for steps
    checkStepsScroll();
    window.addEventListener('scroll', checkStepsScroll);
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// Export for router access
window.initScrollAnimations = initScrollAnimations;
window.initStatsAnimation = initStatsAnimation;
window.handleAnimatedIcons = handleAnimatedIcons;
window.handleProcessSteps = handleProcessSteps;
