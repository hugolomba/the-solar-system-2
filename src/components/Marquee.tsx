

export default function Marquee({ curiosities }: { curiosities?: string[] }) {
  if (!curiosities || curiosities.length === 0) return null;

  return (
    <div className=" w-full overflow-hidden bg-[#232776] shadow-[2px_2px_10px_#232776] px-2 py-1 max-lg:absolute">
      {/* Glow line overlay */}
      <div
        className=" inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #23277600, #23277600 1px, #040a2444 1px, #040a2444 3px),
                            repeating-linear-gradient(90deg, #23277600, #23277600 2px, #040a2444 2px, #040a2444 3px)`
        }}
      />

      {/* Scrolling text */}
      <div className="relative z-20 whitespace-nowrap">
        <div
          className=" animate-marquee"
          style={{ display: 'inline-flex', gap: '2rem' }}
        >
          {curiosities.map((text, index) => (
            <span
              key={index}
              className="uppercase font-bold text-[11px] font-sans text-[#29cac8]"
              style={{ fontFamily: "'Press Start 2P', sans-serif" }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}