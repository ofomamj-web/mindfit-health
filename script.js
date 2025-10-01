document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('progress');
    const loadingText = document.querySelector('.loading-text');
    let progress = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 10;
        
        if (progress >= 100) {
            progress = 100;
            progressBar.style.width = progress + '%';
            loadingText.textContent = 'Complete!';
            clearInterval(interval);
            
            // Redirect to home.html after loading completes
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 500);
        } else {
            progressBar.style.width = progress + '%';
        }
    }, 200);
});
