<script>
	import { onMount } from 'svelte';

	let canvas;
	let ctx;
	const particles = [];
	const fireworks = [];

	class Particle {
		constructor(x, y, color, firework = false) {
			this.x = x;
			this.y = y;
			this.color = color;
			this.radius = firework ? Math.random() * 3 + 1 : Math.random() * 2 + 1;
			this.speedX = (Math.random() - 0.5) * 6;
			this.speedY = firework ? (Math.random() - 0.5) * 6 : (Math.random() - 0.5) * 4 + 3;
			this.gravity = 0.1;
			this.alpha = 1;
			this.decay = firework ? 0.015 : 0.02;
		}

		update() {
			this.x += this.speedX;
			this.y += this.speedY;
			this.speedY += this.gravity;
			this.alpha -= this.decay;
		}

		draw() {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
			ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
			ctx.fill();
			ctx.closePath();
		}
	}

function createFirework() {
    const colors = [
        '255,50,50',    // Rojo suave 
        '50,255,50',    // Verde suave 
        '50,50,255',    // Azul suave 
        '255,165,50',   // Naranja suave 
        '255,255,50',   // Amarillo suave 
        '255,50,255'    // Magenta suave 
    ];

    // Generate x coordinate randomly across the entire canvas width
    const x = Math.random() * canvas.width; 
    
    // Generate y coordinate randomly in the upper 2/3 of the canvas
    const y = Math.random() * (canvas.height * 2/3);

    const color = colors[Math.floor(Math.random() * colors.length)];
    
    fireworks.push(new Particle(x, y, color, true));
}

	function explodeFirework(firework) {
		const particleCount = Math.floor(Math.random() * 50) + 30;
		for (let i = 0; i < particleCount; i++) {
			particles.push(new Particle(firework.x, firework.y, firework.color, false));
		}
	}

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);


		for (let i = fireworks.length - 1; i >= 0; i--) {
			fireworks[i].update();
			fireworks[i].draw();

			if (fireworks[i].speedY >= 0) {
				explodeFirework(fireworks[i]);
				fireworks.splice(i, 1);
			}
		}

		for (let i = particles.length - 1; i >= 0; i--) {
			particles[i].update();
			particles[i].draw();

			if (particles[i].alpha <= 0) {
				particles.splice(i, 1);
			}
		}
		if (Math.random() < 0.03) {
			createFirework();
		}

		requestAnimationFrame(animate);
	}

	onMount(() => {
		ctx = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		animate();

		return () => {
			cancelAnimationFrame(animate);
		};
	});
</script>

<canvas 
	bind:this={canvas} 
    class="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none" 
>
</canvas>
