import React from "react";

export default function SciFiLoader() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg
        className="w-32 h-32"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Neon outer circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#0ff"
          strokeWidth="4"
          strokeOpacity="0.6"
          className="animate-spin-slow"
          style={{ filter: "drop-shadow(0 0 10px #0ff)" }}
        />

        {/* Inner rotating arcs */}
        <circle
          cx="50"
          cy="50"
          r="35"
          stroke="#f0f"
          strokeWidth="4"
          strokeDasharray="50"
          strokeDashoffset="0"
          strokeLinecap="round"
          fill="none"
          className="animate-spin-fast"
          style={{ filter: "drop-shadow(0 0 8px #f0f)" }}
        />

        <circle
          cx="50"
          cy="50"
          r="25"
          stroke="#ff0"
          strokeWidth="3"
          strokeDasharray="40"
          strokeDashoffset="0"
          strokeLinecap="round"
          fill="none"
          className="animate-spin-reverse"
          style={{ filter: "drop-shadow(0 0 6px #ff0)" }}
        />

        {/* Center neon dot */}
        <circle
          cx="50"
          cy="50"
          r="5"
          fill="#0ff"
          style={{ filter: "drop-shadow(0 0 12px #0ff)" }}
        />
      </svg>

      {/* Tailwind animations */}
      <style>{`
        @keyframes spin-fast {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        .animate-spin-fast {
          animation: spin-fast 1s linear infinite;
          transform-origin: center;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
          transform-origin: center;
        }
        .animate-spin-reverse {
          animation: spin-reverse 2s linear infinite;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
}