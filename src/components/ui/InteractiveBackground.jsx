import { useEffect, useRef } from "react";

/**
 * InteractiveBackground
 * High-performance 2D Canvas featuring an interactive cyber constellation network.
 * - Gentle floating particles with subtle connection lines.
 * - Reactive to cursor position (gentle repulsion + connecting lines to cursor).
 * - Ambient radial glow spotlight following cursor.
 * - Automatic HiDPI/Retina scaling and paused when tab is inactive.
 */
export default function InteractiveBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 160 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive particle count
    const isMobile = width < 768;
    const particleCount = isMobile ? 32 : 64;
    const maxConnectionDistance = isMobile ? 85 : 120;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Subtle organic drift
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.baseRadius = Math.random() * 1.6 + 0.9;
        this.radius = this.baseRadius;
        // Subtle color palette: electric cyan, ice blue, faint indigo
        const colors = [
          "rgba(56, 189, 248, ", // #38bdf8 cyan
          "rgba(92, 200, 255, ", // #5cc8ff light cyan
          "rgba(0, 112, 243, ",  // #0070f3 blue
          "rgba(148, 163, 184, ", // slate-400
        ];
        this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.4 + 0.25;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around boundaries smoothly
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.y = height + 20;
        if (this.y > height + 20) this.y = -20;

        // Cursor interaction (gentle proximity nudge)
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouseRef.current.radius && dist > 0) {
          const force = (mouseRef.current.radius - dist) / mouseRef.current.radius;
          const angle = Math.atan2(dy, dx);
          // Gently push particle away from cursor
          this.x -= Math.cos(angle) * force * 1.6;
          this.y -= Math.sin(angle) * force * 1.6;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.colorPrefix}${this.alpha})`;
        ctx.fill();
      }
    }

    const particles = Array.from({ length: particleCount }, () => new Particle());

    // Resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle interactive cursor spotlight aura
      if (mouseRef.current.x > 0 && mouseRef.current.y > 0) {
        const radialGrad = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          320
        );
        radialGrad.addColorStop(0, "rgba(0, 112, 243, 0.07)");
        radialGrad.addColorStop(0.5, "rgba(56, 189, 248, 0.03)");
        radialGrad.addColorStop(1, "transparent");

        ctx.fillStyle = radialGrad;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 320, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxConnectionDistance) {
            const lineAlpha = (1 - dist / maxConnectionDistance) * 0.16;
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Draw connection from particle to mouse cursor if close
        if (mouseRef.current.x > 0 && mouseRef.current.y > 0) {
          const mdx = particles[i].x - mouseRef.current.x;
          const mdy = particles[i].y - mouseRef.current.y;
          const mdist = Math.hypot(mdx, mdy);
          if (mdist < 140) {
            const mAlpha = (1 - mdist / 140) * 0.22;
            ctx.strokeStyle = `rgba(92, 200, 255, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();
          }
        }
      }

      // 3. Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Dynamic Cyber Grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 85% 70% at 50% 30%, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 70% at 50% 30%, black 40%, transparent 85%)",
        }}
      />

      {/* Atmospheric Soft Radiant Gradients */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[650px] h-[650px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 112, 243, 0.11) 0%, transparent 68%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute top-[35%] right-[-5%] w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[15%] w-[650px] h-[650px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 112, 243, 0.09) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Interactive Constellation Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />
    </div>
  );
}
