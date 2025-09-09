export default function Marquee() {
  return (
    <div className="absolute top-0 w-full overflow-hidden bg-[#232776] shadow-[2px_2px_10px_#232776] px-2 py-1">
      {/* Glow line overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #23277600, #23277600 1px, #040a2444 1px, #040a2444 3px),
                            repeating-linear-gradient(90deg, #23277600, #23277600 2px, #040a2444 2px, #040a2444 3px)`,
        }}
      />

      {/* Scrolling text */}
      <div className="relative z-20 whitespace-nowrap">
        <p
          className="inline-block uppercase font-bold text-[12px] font-sans text-[#29cac8] px-10"
          style={{
            fontFamily: "'Press Start 2P', sans-serif",
            animation: 'text-line-glow 2s linear infinite, marquee 10s linear infinite',
          }}
        >
          Your pixelated text here • Your pixelated text here • Your pixelated text here
        </p>
      </div>

      {/* Animated glow line */}
      <div
        className="absolute top-0 h-full"
        style={{
          width: '3px',
          animation: 'line-glow 3.5s linear infinite steps(50)',
        }}
      />

      {/* Keyframes */}
      <style jsx>{`
        @keyframes text-line-glow {
          0% { text-shadow: 0px 0px 0px #29cac8; }
          50% { text-shadow: 0px 0px 4px #29cac8; }
        }
        @keyframes line-glow {
          0% { right: -2%; background-color: #29cac8; box-shadow: 0 0 20px #ffd2fe00; }
          50% { right: 102%; background-color: #29cac8; box-shadow: 0 0 30px #ffd2feff; }
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}