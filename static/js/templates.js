// Templates for E-Faws Tech Services Website
window.Templates = {
    
    // Home page template
    home: function() {
        return `
            <script src="static/js/main.js"></script>
            <script src="static/js/animations.js"></script>

            <!-- Hero Section -->
            <section class="hero" role="banner" aria-label="Main hero section">
                <div class="hero-content">
                    <h1 class="hero-title">Your Trusted Partner in AI Solutions</h1>
                    <p class="hero-subtitle">Empowering SME businesses with affordable, easy-to-use AI tools and digital solutions
                        that drive growth and automation.</p>
                    <div class="hero-buttons">
                        <a href="#services" class="btn" role="button" aria-label="Get Your AI Kit Now">Get Your AI Kit Now</a>
                        <a href="/contact" data-route="/contact" class="btn btn-secondary" role="button" aria-label="Contact Us">Contact Us</a>
                    </div>
                </div>
            </section>

            <!-- Highlights Section -->
            <section class="section features" role="region" aria-labelledby="features-title">
                <div class="container">
                    <h2 id="features-title" class="section-title">Why Choose E-Faws?</h2>
                    <p class="section-subtitle">We provide cutting-edge AI solutions tailored for SME businesses needs</p>

                    <div class="features-grid" role="list">
                        <article class="feature-card fade-in" role="listitem">
                            <div class="feature-icon" aria-hidden="true">
                                <i class="fas fa-robot"></i>
                            </div>
                            <h3 class="feature-title">AI-Powered WhatsApp Assistant Kits</h3>
                            <p class="feature-description">Automate customer interactions, lead generation, and sales with our smart
                                WhatsApp solutions designed for Indian businesses.</p>
                        </article>

                        <article class="feature-card fade-in" role="listitem">
                            <div class="feature-icon" aria-hidden="true">
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <h3 class="feature-title">Unifaws SmallBiz AI App</h3>
                            <p class="feature-description">One stop solution for all your business needs with integrated AI
                                capabilities and automation tools.</p>
                        </article>

                        <article class="feature-card fade-in" role="listitem">
                            <div class="feature-icon" aria-hidden="true">
                                <i class="fas fa-paint-brush"></i>
                            </div>
                            <h3 class="feature-title">Branding & Marketing Automation</h3>
                            <p class="feature-description">Create stunning visuals and automate your marketing campaigns with
                                AI-powered tools and creative solutions.</p>
                        </article>

                        <article class="feature-card fade-in" role="listitem">
                            <div class="feature-icon" aria-hidden="true">
                                <i class="fas fa-tools"></i>
                            </div>
                            <h3 class="feature-title">150+ AI Tools for Business Growth</h3>
                            <p class="feature-description">Access AI tools designed to accelerate your
                                business growth and digital transformation.</p>
                        </article>
                    </div>
                </div>
            </section>

            <!-- Internal CSS -->
            <style>
                .features-grid {
                    display: flex;
                    justify-content: space-between;
                    gap: 20px;
                    flex-wrap: wrap;
                    margin-top: 30px;
                }

                .feature-card {
                    flex: 1 1 calc(25% - 20px);
                    background: #ffffff;
                    border: 1px solid #e5e7eb;
                    border-radius: 10px;
                    padding: 20px;
                    text-align: center;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
                }

                .feature-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .feature-icon {
                    font-size: 30px;
                    color: #2563eb;
                    margin-bottom: 15px;
                }

                .feature-title {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 10px;
                }

                .feature-description {
                    font-size: 14px;
                    color: #555;
                }

                @media (max-width: 992px) {
                    .feature-card {
                        flex: 1 1 calc(50% - 20px);
                    }
                }

                @media (max-width: 600px) {
                    .feature-card {
                        flex: 1 1 100%;
                    }
                }
            </style>

            <!-- About Preview Section -->
            <section class="section about" id="about">
                <div class="container">
                    <div class="about-content">
                        <div class="about-image fade-in">
                            <img src="static/images/Services/ai_img.png" alt="E-Faws Team">
                        </div>
                        <div class="about-text">
                            <h2>Transforming Businesses with AI</h2>
                            <p>At E-Faws Tech Services Pvt Ltd, we believe that Artificial Intelligence is the future of business.
                                Our mission is to make AI simple, practical, and affordable for small and medium businesses.</p>
                            <p>Founded in Coimbatore with operations in Bangalore, we're experts in AI solutions, automation, and
                                branding. We've already helped 1000+ businesses embrace AI for growth.</p>

                            <div class="about-stats">
                                <div class="stat-item">
                                    <div class="stat-number">1000+</div>
                                    <div class="stat-label">Businesses Transformed</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">150+</div>
                                    <div class="stat-label">AI Tools</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">1000+</div>
                                    <div class="stat-label">Satisfied customer</div>
                                </div>
                            </div>

                            <a href="/about" data-route="/about" class="btn" style="margin-top: 30px; margin-left: 1.7cm;">Learn More
                                About Us</a>
                        </div>
                    </div>
                </div>
            </section>

            <style>
                .services-tabs {
                    display: flex;
                    justify-content: space-between;
                    margin: 20px 0;
                    flex-wrap: nowrap;
                    width: 100%;
                    gap: 5px;
                }

                .tab-btn {
                    flex: 0 0 25%;
                    max-width: 25%;
                    text-align: center;
                    padding: 12px 6px;
                    border: 1px solid #2563eb;
                    border-radius: 6px;
                    background: #fff;
                    cursor: pointer;
                    font-size: 13px;
                    font-weight: 500;
                    color: #2563eb;
                    transition: all 0.3s ease;
                    white-space: normal;
                    line-height: 1.2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 55px;
                }

                .tab-btn:hover,
                .tab-btn.active {
                    background: #2563eb;
                    color: #fff;
                }

                @media (max-width: 360px) {
                    .tab-btn {
                        font-size: 12px;
                        height: 65px;
                    }
                }
            </style>

            <!-- Services Preview Section -->
            <section class="section services" id="services">
                <div class="container">
                    <h2 class="section-title">Our Services</h2>
                    <p class="section-subtitle">Comprehensive AI and digital solutions for your business growth</p>

                    <div class="services-tabs">
                        <div class="tab-btn active" data-filter="ai">AI Solutions</div>
                        <div class="tab-btn" data-filter="creative">Digital Marketing & Solutions</div>
                        <div class="tab-btn " data-filter="all">All Services</div>
                    </div>

                    <!-- Services Grid -->
                    <div class="services-grid">
                        <div class="service-card" data-category="ai">
                            <div class="service-icon">
                                <i class="fab fa-whatsapp"></i>
                            </div>
                            <h3 class="service-title">AI WhatsApp Business Kits</h3>
                            <p class="service-description">
                                Smart replies, auto-leads, product catalogs and more with our AI-powered WhatsApp solutions.
                            </p>
                            <ul class="service-features">
                                <li>Quick Reply</li>
                                <li>Auto chat</li>
                                <li>Voice Note Templates</li>
                                <li>Order / Enquiry Handle</li>
                                <li>Ready-Made Post Captions</li>
                                <li>Customizable Templates</li>
                            </ul>
                            <p class="kit-cta">
                                <strong>Get Started Today:</strong> Just fill this form to register:
                                <a href="http://bit.ly/44U9aV5" target="_blank">http://bit.ly/44U9aV5</a> – secure your AI Assistant
                                Kit now!
                            </p>
                        </div>

                        <div class="service-card" data-category="ai">
                            <div class="service-icon">
                                <i class="fas fa-pen-nib"></i>
                            </div>
                            <h3 class="service-title">Creative Design Studio</h3>
                            <p class="service-description">
                                Stunning posters, logos, and branding visuals crafted for your business identity.
                            </p>
                            <ul class="service-features">
                                <li>Custom Logo Design</li>
                                <li>Professional Poster Design</li>
                                <li>Business Card & Flyer Design</li>
                                <li>Brand Style Guidelines</li>
                                <li>Ad Campaign - Lead Generation</li>
                                <li>Globally branding</li>  
                                <li>Presentation</li>                              
                            </ul>
                        </div>

                        <div class="service-card" data-category="creative">
                            <div class="service-icon">
                                <i class="fas fa-bullhorn"></i>
                            </div>
                            <h3 class="service-title">Digital Marketing & Solutions</h3>
                            <p class="service-description">
                                AI-driven ads and promotions that target the right audience at the right time.
                            </p>
                            <ul class="service-features">
                                <li>AI-targeted advertising</li>
                                <li>Posters Designing</li>
                                <li>Video Editing</li>
                                <li>Presentation Making</li>
                                <li>100+ Digital Features - one to one Solutions</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Popup Modal -->
                    <div class="popup-overlay" id="popupOverlay">
                        <div class="popup-content celebration" id="popupContent">
                            <span class="popup-close" id="popupClose">&times;</span>
                            <canvas id="confettiCanvas"></canvas>
                        </div>
                    </div>

                    <style>
                        .popup-overlay {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: rgba(0, 0, 0, 0.6);
                            display: none;
                            justify-content: center;
                            align-items: center;
                            z-index: 1000;
                        }

                        .popup-overlay.active {
                            display: flex;
                        }

                        .popup-content.celebration {
                            border: 3px solid #9b2beb;
                            box-shadow: 0 0 25px rgba(25, 151, 223, 0.8);
                        }

                        @keyframes zoomIn {
                            from {
                                transform: scale(0.7);
                                opacity: 0;
                            }
                            to {
                                transform: scale(1);
                                opacity: 1;
                            }
                        }

                        .popup-close {
                            position: absolute;
                            top: 8px;
                            right: 12px;
                            font-size: 28px;
                            cursor: pointer;
                            color: #333;
                            z-index: 1001;
                        }

                        #confettiCanvas {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            pointer-events: none;
                            z-index: 1000;
                        }

                        .popup-content {
                            background: linear-gradient(135deg, #f9f9f9, #ffffff);
                            padding: 30px;
                            border-radius: 20px;
                            max-width: 600px;
                            width: 90%;
                            position: relative;
                            animation: zoomIn 0.5s ease;
                            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                            overflow: hidden;
                        }

                        @media (max-width: 600px) {
                            .popup-content {
                                width: 95%;
                                max-width: 360px;
                                padding: 18px;
                                border-radius: 14px;
                            }

                            .popup-close {
                                font-size: 22px;
                                top: 5px;
                                right: 10px;
                            }
                        }
                    </style>
                </div>
            </section>

            <!-- Highlighted AI Book Section -->
            <section class="section ai-book">
                <div class="container" style="text-align: center;">
                    <h2 style="font-size: 22px; font-weight: 700; margin-bottom: 20px;">
                        Very Important AI Book for your Businesses – <span style="color:#2563eb;">Highlights</span>
                    </h2>
                    <div class="book-highlight">
                        <img src="static/images/Services/aibook.jpg" alt="AI Book for SME Businesses"
                            class="book-cover" id="openPdfModal">
                    </div>
                </div>
            </section>

            <!-- PDF Modal -->
            <div id="pdfModal" class="pdf-modal">
                <div class="pdf-modal-content">
                    <span class="close-btn" id="closePdfModal">&times;</span>
                    <iframe src="static/pdfs/aibook.pdf" class="pdf-frame"></iframe>
                </div>
            </div>

            <style>
                .pdf-modal {
                    display: none;
                    position: fixed;
                    z-index: 1000;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7);
                    justify-content: center;
                    align-items: center;
                }

                .pdf-modal-content {
                    position: relative;
                    width: 80%;
                    max-width: 900px;
                    height: 80%;
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.3);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }

                .close-btn {
                    position: absolute;
                    top: 12px;
                    right: 15px;
                    font-size: 28px;
                    font-weight: bold;
                    color: #333;
                    cursor: pointer;
                    transition: 0.3s;
                }

                .close-btn:hover {
                    color: #ff0000;
                }

                .pdf-frame {
                    width: 100%;
                    height: 100%;
                    border: none;
                }

                @media (max-width: 768px) {
                    .pdf-modal-content {
                        width: 95%;
                        height: 80%;
                    }
                }

                .ai-book {
                    margin: 50px 0;
                }

                .book-highlight {
                    display: inline-block;
                    padding: 15px;
                    border: 2px solid #2563eb;
                    border-radius: 12px;
                    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
                    background: #fff;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .book-highlight:hover {
                    transform: scale(1.05);
                    box-shadow: 0 12px 25px rgba(37, 99, 235, 0.5);
                }

                .book-cover {
                    width: 250px;
                    max-width: 100%;
                    border-radius: 8px;
                    cursor: pointer;
                }
            </style>

            <!-- Associations & Tech Supporters Section -->
            <div class="container">
                <h2 class="section-title">Associations & Tech Supporters</h2>
                <div class="associations-content">
                    <div class="logo-slider-container">
                        <button class="arrow-btn left" onclick="prevLogo()">&#10094;</button>
                        <div class="logo-slider">
                            <div class="logo-track">
                                <img src="static/images/Associates_Clients/logo1.png" alt="Logo 1">
                                <img src="static/images/Associates_Clients/logo2.png" alt="Logo 2">
                                <img src="static/images/Associates_Clients/logo3.png" alt="Logo 3">
                                <img src="static/images/Associates_Clients/logo4.png" alt="Logo 4">
                                <img src="static/images/Associates_Clients/logo5.png" alt="Logo 5">
                                <img src="static/images/Associates_Clients/logo7.png" alt="Logo 7">
                                <img src="static/images/Associates_Clients/logo8.png" alt="Logo 8">
                                <img src="static/images/Associates_Clients/logo9.png" alt="Logo 9">
                                <img src="static/images/Associates_Clients/logo10.png" alt="Logo 10">
                                <img src="static/images/Associates_Clients/logo11.png" alt="Logo 11">
                                <img src="static/images/Associates_Clients/logo12.png" alt="Logo 12">
                                <img src="static/images/Associates_Clients/logo13.png" alt="Logo 13">
                                <img src="static/images/Associates_Clients/logo14.png" alt="Logo 14">
                            </div>
                        </div>
                        <button class="arrow-btn right" onclick="nextLogo()">&#10095;</button>
                    </div>
                </div>
            </div>

            <style>
                .logo-slider-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                    margin: 1cm auto;
                    width: 100%;
                    max-width: 600px;
                }

                .logo-slider {
                    position: relative;
                    width: 350px;
                    overflow: hidden;
                    border-radius: 15px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                }

                .logo-track {
                    display: flex;
                    transition: transform 0.6s ease-in-out;
                }

                .logo-track img {
                    width: 350px;
                    height: 350px;
                    flex-shrink: 0;
                    border-radius: 15px;
                    object-fit: contain;
                }

                .arrow-btn {
                    background-color: rgba(90, 6, 115, 0.5);
                    color: white;
                    border: none;
                    padding: 14px 20px;
                    cursor: pointer;
                    font-size: 28px;
                    border-radius: 50%;
                    transition: background 0.3s ease, transform 0.2s ease;
                }

                .arrow-btn:hover {
                    background-color: rgba(0, 0, 0, 0.8);
                    transform: scale(1.1);
                }

                @media screen and (max-width: 768px) {
                    .logo-slider {
                        width: 250px;
                    }

                    .logo-track img {
                        width: 250px;
                        height: 250px;
                    }

                    .arrow-btn {
                        padding: 12px 16px;
                        font-size: 24px;
                    }
                }

                @media screen and (max-width: 480px) {
                    .logo-slider-container {
                        gap: 10px;
                        margin: 1cm auto;
                        max-width: 90%;
                    }

                    .logo-slider {
                        width: 180px;
                    }

                    .logo-track img {
                        width: 180px;
                        height: 180px;
                    }

                    .arrow-btn {
                        padding: 8px 10px;
                        font-size: 20px;
                    }
                }
            </style>

            <!-- CTA Section -->
            <section style="margin-top: 1.5cm;" class="cta">
                <div class="container">
                    <div class="cta-content">
                        <h2 class="cta-title">Ready to Transform Your Business with AI?</h2>
                        <p class="cta-text">Join thousands of businesses that have accelerated their growth with our AI solutions.</p>
                        <a href="/contact" data-route="/contact" class="btn">Get Started Today</a>
                    </div>
                </div>
            </section>
        `;
    },

    // Services page template
    services: function() {
        return `
            <style>
                .services-tabs {
                    display: flex;
                    justify-content: space-between;
                    margin: 20px 0;
                    flex-wrap: nowrap;
                    width: 100%;
                    gap: 5px;
                }

                .tab-btn {
                    flex: 0 0 25%;
                    max-width: 25%;
                    text-align: center;
                    padding: 12px 6px;
                    border: 1px solid #2563eb;
                    border-radius: 6px;
                    background: #fff;
                    cursor: pointer;
                    font-size: 13px;
                    font-weight: 500;
                    color: #2563eb;
                    transition: all 0.3s ease;
                    white-space: normal;
                    line-height: 1.2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 55px;
                }

                .tab-btn:hover,
                .tab-btn.active {
                    background: #2563eb;
                    color: #fff;
                }

                @media (max-width: 360px) {
                    .tab-btn {
                        font-size: 12px;
                        height: 65px;
                    }
                }
            </style>

            <!-- Services Preview Section -->
            <section class="section services" id="services">
                <div class="container">
                    <h2 class="section-title">Our Services</h2>
                    <p class="section-subtitle">Comprehensive AI and digital solutions for your business growth</p>

                    <div class="services-tabs">
                        <div class="tab-btn active" data-filter="ai">AI Solutions</div>
                        <div class="tab-btn" data-filter="digital">Digital Solutions</div>
                        <div class="tab-btn" data-filter="creative">Creative & Marketing</div>
                        <div class="tab-btn " data-filter="all">All Services</div>
                    </div>

                    <div class="services-grid">
                        <div class="service-card" data-category="ai">
                            <div class="service-icon">
                                <i class="fab fa-whatsapp"></i>
                            </div>
                            <h3 class="service-title">AI WhatsApp Business Kits</h3>
                            <p class="service-description">Smart replies, auto-leads, product catalogs and more with our AI-powered
                                WhatsApp solutions.</p>
                            <ul class="service-features">
                                <li>Automated customer responses</li>
                                <li>Lead generation automation</li>
                                <li>Product catalog integration</li>
                            </ul>
                        </div>

                        <div class="service-card" data-category="ai">
                            <div class="service-icon">
                                <i class="fas fa-palette"></i>
                            </div>
                            <h3 class="service-title">AI Branding Tools</h3>
                            <p class="service-description">Generate logos, posts, creatives instantly with our AI branding suite.
                            </p>
                            <ul class="service-features">
                                <li>Instant logo generation</li>
                                <li>Social media post creation</li>
                                <li>Brand identity development</li>
                            </ul>
                        </div>

                        <div class="service-card" data-category="digital">
                            <div class="service-icon">
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <h3 class="service-title">Mobile & Web Apps</h3>
                            <p class="service-description">Custom-built solutions for businesses of all sizes with integrated AI
                                capabilities.</p>
                            <ul class="service-features">
                                <li>Custom application development</li>
                                <li>AI integration services</li>
                                <li>Responsive design</li>
                            </ul>
                        </div>

                        <div class="service-card" data-category="creative">
                            <div class="service-icon">
                                <i class="fas fa-bullhorn"></i>
                            </div>
                            <h3 class="service-title">Digital Campaigns</h3>
                            <p class="service-description">AI-driven ads and promotions that target the right audience at the right
                                time.</p>
                            <ul class="service-features">
                                <li>AI-targeted advertising</li>
                                <li>Campaign performance analytics</li>
                                <li>ROI optimization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="cta">
                <div class="container">
                    <div class="cta-content">
                        <h2 class="cta-title">Not Sure Which Service You Need?</h2>
                        <p class="cta-text">Schedule a free consultation with our experts to find the perfect solution for your business.</p>
                        <a href="/contact" data-route="/contact" class="btn">Book a Consultation</a>
                    </div>
                </div>
            </section>
        `;
    },

    // About page template
    about: function() {
        return `
            <style>
                .section {
                    padding: 60px 20px;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .section-title {
                    text-align: center;
                    font-size: 30px;
                    font-weight: 700;
                    color: #1d2d50;
                    margin-bottom: 15px;
                }

                .section-subtitle {
                    text-align: center;
                    font-size: 18px;
                    color: #555;
                    margin-bottom: 40px;
                }

                .page-hero {
                    background: linear-gradient(135deg, #1d2d50, #133b5c);
                    color: #fff;
                    padding: 100px 20px;
                    text-align: center;
                    border-radius: 0 0 30px 30px;
                }

                .page-hero h1 {
                    font-size: 38px;
                    margin-bottom: 15px;
                }

                .page-hero p {
                    font-size: 18px;
                    color: #eee;
                }

                .about-content {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 40px;
                }

                .about-text {
                    flex: 1 1 50%;
                }

                .about-text h2 {
                    font-size: 26px;
                    color: #1d2d50;
                    margin-bottom: 20px;
                }

                .about-text p {
                    font-size: 16px;
                    line-height: 1.6;
                    margin-bottom: 15px;
                    color: #444;
                }

                .about-image {
                    flex: 1 1 40%;
                }

                .about-image img {
                    width: 100%;
                    border-radius: 20px;
                    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
                }

                .mission-vision {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    margin-top: 20px;
                }

                .mv-card {
                    flex: 1 1 45%;
                    background: #fff;
                    border: 2px solid #f2c94c;
                    border-radius: 16px;
                    padding: 20px;
                    text-align: center;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                }

                .mv-card:hover {
                    transform: translateY(-8px);
                }

                .mv-icon {
                    font-size: 32px;
                    color: #f2c94c;
                    margin-bottom: 10px;
                }

                .stats-section {
                    background: #f9f9fc;
                    border-radius: 30px;
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    gap: 25px;
                    text-align: center;
                }

                .stat-item {
                    background: #fff;
                    padding: 25px;
                    border-radius: 20px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                    transition: transform 0.3s ease;
                }

                .stat-item:hover {
                    transform: scale(1.05);
                }

                .stat-number {
                    font-size: 34px;
                    font-weight: 700;
                    color: #1d2d50;
                    margin-bottom: 10px;
                }

                .stat-label {
                    font-size: 16px;
                    color: #666;
                }

                .values-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
                    gap: 25px;
                }

                .value-card {
                    background: #fff;
                    border-radius: 16px;
                    padding: 25px;
                    text-align: center;
                    border-top: 4px solid #f2c94c;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                }

                .value-card:hover {
                    transform: translateY(-6px);
                }

                .value-icon {
                    font-size: 28px;
                    color: #133b5c;
                    margin-bottom: 12px;
                }

                .value-card h3 {
                    font-size: 20px;
                    margin-bottom: 10px;
                    color: #1d2d50;
                }

                .value-card p {
                    color: #555;
                    font-size: 15px;
                }

                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
                    gap: 25px;
                }

                .team-member {
                    background: #fff;
                    border-radius: 20px;
                    text-align: center;
                    padding: 25px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
                    transition: transform 0.3s ease;
                }

                .team-member:hover {
                    transform: translateY(-8px);
                }

                .member-image img {
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    border: 4px solid #f2c94c;
                    object-fit: cover;
                    margin-bottom: 15px;
                }

                .member-role {
                    color: #f2c94c;
                    font-weight: 600;
                    margin: 5px 0;
                }

                .member-bio {
                    font-size: 14px;
                    color: #555;
                    line-height: 1.5;
                }

                .cta {
                    background: linear-gradient(135deg, #133b5c, #1d2d50);
                    color: #fff;
                    text-align: center;
                    padding: 80px 20px;
                    border-radius: 30px;
                    margin-top: 50px;
                }

                .cta-title {
                    font-size: 28px;
                    margin-bottom: 15px;
                }

                .cta-text {
                    font-size: 18px;
                    margin-bottom: 25px;
                    color: #f0f0f0;
                }

                .cta .btn {
                    background: #f2c94c;
                    color: #1d2d50;
                    padding: 12px 28px;
                    font-weight: 600;
                    border-radius: 30px;
                    text-decoration: none;
                    transition: background 0.3s ease;
                }

                .cta .btn:hover {
                    background: #d4a71c;
                }

                @media (max-width: 768px) {
                    .about-content {
                        flex-direction: column;
                    }

                    .mission-vision {
                        flex-direction: column;
                    }

                    .section-title {
                        font-size: 24px;
                    }

                    .page-hero h1 {
                        font-size: 28px;
                    }

                    .page-hero p {
                        font-size: 16px;
                    }
                }
            </style>

            <!-- About Hero Section -->
            <section class="page-hero">
                <div class="container">
                    <h1>About E-Faws Tech Services Pvt Ltd</h1>
                    <p>Learn about our mission, vision, and the team behind our innovative AI solutions</p>
                </div>
            </section>

            <!-- Company Overview -->
            <section class="section">
                <div class="container">
                    <div class="about-content">
                        <div class="about-text">
                            <h2>Transforming Businesses with AI</h2>
                            <p>E-Faws is a forward-thinking technology company based in Coimbatore, Tamil Nadu, dedicated to empowering
                                SME business entrepreneurs. We offer affordable, practical digital and AI solutions that help simplify
                                technology and drive real results, especially for those in rural and emerging markets.</p>

                            <p>Founded in Coimbatore with operations in Bangalore, we're experts in AI solutions, automation, and branding.
                                We've already helped 1000+ businesses embrace AI for growth.</p>

                            <div class="mission-vision">
                                <div class="mv-card">
                                    <div class="mv-icon">
                                        <i class="fas fa-eye"></i>
                                    </div>
                                    <h3>Our Vision</h3>
                                    <p>To become the trusted AI and digital partner for <strong>1 million</strong> SME business entrepreneurs
                                        & individuals by 2035.</p>
                                </div>

                                <div class="mv-card">
                                    <div class="mv-icon">
                                        <i class="fas fa-bullseye"></i>
                                    </div>
                                    <h3>Our Mission</h3>
                                    <p>To equip SME businesses with affordable, easy-to-use digital tools and AI solutions that solve
                                        real-world challenges and enable growth.</p>
                                </div>
                            </div>
                        </div>

                        <div class="about-image">
                            <img src="static/images/Services/aiimg.png" alt="E-Faws Team">
                        </div>
                    </div>
                </div>
            </section>

            <!-- Stats Section -->
            <section class="section stats-section">
                <div class="container">
                    <h2 class="section-title">Our Impact</h2>
                    <p class="section-subtitle">Numbers that showcase our growth and commitment to excellence</p>

                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-number" data-count="1000">1000+</div><span>+</span>
                            <div class="stat-label">Businesses Transformed</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" data-count="150">150+</div><span>+</span>
                            <div class="stat-label">AI Tools Available</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Values Section -->
            <section class="section values-section">
                <div class="container">
                    <h2 class="section-title">Our Values</h2>
                    <p class="section-subtitle">The principles that guide everything we do</p>

                    <div class="values-grid">
                        <div class="value-card">
                            <div class="value-icon">
                                <i class="fas fa-lightbulb"></i>
                            </div>
                            <h3>Innovation</h3>
                            <p>We constantly explore new technologies and approaches to deliver cutting-edge solutions.</p>
                        </div>

                        <div class="value-card">
                            <div class="value-icon">
                                <i class="fas fa-hand-holding-heart"></i>
                            </div>
                            <h3>Accessibility</h3>
                            <p>We believe AI should be available to everyone, regardless of business size or technical expertise.</p>
                        </div>

                        <div class="value-card">
                            <div class="value-icon">
                                <i class="fas fa-users"></i>
                            </div>
                            <h3>Collaboration</h3>
                            <p>We work closely with our clients to understand their needs and deliver tailored solutions.</p>
                        </div>

                        <div class="value-card">
                            <div class="value-icon">
                                <i class="fas fa-rocket"></i>
                            </div>
                            <h3>Growth</h3>
                            <p>We measure our success by the growth and success of the businesses we serve.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Team Section -->
            <section class="section team-section">
                <div class="container">
                    <h2 class="section-title">Our Leadership</h2>
                    <p class="section-subtitle">The passionate minds driving our vision forward</p>

                    <div class="team-grid">
                       

                        <div class="team-member">
                            <div class="member-image">
                                <img src="static/images/team-member2.png" alt="Team Member">
                            </div>
                            <h3>Priya Sharma</h3>
                            <p class="member-role">CTO</p>
                            <p class="member-bio">Technology visionary specializing in AI implementation and digital solutions.</p>
                        </div>

                        <div class="team-member">
                            <div class="member-image">
                                <img src="static/images/team-member3.png" alt="Team Member">
                            </div>
                            <h3>Kalaiselvi K</h3>
                            <p class="member-role">Director</p>
                            <p class="member-bio">
                                Kalaiselvi K, as Director, brings strategic vision and leadership to the organization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="cta">
                <div class="container">
                    <div class="cta-content">
                        <h2 class="cta-title">Ready to Transform Your Business with AI?</h2>
                        <p class="cta-text">Join thousands of businesses that have accelerated their growth with our AI solutions.</p>
                        <a href="/contact" data-route="/contact" class="btn">Get Started Today</a>
                    </div>
                </div>
            </section>
        `;
    },

    // Blog page template
    blog: function() {
        return `
            <!-- Blog Hero Section -->
            <section class="page-hero">
                <div class="container">
                    <h1>AI Insights & Resources</h1>
                    <p>Stay updated with the latest trends, tips, and strategies in AI for business growth</p>
                </div>
            </section>

            <!-- Blog Section -->
            <section class="section">
                <div class="container">
                    <div class="blog-container">
                        <!-- Featured Post -->
                        <div class="featured-post">
                            <div class="featured-image">
                                <img src="static/images/blog-featured.jpg" alt="Featured Blog Post">
                                <div class="post-category">Featured</div>
                            </div>
                            <div class="featured-content">
                                <h2>How AI Can Double Your Business Revenue in 2023</h2>
                                <div class="post-meta">
                                    <span><i class="far fa-calendar"></i> June 15, 2023</span>
                                </div>
                                <p>Discover how small and medium businesses are leveraging AI tools to automate processes, enhance
                                    customer experience, and significantly increase their revenue streams with minimal investment.
                                </p>
                            </div>
                        </div>

                        <!-- Blog Posts Grid -->
                        <div class="blog-grid">
                            <div class="blog-post">
                                <div class="post-image">
                                    <a href="https://youtu.be/xui9ND2emhQ?si=ppMi2Vgx3Nk2hdz9" target="_blank">
                                        <img src="https://img.youtube.com/vi/xui9ND2emhQ/hqdefault.jpg"
                                            alt="YouTube Video 2 Thumbnail">
                                        <div class="post-category">Video</div>
                                        <div class="play-icon"><i class="fas fa-play"></i></div>
                                    </a>
                                </div>
                                <div class="post-content">
                                    <h3>AI Tools You Should Start Using Today</h3>
                                    <div class="post-meta">
                                        <span><i class="far fa-calendar"></i> Sept 2025</span>
                                    </div>
                                    <p>Check out our video explaining powerful AI tools every entrepreneur must try.</p>
                                </div>
                            </div>

                            <div class="blog-post">
                                <div class="post-image">
                                    <a href="https://youtu.be/2OTUdtbu9Wg?si=IOCG1PTRjrscCkXo" target="_blank">
                                        <img src="https://img.youtube.com/vi/2OTUdtbu9Wg/hqdefault.jpg"
                                            alt="YouTube Video 1 Thumbnail">
                                        <div class="post-category">Video</div>
                                        <div class="play-icon"><i class="fas fa-play"></i></div>
                                    </a>
                                </div>
                                <div class="post-content">
                                    <h3>AI for SME Businesses – Must Watch Guide</h3>
                                    <div class="post-meta">
                                        <span><i class="far fa-calendar"></i> Sept 2025</span>
                                    </div>
                                    <p>Watch our video to learn how small businesses can quickly adopt AI for growth.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Newsletter Subscription -->
                        <div class="newsletter-section">
                            <div class="newsletter-content">
                                <h2>Stay Updated with AI Trends</h2>
                                <p>Subscribe to our newsletter and get the latest insights on AI for business delivered to your
                                    inbox.</p>
                                <form id="newsletter-form" class="newsletter-form">
                                    <input type="tel" name="phone" placeholder="Enter your phone number" pattern="[0-9]{10}"
                                        required>
                                    <button type="submit" class="btn">Subscribe</button>
                                </form>
                            </div>
                        </div>

                        <!-- Popular Topics -->
                        <div class="topics-section">
                            <h2>Popular Topics</h2>
                            <div class="topics-grid">
                                <a href="#" class="topic-tag">AI Automation</a>
                                <a href="#" class="topic-tag">WhatsApp Business</a>
                                <a href="#" class="topic-tag">Content Creation</a>
                                <a href="#" class="topic-tag">Digital Marketing</a>
                                <a href="#" class="topic-tag">Branding</a>
                                <a href="#" class="topic-tag">Video Marketing</a>
                                <a href="#" class="topic-tag">CRM Solutions</a>
                                <a href="#" class="topic-tag">Small Business Growth</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="cta">
                <div class="container">
                    <div class="cta-content">
                        <h2 class="cta-title">Ready to Implement AI in Your Business?</h2>
                        <p class="cta-text">Get started with our AI solutions and transform your business operations today.</p>
                        <a href="/contact" data-route="/contact" class="btn">Get Free Consultation</a>
                    </div>
                </div>
            </section>
        `;
    },

    // Contact page template
    contact: function() {
        return `
            <!-- Contact Hero Section -->
            <section class="contact-hero">
                <div class="container">
                    <h1>Get In Touch With Us</h1>
                    <p>Have questions about our AI solutions? We're here to help your business grow with cutting-edge technology.
                    </p>
                </div>
            </section>

            <!-- Contact Section -->
            <section class="section">
                <div class="container">
                    <div class="contact-content">
                        <div class="contact-info">
                            <h2>Contact Information</h2>

                            <div class="info-item">
                                <div class="info-icon">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div class="info-content">
                                    <h3>Phone Numbers</h3>
                                    <p>+91 73971 98134</p>
                                    <p>+91 63802 13834</p>
                                </div>
                            </div>

                            <div class="info-item">
                                <div class="info-icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="info-content">
                                    <h3>Email Address</h3>
                                    <p>efawstech@gmail.com</p>
                                </div>
                            </div>

                            <div class="info-item">
                                <div class="info-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="info-content">
                                    <h3>Office Locations</h3>
                                    <p>Coimbatore, Tamil Nadu</p>
                                    <p>Bangalore, Karnataka</p>
                                </div>
                            </div>

                            <div class="info-item">
                                <div class="info-icon">
                                    <i class="fas fa-clock"></i>
                                </div>
                                <div class="info-content">
                                    <h3>Business Hours</h3>
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                                </div>
                            </div>

                            <div class="social-links mt-30">
                                <a href="https://www.youtube.com/@efawstech" target="_blank"><i class="fab fa-youtube"></i></a>
                                <a href="https://www.instagram.com/efawstech/" target="_blank"><i class="fab fa-instagram"></i></a>
                                <a href="https://www.facebook.com/profile.php?id=61562217991197" target="_blank"><i
                                        class="fab fa-facebook-f"></i></a>
                            </div>
                        </div>
                        <div class="contact-form"
                            style="width: 350px; margin: 0 auto; padding: 20px; background: #761195; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); font-family: Arial, sans-serif; color: #ffffff;">
                            <h2 style="text-align: center; margin-bottom: 20px; font-size: 22px; color: #ffffff;">Send Us a Message
                            </h2>

                            <form action="https://formspree.io/f/xldwwvdr" method="POST"
                                style="display: flex; flex-direction: column; gap: 15px;">

                                <div class="form-group" style="display: flex; flex-direction: column;">
                                    <label for="name" style="margin-bottom: 6px; font-weight: bold; color: #ffffff;">Name</label>
                                    <input type="text" id="name" name="name" required
                                        style="padding: 10px; border: 1px solid #ccc; border-radius: 8px; font-size: 16px;">
                                </div>

                                <div class="form-group" style="display: flex; flex-direction: column;">
                                    <label for="email" style="margin-bottom: 6px; font-weight: bold; color: #ffffff;">Email</label>
                                    <input type="email" id="email" name="_replyto" required
                                        style="padding: 10px; border: 1px solid #ccc; border-radius: 8px; font-size: 16px;">
                                </div>

                                <div class="form-group" style="display: flex; flex-direction: column;">
                                    <label for="subject" style="margin-bottom: 6px; font-weight: bold; color: #ffffff;">Subject</label>
                                    <input type="text" id="subject" name="subject" required
                                        style="padding: 10px; border: 1px solid #ccc; border-radius: 8px; font-size: 16px;">
                                </div>

                                <div class="form-group" style="display: flex; flex-direction: column;">
                                    <label for="message" style="margin-bottom: 6px; font-weight: bold; color: #ffffff;">Message</label>
                                    <textarea id="message" name="message" rows="5" required
                                        style="padding: 10px; border: 1px solid #ccc; border-radius: 8px; font-size: 16px; resize: vertical;"></textarea>
                                </div>

                                <button type="submit"
                                    style="padding: 12px; background: #2563eb; color: white; font-size: 16px; border: none; border-radius: 8px; cursor: pointer; transition: background 0.3s;">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    // Internship page template
    internship: function() {
        return `
            <style>
                .faq-section {
                    padding: 60px 20px;
                    background: #f9f9fc;
                }

                .section-title {
                    text-align: center;
                    font-size: 28px;
                    font-weight: 700;
                    margin-bottom: 30px;
                    color: #222;
                }

                .faq-container {
                    max-width: 800px;
                    margin: 0 auto;
                }

                .faq-item {
                    border-bottom: 1px solid #ddd;
                    margin-bottom: 12px;
                }

                .faq-question {
                    width: 100%;
                    background: #fff;
                    border: none;
                    outline: none;
                    font-size: 18px;
                    font-weight: 500;
                    color: #333;
                    text-align: left;
                    padding: 15px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                    transition: background 0.3s ease;
                }

                .faq-question:hover {
                    background: #f0f0f5;
                }

                .faq-answer {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.4s ease;
                    padding: 0 15px;
                    color: #555;
                    font-size: 16px;
                    line-height: 1.5;
                }

                .faq-item.active .faq-answer {
                    max-height: 300px;
                    padding: 15px;
                }

                .faq-item.active .faq-question i {
                    transform: rotate(180deg);
                    transition: transform 0.3s ease;
                }

                @media (max-width: 600px) {
                    .section-title {
                        font-size: 22px;
                    }
                    .faq-question {
                        font-size: 16px;
                    }
                }
            </style>

            <!-- Internship Hero Section -->
            <section class="page-hero">
                <div class="container">
                    <h1>AI Internship Program</h1>
                    <p>Launch your career in AI with hands-on experience and expert mentorship</p>
                </div>
            </section>

            <!-- Internship Overview -->
            <section class="section">
                <div class="container">
                    <div class="about-content">
                        <div class="about-text">
                            <h2>Shape the Future with AI</h2>
                            <p>At E-Faws, we believe in nurturing the next generation of AI leaders. Our internship program is designed to provide practical, real-world experience in artificial intelligence, digital solutions, and business technology.</p>
                            
                            <p>We offer a comprehensive 30-day program where you'll work on live projects, learn from industry experts, and develop skills that are in high demand in today's job market.</p>
                            
                            <div class="program-highlights">
                                <h3>Program Highlights</h3>
                                <div class="features-grid" style="margin-top: 30px;">
                                    <div class="feature-card">
                                        <div class="feature-icon">
                                            <i class="fas fa-laptop-code"></i>
                                        </div>
                                        <h4 class="feature-title">Hands-on Projects</h4>
                                        <p class="feature-description">Work on real AI kit development, branding, and promotional projects.</p>
                                    </div>
                                    
                                    <div class="feature-card">
                                        <div class="feature-icon">
                                            <i class="fas fa-certificate"></i>
                                        </div>
                                        <h4 class="feature-title">Industry Certification</h4>
                                        <p class="feature-description">Receive a recognized certificate upon successful completion.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="about-image">
                            <img src="static/images/Events/internship.png" alt="AI Internship Program">
                        </div>
                    </div>
                </div>
            </section>

            <!-- FAQ Section -->
            <section class="faq-section">
                <div class="container">
                    <h2 class="section-title">Frequently Asked Questions</h2>
                    
                    <div class="faq-container">
                        <div class="faq-item">
                            <button class="faq-question">
                                Who is eligible for the internship program?
                                <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="faq-answer">
                                <p>Our internship program is open to students and recent graduates from any discipline who have an interest in AI and technology. No prior experience is required as we provide comprehensive training from the basics.</p>
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <button class="faq-question">
                                Is the internship really free?
                                <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="faq-answer">
                                <p>Yes, our internship program is completely free of charge. We believe in making AI education accessible to everyone who is passionate about learning.</p>
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <button class="faq-question">
                                What is the time commitment required?
                                <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="faq-answer">
                                <p>The program requires 3 hours per day for 30 days. We offer both morning and evening batches to accommodate different schedules.</p>
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <button class="faq-question">
                                Do I need any special software or equipment?
                                <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="faq-answer">
                                <p>You will need a computer with internet access. We provide access to all necessary tools and platforms during the internship program.</p>
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <button class="faq-question">
                                What happens after I complete the internship?
                                <i class="fas fa-chevron-down"></i>
                            </button>
                            <div class="faq-answer">
                                <p>After successful completion, you will receive a certificate . We also offer guidance for further learning and career opportunities in the AI field.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="cta">
                <div class="container">
                    <div class="cta-content">
                        <h2 class="cta-title">Start Your AI Career Journey Today</h2>
                        <p class="cta-text">Join our free internship program and gain the skills that will set you apart in the competitive tech industry.</p>
                        <a href="/contact" data-route="/contact" class="btn">Apply for Internship</a>
                    </div>
                </div>
            </section>
        `;
    }
};