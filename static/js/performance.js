// Performance Optimization Script for E-Faws Tech Services
// Optimizes Core Web Vitals: LCP, FID, CLS

class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Initialize all performance optimizations
        this.setupLazyLoading();
        this.optimizeImages();
        this.setupResourcePreloading();
        this.setupCriticalResourceHints();
        this.measureWebVitals();
        this.setupServiceWorker();
    }

    // Lazy Loading Implementation
    setupLazyLoading() {
        // Use Intersection Observer for better performance
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        
                        // Replace data-src with src
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        
                        // Replace data-srcset with srcset
                        if (img.dataset.srcset) {
                            img.srcset = img.dataset.srcset;
                            img.removeAttribute('data-srcset');
                        }
                        
                        img.classList.remove('lazy');
                        img.classList.add('loaded');
                        
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });

            // Observe all lazy images
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Image Optimization
    optimizeImages() {
        // Add WebP support detection
        const supportsWebP = () => {
            return new Promise(resolve => {
                const webP = new Image();
                webP.onload = webP.onerror = () => resolve(webP.height === 2);
                webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
            });
        };

        supportsWebP().then(supported => {
            if (supported) {
                document.body.classList.add('webp-supported');
            }
        });

        // Optimize image loading based on connection speed
        if ('connection' in navigator) {
            const connection = navigator.connection;
            if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
                document.body.classList.add('slow-connection');
            }
        }
    }

    // Preload critical resources
    setupResourcePreloading() {
        // Preload critical CSS
        const criticalCSS = document.createElement('link');
        criticalCSS.rel = 'preload';
        criticalCSS.href = 'static/css/style.css';
        criticalCSS.as = 'style';
        criticalCSS.onload = function() { this.rel = 'stylesheet'; };
        document.head.appendChild(criticalCSS);

        // Preload hero image
        const heroImg = document.createElement('link');
        heroImg.rel = 'preload';
        heroImg.href = 'static/images/Services/aiimg.png';
        heroImg.as = 'image';
        document.head.appendChild(heroImg);

        // Preload fonts
        const font = document.createElement('link');
        font.rel = 'preload';
        font.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
        font.as = 'style';
        font.crossOrigin = 'anonymous';
        document.head.appendChild(font);
    }

    // Setup critical resource hints
    setupCriticalResourceHints() {
        // Add resource hints for external domains
        const resourceHints = [
            { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
            { rel: 'dns-prefetch', href: '//cdnjs.cloudflare.com' },
            { rel: 'dns-prefetch', href: '//formspree.io' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
        ];

        resourceHints.forEach(hint => {
            const link = document.createElement('link');
            link.rel = hint.rel;
            link.href = hint.href;
            if (hint.crossorigin) link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
        });
    }

    // Measure Web Vitals
    measureWebVitals() {
        // LCP (Largest Contentful Paint)
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            
            // Send to analytics (replace with your analytics)
            console.log('LCP:', lastEntry.startTime);
            
            // Send to Google Analytics if available
            if (typeof gtag !== 'undefined') {
                gtag('event', 'LCP', {
                    value: Math.round(lastEntry.startTime),
                    metric_id: 'LCP'
                });
            }
        });

        observer.observe({ entryTypes: ['largest-contentful-paint'] });

        // FID (First Input Delay)
        const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach(entry => {
                console.log('FID:', entry.processingStart - entry.startTime);
                
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'FID', {
                        value: Math.round(entry.processingStart - entry.startTime),
                        metric_id: 'FID'
                    });
                }
            });
        });

        fidObserver.observe({ entryTypes: ['first-input'] });

        // CLS (Cumulative Layout Shift)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach(entry => {
                if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                }
            });
            
            console.log('CLS:', clsValue);
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'CLS', {
                    value: Math.round(clsValue * 1000),
                    metric_id: 'CLS'
                });
            }
        });

        clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Setup Service Worker for caching
    setupServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('SW registered: ', registration);
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }

    // Optimize third-party scripts
    optimizeThirdPartyScripts() {
        // Defer non-critical scripts
        const scripts = document.querySelectorAll('script[src]');
        scripts.forEach(script => {
            if (!script.hasAttribute('async') && !script.hasAttribute('defer')) {
                script.defer = true;
            }
        });
    }

    // Reduce DOM complexity
    optimizeDOM() {
        // Remove unused elements after page load
        window.addEventListener('load', () => {
            // Remove loading spinners, placeholders, etc.
            document.querySelectorAll('.loading, .placeholder').forEach(el => {
                if (el.style.display === 'none') {
                    el.remove();
                }
            });
        });
    }
}

// Initialize performance optimizer
document.addEventListener('DOMContentLoaded', () => {
    new PerformanceOptimizer();
});

// Export for router use
window.PerformanceOptimizer = PerformanceOptimizer;