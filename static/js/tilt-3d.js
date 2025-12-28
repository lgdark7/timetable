document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.auth-card');
    if (!card) return;

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

        const x = e.clientX - cardCenterX;
        const y = e.clientY - cardCenterY;

        const xPct = x / (window.innerWidth / 2);
        const yPct = y / (window.innerHeight / 2);

        targetRotateY = xPct * maxTilt;
        targetRotateX = -yPct * maxTilt;
    });

    function animate() {
        if (!card) return;

        currentRotateX += (targetRotateX - currentRotateX) * smoothFactor;
        currentRotateY += (targetRotateY - currentRotateY) * smoothFactor;

        card.style.transform = `perspective(${perspective}px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) scale3d(1.01, 1.01, 1.01)`;

        const glossX = 50 + ((currentRotateY / maxTilt) * 40);
        const glossY = 50 - ((currentRotateX / maxTilt) * 40);

        card.style.setProperty('--gloss-x', `${glossX}%`);
        card.style.setProperty('--gloss-y', `${glossY}%`);

        requestAnimationFrame(animate);
    }

    animate();
});
