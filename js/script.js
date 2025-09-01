// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(n => {
    n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Countdown Timer
function startCountdown() {
    // Set countdown end date (7 days from now)
    const countDate = new Date().getTime() + (1 * 24 * 60 * 60 * 1000);
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const gap = countDate - now;
        
        if (gap < 0) {
            clearInterval(timer);
            return;
        }
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        const days = Math.floor(gap / day);
        const hours = Math.floor((gap % day) / hour);
        const minutes = Math.floor((gap % hour) / minute);
        const seconds = Math.floor((gap % minute) / second);
        
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Add animation classes and observe elements
function initAnimations() {
    const animateElements = document.querySelectorAll(
        '.cta-item, .video-card, .testimonial-card, .course-feature, .about-stats'
    );
    
    animateElements.forEach(el => {
        el.classList.add('section-animate');
        observer.observe(el);
    });
}

// Video card hover effects
function initVideoCards() {
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            // Simulate video play (you can replace with actual YouTube links)
            const videoTitle = card.querySelector('h4').textContent;
            alert(`Video này chỉ dành cho cộng đồng DDF - Tham gia room cộng đồng DDF để xem các video nội bộ`);
        });
        
        // Add hover sound effect (optional)
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// CTA button tracking (for analytics)
function initCTATracking() {
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-cta, .nav-cta');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = button.textContent.trim();
            console.log(`CTA clicked: ${buttonText}`);
            
            // In real implementation, you would send this to Google Analytics or similar
            // gtag('event', 'click', {
            //     event_category: 'CTA',
            //     event_label: buttonText
            // });
            
            // For demo purposes, show alert for specific actions
            if (buttonText.includes('Đăng ký khóa học') || buttonText.includes('Đăng ký ngay')) {
                e.preventDefault();
                // showRegistrationModal();
            } else if (buttonText.includes('Mở tài khoản')) {
                e.preventDefault();
                showAccountModal();
            }
        });
    });
}

// Registration Modal (Demo)
function showRegistrationModal() {
    const modal = createModal(
        'Đăng ký khóa học',
        `
        <div style="text-align: center; padding: 20px;">
            <h3 style="margin-bottom: 20px;">Đăng ký khóa học chứng khoán</h3>
            <p style="margin-bottom: 20px;">Để đăng ký khóa học, vui lòng liên hệ:</p>
            <div style="margin-bottom: 15px;">
                <strong>Hotline:</strong> 0901.234.567
                <ul style="text-align: left; margin: 20px 0;">
                <li>Hồng loan : 0986124142</li>
                <li>Hà Nguyễn : 0342391654</li>
                <li>Phương Linh : 0772717677</li>
                <li>Lâm Trang : 036331703</li>
            </ul>
            </div>
            
            <div style="margin-bottom: 15px;">
                <strong>Email:</strong> nguyendoanduc.nguyen@gmail.com
            </div>
            
            <p style="color: #e74c3c; font-weight: bold;">
                Nhanh tay đăng ký - Số lượng có hạn
            </p>
        </div>
        `
    );
    document.body.appendChild(modal);
}

// Account Opening Modal (Demo)
function showAccountModal() {
    const modal = createModal(
        'Mở tài khoản chứng khoán',
        `
        <div style="text-align: center; padding: 20px;">
            <h3 style="margin-bottom: 20px;">Hỗ trợ mở tài khoản chứng khoán & Chuyển ID</h3>
            <p style="margin-bottom: 20px;">Liên hệ team trợ lý Doãn Đức</p>
            <ul style="text-align: left; margin: 20px 0;">
                <li>Hồng loan : 0986124142</li>
                <li>Hà Nguyễn : 0342391654</li>
                <li>Phương Linh : 0772717677</li>
                <li>Lâm Trang : 036331703</li>
            </ul>
            <p style="margin-bottom: 20px;">Liên hệ ngay để được tư vấn</p>
            <div style="margin-bottom: 15px;">
                <strong>Hotline:</strong> 0901.234.567
            </div>
            <div>
                <strong>Zalo:</strong> @KOLInvestZalo
            </div>
        </div>
        `
    );
    document.body.appendChild(modal);
}

// Create Modal Helper
function createModal(title, content) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            max-width: 500px;
            width: 90%;
            border-radius: 12px;
            overflow: hidden;
            animation: slideUp 0.3s ease;
        ">
            <div style="
                background: linear-gradient(135deg, #9b2ddfff, #31e88cff);
                color: white;
                padding: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            ">
                <h2 style="margin: 0; font-size: 1.3rem;">${title}</h2>
                <button onclick="this.closest('[style*=position]').remove()" style="
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 5px;
                ">×</button>
            </div>
            ${content}
        </div>
    `;
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    return modal;
}

// Statistics Counter Animation
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''));
                const suffix = counter.textContent.replace(/[0-9]/g, '');
                
                animateCounter(counter, 0, target, suffix, 2000);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Counter Animation Function
function animateCounter(element, start, end, suffix, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        
        element.textContent = Math.floor(current) + suffix;
    }, 16);
}

// Testimonials Carousel (Auto-rotate)
function initTestimonialCarousel() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    if (testimonials.length === 0) return;
    
    let currentIndex = 0;
    
    // Add active class to first testimonial
    testimonials[0].classList.add('testimonial-active');
    
    // Auto-rotate every 5 seconds
    setInterval(() => {
        testimonials[currentIndex].classList.remove('testimonial-active');
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].classList.add('testimonial-active');
    }, 5000);
}

// Form Validation (if forms are added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{10,11}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Scroll to Top Button
function initScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 50%;
        background: linear-gradient(135deg, #01ef5cff, #00ff44ff);
        color: white;
        font-size: 18px;
        cursor: pointer;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(137, 60, 231, 0.3);
    `;
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    document.body.appendChild(scrollBtn);
}

