 * Cinematic 3D Parallax Effect
 * moves layers at different speeds to create depth.
 */

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('parallax-container');
    const layers = [
        { el: document.querySelector('.layer-bg'), speed: 0.02 },
        { el: document.querySelector('.layer-1'), speed: 0.05 },
        { el: document.querySelector('.layer-2'), speed: 0.08 },
    ];

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;

    function handleResize() {
        centerX = window.innerWidth / 2;
        centerY = window.innerHeight / 2;
    }

    window.addEventListener('resize', handleResize);

    document.addEventListener('mousemove', (e) => {
        targetX = (e.clientX - centerX) / centerX;
        targetY = (e.clientY - centerY) / centerY;
    });

    function animate() {
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        layers.forEach(layer => {
            if (layer.el) {
                const x = mouseX * layer.speed * 100; // movement range
                const y = mouseY * layer.speed * 100;
                layer.el.style.transform = `translate3d(${-x}px, ${-y}px, 0)`;
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
});
