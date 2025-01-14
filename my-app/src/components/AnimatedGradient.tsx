import React, { useEffect, useRef } from "react";

const AnimatedGradient: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set initial canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Gradient properties
    let gradientStart = 0;
    const gradientSpeed = .001;

    // Draw the gradient
    const drawGradient = () => {
      const width = canvas.width;
      const height = canvas.height;

      // Clear the canvas
      ctx.clearRect(0, 0, width, height);

      // Create gradient
      const gradient = ctx.createLinearGradient(
        width * Math.sin(gradientStart),
        height * Math.cos(gradientStart),
        width * Math.cos(gradientStart),
        height * Math.sin(gradientStart)
      );

      // Add color stops
      gradient.addColorStop(0, `hsl(${(gradientStart * 180) % 360}, 70%, 50%)`);
      gradient.addColorStop(0.5, `hsl(${((gradientStart * 180) + 120) % 360}, 70%, 50%)`);
      gradient.addColorStop(1, `hsl(${((gradientStart * 180) + 240) % 360}, 70%, 50%)`);

      // Fill canvas
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    // Animation loop
    const animateGradient = () => {
      gradientStart += gradientSpeed;
      drawGradient();
      requestAnimationFrame(animateGradient);
    };

    // Resize handling
    const handleResize = () => {
      setCanvasSize();
      drawGradient();
    };
    window.addEventListener("resize", handleResize);

    // Start animation
    animateGradient();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: "block" }} className="fixed inset-0 opacity-10" />;
};

export default AnimatedGradient;
