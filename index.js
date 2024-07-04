import { NeatConfig, NeatGradient } from "@firecms/neat";

function navigateTo(url) {
    const overlay = document.getElementById('overlay');
    overlay.classList.add('show');
    setTimeout(() => {
        window.location.href = url;
    }, 0);
}

window.addEventListener('load', () => {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('show');

    // Define your config
    const config = {
        colors: [
            {
                color: "#C68BE8",
                enabled: true
            },
            {
                color: "#ffc8dd",
                enabled: true
            },
            {
                color: "#FFB1CD",
                enabled: true
            },
            {
                color: "#FEBDC4",
                enabled: true
            },
            {
                color: "#a2d2ff",
                enabled: false
            }
        ],
        speed: 5,
        horizontalPressure: 3,
        verticalPressure: 3,
        waveFrequencyX: 6,
        waveFrequencyY: 3,
        waveAmplitude: 6,
        shadows: 6,
        highlights: 2,
        colorBrightness: 1,
        colorSaturation: 3,
        wireframe: false,
        colorBlending: 5,
        backgroundColor: "#003FFF",
        backgroundAlpha: 1,
        resolution: 1
    };

    // Initialize the NeatGradient
    const neat = new NeatGradient({
        ref: document.getElementById("gradient"),
        ...config
    });

    // Change the config at any time
    neat.speed = 6;

    // Destroy the gradient for cleanup if needed
    // neat.destroy();
});