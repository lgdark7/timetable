document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.auth-card');
    if (!card) return;

    // Config
    const maxTilt = 8; // Max rotation degrees
    const perspective = 1000;
    const smoothFactor = 0.08; // Lower = smoother/slower tag

    let currentRotateX = 0;
    let currentRotateY = 0;
    let targetRotateX = 0;
    let targetRotateY = 0;

    document.addEventListener('mousemove', (e) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;

        // Calculate distance from center
        const x = e.clientX - cardCenterX;
        const y = e.clientY - cardCenterY;

        // Normalize based on screen size for consistent feel
        // (Move mouse 1/2 screen width = max tilt)
        const xPct = x / (window.innerWidth / 2);
        const yPct = y / (window.innerHeight / 2);

        // Target rotations
        // RotateY depends on X movement
        // RotateX depends on Y movement (inverted for natural tilt)
        targetRotateY = xPct * maxTilt;
        targetRotateX = -yPct * maxTilt;
    });

    function animate() {
        if (!card) return;

        // Smooth Intepolation (Lerp)
        currentRotateX += (targetRotateX - currentRotateX) * smoothFactor;
        currentRotateY += (targetRotateY - currentRotateY) * smoothFactor;

        // Apply Transform
        // scale3d provides subtle zoom
        card.style.transform = `perspective(${perspective}px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) scale3d(1.01, 1.01, 1.01)`;

        // Dynamic Gloss Position
        // Map rotation to percentage (0-100)
        // Adding 50 centers it at rest
        const glossX = 50 + ((currentRotateY / maxTilt) * 40);
        const glossY = 50 - ((currentRotateX / maxTilt) * 40);

        card.style.setProperty('--gloss-x', `${glossX}%`);
        card.style.setProperty('--gloss-y', `${glossY}%`);

        requestAnimationFrame(animate);
    }

    animate();
});
