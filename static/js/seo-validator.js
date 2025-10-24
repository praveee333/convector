// SEO Validation & Testing Script for E-Faws Tech Services
// Run this script to validate all SEO implementations

class SEOValidator {
    constructor() {
        this.results = {
            meta: {},
            technical: {},
            performance: {},
            accessibility: {},
            content: {},
            errors: [],
            warnings: [],
            score: 0
        };
        
        this.init();
    }

    init() {
        console.log('🔍 Starting SEO Validation...');
        this.validateMetaTags();
        this.validateTechnicalSEO();
        this.validatePerformance();
        this.validateAccessibility();
        this.validateContent();
        this.calculateScore();
        this.displayResults();
    }

    // Validate meta tags
    validateMetaTags() {
        console.log('📋 Validating meta tags...');
        
        // Check title
        const title = document.title;
        if (title.length >= 50 && title.length <= 60) {
            this.results.meta.title = { status: 'pass', value: title, length: title.length };
        } else {
            this.results.meta.title = { status: 'warn', value: title, length: title.length };
            this.results.warnings.push(`Title length (${title.length}) should be 50-60 characters`);
        }

        // Check description
        const description = document.querySelector('meta[name="description"]');
        if (description) {
            const content = description.content;
            if (content.length >= 150 && content.length <= 160) {
                this.results.meta.description = { status: 'pass', value: content, length: content.length };
            } else {
                this.results.meta.description = { status: 'warn', value: content, length: content.length };
                this.results.warnings.push(`Description length (${content.length}) should be 150-160 characters`);
            }
        } else {
            this.results.meta.description = { status: 'fail', value: null };
            this.results.errors.push('Meta description is missing');
        }

        // Check canonical
        const canonical = document.querySelector('link[rel="canonical"]');
        this.results.meta.canonical = canonical ? 
            { status: 'pass', value: canonical.href } : 
            { status: 'fail', value: null };

        // Check Open Graph
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDescription = document.querySelector('meta[property="og:description"]');
        const ogImage = document.querySelector('meta[property="og:image"]');
        
        this.results.meta.openGraph = {
            title: ogTitle ? { status: 'pass', value: ogTitle.content } : { status: 'fail' },
            description: ogDescription ? { status: 'pass', value: ogDescription.content } : { status: 'fail' },
            image: ogImage ? { status: 'pass', value: ogImage.content } : { status: 'fail' }
        };

        // Check Twitter Cards
        const twitterCard = document.querySelector('meta[property="twitter:card"]');
        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        
        this.results.meta.twitter = {
            card: twitterCard ? { status: 'pass', value: twitterCard.content } : { status: 'fail' },
            title: twitterTitle ? { status: 'pass', value: twitterTitle.content } : { status: 'fail' }
        };
    }

    // Validate technical SEO
    validateTechnicalSEO() {
        console.log('⚙️ Validating technical SEO...');

        // Check structured data
        const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
        this.results.technical.structuredData = {
            status: structuredData.length > 0 ? 'pass' : 'fail',
            count: structuredData.length
        };

        // Check robots meta
        const robotsMeta = document.querySelector('meta[name="robots"]');
        this.results.technical.robotsMeta = robotsMeta ? 
            { status: 'pass', value: robotsMeta.content } : 
            { status: 'warn', value: 'default' };

        // Check viewport
        const viewport = document.querySelector('meta[name="viewport"]');
        this.results.technical.viewport = viewport ? 
            { status: 'pass', value: viewport.content } : 
            { status: 'fail', value: null };

        // Check lang attribute
        const lang = document.documentElement.lang;
        this.results.technical.language = lang ? 
            { status: 'pass', value: lang } : 
            { status: 'fail', value: null };

        // Test robots.txt (async)
        this.testRobotsTxt();
        
        // Test sitemap.xml (async)
        this.testSitemap();
    }

