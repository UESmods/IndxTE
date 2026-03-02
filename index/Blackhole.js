const canvas = document.getElementById('BlackHoleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const blackHole = {
    x: canvas.width / 2,
    y: canvas.height / 2
};

let particles = [];
const PARTICLE_COUNT = 100;

function Particle(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.vx = (Math.random() - 0.5) * 4;
    this.vy = (Math.random() - 0.5) * 4;
    
    this.history = [{ x: this.x, y: this.y }];
    this.maxHistory = Math.floor(Math.random() * 20) + 10;
}

Particle.prototype.draw = function() {
    if (this.history.length > 1) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        let hue, saturation, lightness;
        const hslMatch = this.color.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
        if (hslMatch) {
            hue = hslMatch[1];
            saturation = hslMatch[2];
            lightness = hslMatch[3];
        } else {
            hue = 0; saturation = 0; lightness = 100;
        }

        for (let i = 0; i < this.history.length - 1; i++) {
            const p1 = this.history[i];
            const p2 = this.history[i + 1];
            
            const alpha = i / this.history.length; 
            ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha * 0.8})`; 
            ctx.lineWidth = this.size * (alpha + 0.1); 
            
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
        }
    }

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
};

Particle.prototype.update = function() {
    const dx = blackHole.x - this.x;
    const dy = blackHole.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const gravityStrength = 5 / (distance * distance + 1); 
    this.vx += dx * gravityStrength;
    this.vy += dy * gravityStrength;

    this.x += this.vx;
    this.y += this.vy;

    this.history.push({ x: this.x, y: this.y });
    if (this.history.length > this.maxHistory) {
        this.history.shift();
    }

    if (distance < 20) {
        const spawnDistance = Math.max(canvas.width, canvas.height) / 1.5;
        const angle = Math.random() * Math.PI * 2;
        this.x = blackHole.x + Math.cos(angle) * spawnDistance;
        this.y = blackHole.y + Math.sin(angle) * spawnDistance;
        
        const initialSpeed = Math.random() * 5 + 3;
        this.vx = Math.cos(angle) * initialSpeed;
        this.vy = Math.sin(angle) * initialSpeed;
        
        this.history = [{ x: this.x, y: this.y }];
    }
};

function initParticles() {
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2 + 0.5;
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        particles.push(new Particle(x, y, size, color));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 50; i++) {
        const radius = 20 + i * 2;
        const hue = 0 + i * 0.5;
        const saturation = 100;
        const lightness = 50 - i * 0.5;
        const alpha = 0.05 - i * 0.001;
        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;

        ctx.beginPath();
        ctx.arc(blackHole.x, blackHole.y, radius, 0, Math.PI * 2);
        ctx.fill();
    }
    
    ctx.beginPath();
    ctx.arc(blackHole.x, blackHole.y, 20, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    blackHole.x = canvas.width / 2;
    blackHole.y = canvas.height / 2;
    particles = []; 
    initParticles();
});

initParticles();
animate();