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
                element.classList.add('visible');
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Remove existing scroll listeners to avoid duplicates
    window.removeEventListener('scroll', checkScroll);
    
    // Listen for scroll events
    window.addEventListener('scroll', checkScroll);
    
    // Counter animation for stats
    initStatsAnimation();
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

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// Export for router access
window.initScrollAnimations = initScrollAnimations;
window.initStatsAnimation = initStatsAnimation;