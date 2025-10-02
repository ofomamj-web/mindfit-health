document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('progress');
    const loadingText = document.querySelector('.loading-text');
    const loadingContainer = document.querySelector('.loading-container');
    let progress = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 10;
        
        if (progress >= 100) {
            progress = 100;
            progressBar.style.width = progress + '%';
            loadingText.textContent = 'Complete!';
            clearInterval(interval);
            
            // Fade out animation before redirect
            setTimeout(() => {
                loadingContainer.style.animation = 'fadeOut 0.5s ease-out forwards';
                setTimeout(() => {
                    window.location.href = 'home.html';
                }, 500);
            }, 500);
        } else {
            progressBar.style.width = progress + '%';
        }
    }, 200);
});

// Add fade out keyframe
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(0.9);
        }
    }
`;
document.head.appendChild(style);