    // Validate performance
    validatePerformance() {
        console.log('⚡ Validating performance...');

        // Check image optimization
        const images = document.querySelectorAll('img');
        let imagesWithAlt = 0;
        let imagesWithLoading = 0;
        let imagesWithDimensions = 0;

        images.forEach(img => {
            if (img.alt) imagesWithAlt++;
            if (img.loading) imagesWithLoading++;
            if (img.width && img.height) imagesWithDimensions++;
        });

        this.results.performance.images = {
            total: images.length,
            withAlt: imagesWithAlt,
            withLoading: imagesWithLoading,
            withDimensions: imagesWithDimensions,
            altPercentage: Math.round((imagesWithAlt / images.length) * 100),
            loadingPercentage: Math.round((imagesWithLoading / images.length) * 100)
        };

        // Check script optimization
        const scripts = document.querySelectorAll('script[src]');
        let scriptsWithDefer = 0;
        let scriptsWithAsync = 0;

        scripts.forEach(script => {
            if (script.defer) scriptsWithDefer++;
            if (script.async) scriptsWithAsync++;
        });

        this.results.performance.scripts = {
            total: scripts.length,
            withDefer: scriptsWithDefer,
            withAsync: scriptsWithAsync,
            optimized: scriptsWithDefer + scriptsWithAsync
        };

        // Check CSS optimization
        const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
        this.results.performance.stylesheets = {
            total: stylesheets.length,
            external: Array.from(stylesheets).filter(link => !link.href.startsWith(window.location.origin)).length
        };
    }

