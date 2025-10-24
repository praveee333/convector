// Advanced Analytics & Tracking System for E-Faws Tech Services
// Supports Google Analytics 4, Facebook Pixel, LinkedIn Insight Tag, and custom tracking

class AnalyticsManager {
    constructor() {
        this.trackingId = 'G-XXXXXXXXXX'; // Replace with your GA4 tracking ID
        this.fbPixelId = 'XXXXXXXXXXXXXXXXX'; // Replace with your Facebook Pixel ID
        this.linkedInPartnerId = 'XXXXXX'; // Replace with your LinkedIn Partner ID
        this.initialized = false;
        
        this.init();
    }

    // Initialize all tracking systems
    init() {
        // Initialize Google Analytics 4
        this.initGA4();
        
        // Initialize Facebook Pixel
        this.initFacebookPixel();
        
        // Initialize LinkedIn Insight Tag
        this.initLinkedInInsight();
        
        // Initialize custom event tracking
        this.initCustomTracking();
        
        // Track initial page view
        this.trackPageView();
        
        // Set up scroll tracking
        this.initScrollTracking();
        
        // Set up interaction tracking
        this.initInteractionTracking();
        
        this.initialized = true;
    }

    // Google Analytics 4 Implementation
    initGA4() {
        // Load gtag library
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${this.trackingId}`;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        
        gtag('js', new Date());
        gtag('config', this.trackingId, {
            // Enhanced measurement
            send_page_view: false, // We'll handle this manually for SPA
            page_title: document.title,
            page_location: window.location.href,
            
            // Enhanced ecommerce
            allow_enhanced_conversions: true,
            
            // Custom parameters
            custom_map: {
                'custom_parameter_1': 'business_type',
                'custom_parameter_2': 'user_journey_stage'
            }
        });

        console.log('Google Analytics 4 initialized');
    }

    // Facebook Pixel Implementation
    initFacebookPixel() {
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', this.fbPixelId);
        fbq('track', 'PageView');

        console.log('Facebook Pixel initialized');
    }

    // LinkedIn Insight Tag Implementation
    initLinkedInInsight() {
        _linkedin_partner_id = this.linkedInPartnerId;
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        
        (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);})(window.lintrk);

        console.log('LinkedIn Insight Tag initialized');
    }

    // Custom tracking implementation
    initCustomTracking() {
        // Track user interactions
        this.setupFormTracking();
        this.setupDownloadTracking();
        this.setupExternalLinkTracking();
        this.setupVideoTracking();
    }

    // Track page views for SPA
    trackPageView(path = window.location.pathname, title = document.title) {
        if (!this.initialized) return;

        // Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('config', this.trackingId, {
                page_path: path,
                page_title: title,
                page_location: window.location.href
            });
        }

        // Facebook Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', 'PageView');
        }

        // LinkedIn
        if (typeof lintrk !== 'undefined') {
            lintrk('track', { conversion_id: 'PageView' });
        }

        // Custom analytics
        this.trackCustomEvent('page_view', {
            page_path: path,
            page_title: title,
            timestamp: new Date().toISOString(),
            user_agent: navigator.userAgent,
            referrer: document.referrer
        });

        console.log('Page view tracked:', path);
    }

    // Track custom events
    trackEvent(eventName, eventData = {}) {
        if (!this.initialized) return;

        // Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                event_category: eventData.category || 'engagement',
                event_label: eventData.label,
                value: eventData.value,
                custom_parameter_1: eventData.business_type,
                custom_parameter_2: eventData.user_journey_stage
            });
        }

        // Facebook Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', eventName, eventData);
        }

        // LinkedIn
        if (typeof lintrk !== 'undefined') {
            lintrk('track', { conversion_id: eventName });
        }

        console.log('Event tracked:', eventName, eventData);
    }

    // Form tracking
    setupFormTracking() {
        document.addEventListener('submit', (e) => {
            const form = e.target;
            const formName = form.getAttribute('name') || form.getAttribute('id') || 'unnamed_form';
            
            this.trackEvent('form_submit', {
                category: 'form',
                label: formName,
                form_id: form.id,
                form_action: form.action
            });

            // Track specific form types
            if (formName.includes('contact')) {
                this.trackEvent('contact_form_submit', {
                    category: 'lead_generation',
                    label: 'contact_form'
                });
            } else if (formName.includes('newsletter')) {
                this.trackEvent('newsletter_signup', {
                    category: 'engagement',
                    label: 'newsletter'
                });
            }
        });
    }

    // Download tracking
    setupDownloadTracking() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && link.href) {
                const url = new URL(link.href, window.location.origin);
                const fileExtension = url.pathname.split('.').pop().toLowerCase();
                
                if (['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'zip', 'rar'].includes(fileExtension)) {
                    this.trackEvent('file_download', {
                        category: 'download',
                        label: url.pathname,
                        file_type: fileExtension,
                        file_name: url.pathname.split('/').pop()
                    });
                }
            }
        });
    }

    // External link tracking
    setupExternalLinkTracking() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && link.href) {
                const url = new URL(link.href, window.location.origin);
                
                if (url.hostname !== window.location.hostname) {
                    this.trackEvent('external_link_click', {
                        category: 'outbound',
                        label: url.hostname,
                        destination: url.href
                    });
                }
            }
        });
    }

    // Video tracking
    setupVideoTracking() {
        document.addEventListener('play', (e) => {
            if (e.target.tagName === 'VIDEO') {
                this.trackEvent('video_play', {
                    category: 'media',
                    label: e.target.src || 'embedded_video'
                });
            }
        }, true);

        document.addEventListener('ended', (e) => {
            if (e.target.tagName === 'VIDEO') {
                this.trackEvent('video_complete', {
                    category: 'media',
                    label: e.target.src || 'embedded_video'
                });
            }
        }, true);
    }

    // Scroll tracking
    initScrollTracking() {
        let scrollDepths = [25, 50, 75, 90];
        let triggeredDepths = [];

        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            
            scrollDepths.forEach(depth => {
                if (scrollPercent >= depth && !triggeredDepths.includes(depth)) {
                    triggeredDepths.push(depth);
                    this.trackEvent('scroll_depth', {
                        category: 'engagement',
                        label: `${depth}%`,
                        value: depth
                    });
                }
            });
        });
    }

    // Interaction tracking
    initInteractionTracking() {
        // Track button clicks
        document.addEventListener('click', (e) => {
            const button = e.target.closest('button, .btn, [role="button"]');
            if (button) {
                const buttonText = button.textContent.trim();
                const buttonId = button.id || 'unnamed_button';
                
                this.trackEvent('button_click', {
                    category: 'engagement',
                    label: buttonText,
                    button_id: buttonId
                });
            }
        });

        // Track CTA interactions
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && link.classList.contains('btn')) {
                this.trackEvent('cta_click', {
                    category: 'conversion',
                    label: link.textContent.trim(),
                    destination: link.href
                });
            }
        });
    }

    // Enhanced conversion tracking
    trackConversion(conversionName, conversionData = {}) {
        // Google Analytics Enhanced Conversions
        if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
                send_to: `${this.trackingId}/${conversionName}`,
                value: conversionData.value,
                currency: conversionData.currency || 'INR',
                enhanced_conversion_data: {
                    email: conversionData.email,
                    phone_number: conversionData.phone,
                    first_name: conversionData.firstName,
                    last_name: conversionData.lastName
                }
            });
        }

        // Facebook Conversion
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead', {
                value: conversionData.value,
                currency: conversionData.currency || 'INR',
                content_name: conversionName
            });
        }

        console.log('Conversion tracked:', conversionName, conversionData);
    }

    // Custom analytics for business insights
    trackCustomEvent(eventName, eventData) {
        // Send to custom analytics endpoint (implement your own)
        const customEvent = {
            event: eventName,
            data: eventData,
            timestamp: new Date().toISOString(),
            session_id: this.getSessionId(),
            user_id: this.getUserId()
        };

        // Example: Send to your custom analytics API
        // fetch('/api/analytics', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(customEvent)
        // });

        console.log('Custom event:', customEvent);
    }

    // Generate session ID
    getSessionId() {
        let sessionId = sessionStorage.getItem('analytics_session_id');
        if (!sessionId) {
            sessionId = Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            sessionStorage.setItem('analytics_session_id', sessionId);
        }
        return sessionId;
    }

    // Generate user ID
    getUserId() {
        let userId = localStorage.getItem('analytics_user_id');
        if (!userId) {
            userId = Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('analytics_user_id', userId);
        }
        return userId;
    }

    // Track user journey
    trackUserJourney(stage) {
        this.trackEvent('user_journey', {
            category: 'journey',
            label: stage,
            user_journey_stage: stage
        });
    }

    // Heat map tracking (for tools like Hotjar)
    initHeatmapTracking() {
        // Hotjar Tracking Code
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6}; // Replace YOUR_HOTJAR_ID
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    }
}

// Initialize analytics when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.analyticsManager = new AnalyticsManager();
});

// Export for global use
window.AnalyticsManager = AnalyticsManager;