// Add CSS animations
const animationStyles = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideUp {
        from { transform: translateY(50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    .testimonial-active {
        transform: scale(1.05);
        box-shadow: 0 15px 40px rgba(231, 76, 60, 0.2);
        border: 2px solid #e74c3c;
    }
`;

// Add animations to head
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    startCountdown();
    initAnimations();
    initVideoCards();
    initCTATracking();
    initCounters();
    initTestimonialCarousel();
    initScrollToTop();
    
    console.log('KOL Investment Landing Page initialized successfully!');
});

// Performance optimization - Lazy load images (if any are added)
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Error handling for missing elements
window.addEventListener('error', (e) => {
    console.warn('Non-critical error occurred:', e.message);
    // Continue execution - don't break the page for minor errors
});

// Analytics helper (ready for Google Analytics integration)
function trackEvent(action, category = 'General', label = '') {
    console.log(`Analytics Event: ${category} - ${action} - ${label}`);
    
    // Uncomment when Google Analytics is integrated:
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         event_category: category,
    //         event_label: label
    //     });
    // }
}

// Export functions for external use if needed
window.KOLInvest = {
    showRegistrationModal,
    showAccountModal,
    trackEvent,
    validateEmail,
    validatePhone
};

// xử lý submit form
// URL của Web App từ Google Apps Script
        const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxSZvlhvgGkzw4fD9WSyUC3ykZ0ja1OTZ9hWGGusyPWGjc8yGV84TLC3V8JQQT0whhZ-g/exec';

        const popupOverlay = document.getElementById('popupOverlay');
        const successPopup = document.getElementById('successPopup');
        const errorPopup = document.getElementById('errorPopup');
        const form = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        const btnText = document.getElementById('btnText');
        const loadingSpinner = document.getElementById('loadingSpinner');

        // Store form data
        let submittedData = {};

        // Open popup
        function openPopup() {
            popupOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close popup
        function closePopup() {
            popupOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Close success popup
        function closeSuccessPopup() {
            successPopup.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Close error popup
        function closeErrorPopup() {
            errorPopup.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Show success popup with data
        function showSuccessPopup(data) {
            const successInfo = document.getElementById('successInfo');
            successInfo.innerHTML = `
                <div class="info-item">
                    <span class="info-label">Họ tên:</span>
                    <span>${data.fullName}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Số điện thoại:</span>
                    <span>${data.phone}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Nội dung tư vấn:</span>
                    <span>${data.consultType}</span>
                </div>
                ${data.notes ? `
                <div class="info-item">
                    <span class="info-label">Ghi chú:</span>
                    <span>${data.notes}</span>
                </div>
                ` : ''}
            `;
            
            // Close form popup
            closePopup();
            
            // Show success popup
            successPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Auto close after 5 seconds
            setTimeout(() => {
                closeSuccessPopup();
            }, 10000);
        }

        // Show error popup
        function showErrorPopup(message) {
            const errorMsg = document.getElementById('errorMsg');
            errorMsg.textContent = message || 'Rất tiếc, đã có lỗi xảy ra trong quá trình xử lý. Vui lòng thử lại sau.';
            
            errorPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close popup when clicking overlay
        function closePopupOnOverlay(event) {
            if (event.target === popupOverlay) {
                closePopup();
            }
        }

        // Close popups with ESC key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                if (popupOverlay.classList.contains('active')) {
                    closePopup();
                }
                if (successPopup.classList.contains('active')) {
                    closeSuccessPopup();
                }
                if (errorPopup.classList.contains('active')) {
                    closeErrorPopup();
                }
            }
        });

        // Form submission
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Validate phone number
            const phone = document.getElementById('phone').value;
            if (!/^[0-9]{10,11}$/.test(phone)) {
                showErrorPopup('Số điện thoại không hợp lệ. Vui lòng nhập 10-11 chữ số.');
                return;
            }

            // Show loading state
            submitBtn.disabled = true;
            btnText.style.display = 'none';
            loadingSpinner.style.display = 'block';

            // Prepare form data
            submittedData = {
                fullName: document.getElementById('fullName').value,
                phone: phone,
                consultType: document.getElementById('consultType').value,
                notes: document.getElementById('notes').value,
                timestamp: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })
            };

            try {
                const response = await fetch(WEB_APP_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(submittedData)
                });

                // Reset form
                form.reset();

                // Show success popup
                showSuccessPopup(submittedData);

            } catch (error) {
                console.error('Error:', error);
                showErrorPopup('Có lỗi xảy ra khi gửi form. Vui lòng kiểm tra kết nối mạng và thử lại.');
            } finally {
                // Reset button state
                submitBtn.disabled = false;
                btnText.style.display = 'inline';
                loadingSpinner.style.display = 'none';
            }
        });

        // Phone number validation
        document.getElementById('phone').addEventListener('input', function (e) {
            this.value = this.value.replace(/[^0-9]/g, '');
        });

        // Close success popup when clicking outside
        successPopup.addEventListener('click', function(event) {
            if (event.target === successPopup) {
                closeSuccessPopup();
            }
        });

        // Close error popup when clicking outside
        errorPopup.addEventListener('click', function(event) {
            if (event.target === errorPopup) {
                closeErrorPopup();
            }
        });