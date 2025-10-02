// Scroll-triggered animations using Intersection Observer
class ScrollAnimations {
    constructor() {
        // Check for reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            // Still observe but don't animate
            this.reducedMotion = true;
        }
        
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        this.init();
    }
    
    init() {
        // Create observer
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (this.reducedMotion) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'none';
                    } else {
                        entry.target.classList.add('animate-in');
                    }
                }
            });
        }, this.observerOptions);
        
        // Observe elements
        this.observeElements();
    }
    
    observeElements() {
        // Observe all feature cards
        const cards = document.querySelectorAll('.feature-card');
        cards.forEach((card, index) => {
            if (!this.reducedMotion) {
                card.style.opacity = '0';
                card.style.transform = 'translateY(40px)';
                card.style.setProperty('--animation-delay', `${index * 0.1}s`);
            }
            this.observer.observe(card);
        });
        
        // Observe section headings and paragraphs
        const sections = document.querySelectorAll('.section h2, .section > p');
        sections.forEach((section, index) => {
            if (!this.reducedMotion) {
                section.style.opacity = '0';
                section.style.transform = 'translateY(30px)';
                section.style.setProperty('--animation-delay', `${index * 0.1}s`);
            }
            this.observer.observe(section);
        });
    }
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: scrollFadeIn 0.8s ease-out forwards;
        animation-delay: var(--animation-delay, 0s);
    }
    
    @keyframes scrollFadeIn {
        to {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    }
`;
document.head.appendChild(style);

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ScrollAnimations();
});

// Parallax effect for hero section (only if not reduced motion)
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let ticking = false;
    
    document.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const hero = document.querySelector('.hero');
                if (hero) {
                    const scrolled = window.pageYOffset;
                    const rate = scrolled * 0.5;
                    hero.style.transform = `translate3d(0, ${rate}px, 0)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Add smooth mouse tracking effect to cards (only if not reduced motion)
document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }
    
    const cards = document.querySelectorAll('.feature-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `translateY(-15px) scale(1.02) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1) perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
});