    // Validate accessibility
    validateAccessibility() {
        console.log('♿ Validating accessibility...');

        // Check skip link
        const skipLink = document.querySelector('.skip-link, a[href="#main-content"]');
        this.results.accessibility.skipLink = skipLink ? 
            { status: 'pass' } : 
            { status: 'fail' };

        // Check ARIA labels
        const interactiveElements = document.querySelectorAll('button, input, select, textarea, [role="button"]');
        let elementsWithAriaLabel = 0;

        interactiveElements.forEach(element => {
            if (element.getAttribute('aria-label') || element.getAttribute('aria-labelledby')) {
                elementsWithAriaLabel++;
            }
        });

        this.results.accessibility.ariaLabels = {
            total: interactiveElements.length,
            withLabels: elementsWithAriaLabel,
            percentage: Math.round((elementsWithAriaLabel / interactiveElements.length) * 100)
        };

        // Check heading hierarchy
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const headingLevels = Array.from(headings).map(h => parseInt(h.tagName.charAt(1)));
        
        this.results.accessibility.headings = {
            total: headings.length,
            h1Count: headingLevels.filter(level => level === 1).length,
            hierarchy: this.checkHeadingHierarchy(headingLevels)
        };

        // Check focus indicators
        const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]');
        this.results.accessibility.focusableElements = focusableElements.length;
    }

    // Validate content
    validateContent() {
        console.log('📝 Validating content...');

        // Check internal links
        const links = document.querySelectorAll('a[href]');
        let internalLinks = 0;
        let externalLinks = 0;

        links.forEach(link => {
            if (link.href.startsWith(window.location.origin) || link.href.startsWith('/')) {
                internalLinks++;
            } else if (link.href.startsWith('http')) {
                externalLinks++;
            }
        });

        this.results.content.links = {
            total: links.length,
            internal: internalLinks,
            external: externalLinks
        };

        // Check content length
        const mainContent = document.querySelector('main, #main-content, .main-content');
        const textContent = mainContent ? mainContent.textContent.trim() : document.body.textContent.trim();
        const wordCount = textContent.split(/\s+/).length;

        this.results.content.wordCount = wordCount;
        this.results.content.readability = wordCount >= 300 ? 'good' : 'needs_improvement';
    }

    // Helper function to check heading hierarchy
    checkHeadingHierarchy(levels) {
        if (levels.length === 0) return { status: 'fail', message: 'No headings found' };
        
        if (levels[0] !== 1) {
            return { status: 'warn', message: 'Page should start with H1' };
        }

        for (let i = 1; i < levels.length; i++) {
            if (levels[i] > levels[i-1] + 1) {
                return { status: 'warn', message: 'Heading hierarchy skipped levels' };
            }
        }

        return { status: 'pass', message: 'Proper heading hierarchy' };
    }

    // Test robots.txt availability
    async testRobotsTxt() {
        try {
            const response = await fetch('/robots.txt');
            this.results.technical.robotsTxt = {
                status: response.ok ? 'pass' : 'fail',
                statusCode: response.status
            };
        } catch (error) {
            this.results.technical.robotsTxt = { status: 'fail', error: error.message };
        }
    }

    // Test sitemap.xml availability
    async testSitemap() {
        try {
            const response = await fetch('/sitemap.xml');
            this.results.technical.sitemap = {
                status: response.ok ? 'pass' : 'fail',
                statusCode: response.status
            };
        } catch (error) {
            this.results.technical.sitemap = { status: 'fail', error: error.message };
        }
    }

    // Calculate overall SEO score
    calculateScore() {
        let totalChecks = 0;
        let passedChecks = 0;

        // Count meta tag checks
        Object.values(this.results.meta).forEach(result => {
            if (typeof result === 'object' && result.status) {
                totalChecks++;
                if (result.status === 'pass') passedChecks++;
            }
        });

        // Count technical checks
        Object.values(this.results.technical).forEach(result => {
            if (typeof result === 'object' && result.status) {
                totalChecks++;
                if (result.status === 'pass') passedChecks++;
            }
        });

        // Count accessibility checks
        totalChecks += 3; // skipLink, ariaLabels, headings
        if (this.results.accessibility.skipLink.status === 'pass') passedChecks++;
        if (this.results.accessibility.ariaLabels.percentage > 80) passedChecks++;
        if (this.results.accessibility.headings.hierarchy.status === 'pass') passedChecks++;

        this.results.score = Math.round((passedChecks / totalChecks) * 100);
    }

    // Display results
    displayResults() {
        console.log('📊 SEO Validation Results:');
        console.log('='.repeat(50));
        
        console.log(`Overall SEO Score: ${this.results.score}%`);
        console.log(`Errors: ${this.results.errors.length}`);
        console.log(`Warnings: ${this.results.warnings.length}`);
        
        console.log('\n📋 Meta Tags:');
        console.log('- Title:', this.results.meta.title);
        console.log('- Description:', this.results.meta.description);
        console.log('- Canonical:', this.results.meta.canonical);
        
        console.log('\n⚙️ Technical SEO:');
        console.log('- Structured Data:', this.results.technical.structuredData);
        console.log('- Viewport:', this.results.technical.viewport);
        console.log('- Language:', this.results.technical.language);
        
        console.log('\n⚡ Performance:');
        console.log('- Images:', this.results.performance.images);
        console.log('- Scripts:', this.results.performance.scripts);
        
        console.log('\n♿ Accessibility:');
        console.log('- Skip Link:', this.results.accessibility.skipLink);
        console.log('- ARIA Labels:', this.results.accessibility.ariaLabels);
        console.log('- Headings:', this.results.accessibility.headings);
        
        console.log('\n📝 Content:');
        console.log('- Links:', this.results.content.links);
        console.log('- Word Count:', this.results.content.wordCount);
        
        if (this.results.errors.length > 0) {
            console.log('\n❌ Errors:');
            this.results.errors.forEach(error => console.log(`- ${error}`));
        }
        
        if (this.results.warnings.length > 0) {
            console.log('\n⚠️ Warnings:');
            this.results.warnings.forEach(warning => console.log(`- ${warning}`));
        }

        // Store results globally for external access
        window.seoValidationResults = this.results;
        
        // Generate downloadable report
        this.generateReport();
    }

    // Generate downloadable report
    generateReport() {
        const report = {
            timestamp: new Date().toISOString(),
            url: window.location.href,
            score: this.results.score,
            summary: {
                errors: this.results.errors.length,
                warnings: this.results.warnings.length,
                totalChecks: Object.keys(this.results.meta).length + Object.keys(this.results.technical).length + 3
            },
            details: this.results
        };

        // Create downloadable JSON report
        const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        console.log('💾 SEO Report generated. Download link created.');
        console.log('Run this in console to download: window.downloadSEOReport()');
        
        window.downloadSEOReport = () => {
            const a = document.createElement('a');
            a.href = url;
            a.download = `seo-report-${new Date().toISOString().split('T')[0]}.json`;
            a.click();
        };
    }
}

// Auto-run validation when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for dynamic content to load
    setTimeout(() => {
        window.seoValidator = new SEOValidator();
    }, 2000);
});

// Manual validation function
window.runSEOValidation = () => {
    window.seoValidator = new SEOValidator();
};

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SEOValidator;
}