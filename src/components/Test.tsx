import { motion } from "framer-motion";

export default function FuturisticHUD() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <svg width="400" height="400" viewBox="0 0 400 400">
        {/* Círculos concêntricos */}
        {[80, 120, 160].map((r, i) => (
          <circle
            key={i}
            cx="200"
            cy="200"
            r={r}
            stroke="cyan"
            strokeWidth="2"
            fill="none"
            className="opacity-70"
          />
        ))}

        {/* Radar rotativo */}
        <motion.line
          x1="200"
          y1="200"
          x2="200"
          y2="40"
          stroke="cyan"
          strokeWidth="2"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          style={{ originX: "200px", originY: "200px" }}
        />

        {/* Pontos simulando objetos detectados */}
        <circle cx="280" cy="200" r="5" fill="cyan" />
        <circle cx="150" cy="100" r="5" fill="cyan" />
      </svg>
    </div>
  );
}