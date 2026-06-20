import React from "react";
import { motion } from "motion/react";

interface MascotProps {
  expression: "waving" | "praying" | "reading" | "celebrating" | "thinking" | "sleeping";
  className?: string;
  size?: number;
}

export default function Mascot({ expression, className = "", size = 200 }: MascotProps) {
  // Mane colors
  const maneColor = "#FF843D"; // vivid rich cartoon orange
  const innerManeColor = "#FFAA4D"; // lighter warm orange
  const faceColor = "#FFE194"; // warm yellowish butter
  const snoutColor = "#FFF8E3"; // light creamy white
  const pinkCheek = "#FFAEC1";
  const eyeColor = "#2B1A0E"; // Deep dark brown/black

  // Gentle breathing state for motion
  const idleTransition = {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {/* Decorative stars / bubbles for specific expressions */}
      {expression === "celebrating" && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute text-yellow-400 text-xl font-bold"
              style={{
                top: `${15 + i * 15}%`,
                left: `${10 + (i % 2) * 60 + i * 5}%`,
              }}
              animate={{
                scale: [0.5, 1.2, 0.5],
                y: [-10, -30, -10],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ⭐
            </motion.span>
          ))}
        </div>
      )}

      {expression === "sleeping" && (
        <div className="absolute top-2 right-4 pointer-events-none flex flex-col space-y-1">
          {["z", "Z", "Zzz"].map((z, i) => (
            <motion.span
              key={i}
              className="font-bold text-violet-400 text-sm"
              style={{ marginLeft: i * 8 }}
              animate={{
                opacity: [0, 1, 0],
                y: [10, -20],
                scale: [0.8, 1.2],
              }}
              transition={{
                delay: i * 0.6,
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              {z}
            </motion.span>
          ))}
        </div>
      )}

      {/* Main SVG Mascot */}
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-md"
        animate={
          expression === "celebrating"
            ? { y: [0, -15, 0], scale: [1, 1.05, 1] }
            : { y: [0, -4, 0] }
        }
        transition={expression === "celebrating" ? { duration: 0.8, repeat: Infinity } : idleTransition}
      >
        {/* BACKGROUND GLOW */}
        <circle cx="100" cy="100" r="90" fill="url(#glowGradient)" opacity="0.15" />

        <defs>
          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD86B" />
            <stop offset="100%" stopColor="#FFD86B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. THE BIG PUFFY MANE */}
        <motion.g
          animate={{ rotate: [0, 3, -3, 0] }}
          transition={idleTransition}
          transformOrigin="100px 100px"
        >
          {/* Waves of the outer mane - standard fofo circle petals */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 360) / 12;
            const rad = (angle * Math.PI) / 180;
            const cx = 100 + 64 * Math.cos(rad);
            const cy = 100 + 64 * Math.sin(rad);
            return (
              <circle
                key={`outer-mane-${i}`}
                cx={cx}
                cy={cy}
                r="30"
                fill={maneColor}
              />
            );
          })}

          {/* Inner fluffy mane waves */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 360) / 12 + 15;
            const rad = (angle * Math.PI) / 180;
            const cx = 100 + 58 * Math.cos(rad);
            const cy = 100 + 58 * Math.sin(rad);
            return (
              <circle
                key={`inner-mane-${i}`}
                cx={cx}
                cy={cy}
                r="24"
                fill={innerManeColor}
              />
            );
          })}
        </motion.g>

        {/* 2. THE LION EARS */}
        {/* Left Ear */}
        <path d="M 50,55 Q 35,35 60,30 Z" fill={maneColor} stroke="#BA4E0B" strokeWidth="2" />
        <path d="M 52,50 Q 42,38 58,35 Z" fill="#FFBCCB" />
        {/* Right Ear */}
        <path d="M 150,55 Q 165,35 140,30 Z" fill={maneColor} stroke="#BA4E0B" strokeWidth="2" />
        <path d="M 148,50 Q 158,38 142,35 Z" fill="#FFBCCB" />

        {/* 3. THE FACE BASE */}
        <circle cx="100" cy="105" r="54" fill={faceColor} stroke="#D4A735" strokeWidth="2.5" />

        {/* 4. PINK CHEEKS */}
        <circle cx="62" cy="118" r="8" fill={pinkCheek} opacity="0.8" />
        <circle cx="138" cy="118" r="8" fill={pinkCheek} opacity="0.8" />

        {/* 5. EYES & EYEBROWS */}
        {/* Eyebrows */}
        <path d="M 60,86 Q 72,80 78,88" fill="none" stroke="#664614" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 140,86 Q 128,80 122,88" fill="none" stroke="#664614" strokeWidth="3.5" strokeLinecap="round" />

        {/* Dynamic eye renders */}
        {(expression === "praying" || expression === "sleeping") ? (
          // Sleeping/Praying closed happy curve eyes
          <>
            <path d="M 58,98 Q 72,108 80,98" fill="none" stroke={eyeColor} strokeWidth="5.5" strokeLinecap="round" />
            <path d="M 142,98 Q 128,108 120,98" fill="none" stroke={eyeColor} strokeWidth="5.5" strokeLinecap="round" />
          </>
        ) : (
          // Sparkling cute open gloss eyes
          <>
            {/* Left Eye */}
            <g>
              <circle cx="70" cy="98" r="11" fill={eyeColor} />
              {/* Eye sparkle reflection */}
              <circle cx="67" cy="94" r="3.5" fill="#FFFFFF" />
              <circle cx="73" cy="101" r="1.5" fill="#FFFFFF" />
            </g>
            {/* Right Eye */}
            <g>
              <circle cx="130" cy="98" r="11" fill={eyeColor} />
              {/* Eye sparkle reflection */}
              <circle cx="127" cy="94" r="3.5" fill="#FFFFFF" />
              <circle cx="133" cy="101" r="1.5" fill="#FFFFFF" />
            </g>
          </>
        )}

        {/* 6. MUZZLE & NOSE */}
        {/* Twin white muzzle circles */}
        <circle cx="91" cy="118" r="12" fill={snoutColor} />
        <circle cx="109" cy="118" r="12" fill={snoutColor} />

        {/* Cute small brown heart/triangle nose */}
        <path d="M 94,111 L 106,111 C 108,111 104,119 100,121 C 96,119 92,111 94,111 Z" fill="#6B3512" />

        {/* Smile under the nose */}
        {expression === "reading" || expression === "praying" || expression === "sleeping" ? (
          // Soft smile line
          <path d="M 93,122 Q 100,128 107,122" fill="none" stroke="#6B3512" strokeWidth="3" strokeLinecap="round" />
        ) : (
          // Open playful happy mouth with pink tongue
          <g>
            <path d="M 92,122 Q 100,135 108,122 Z" fill="#911F24" />
            <path d="M 95,126 Q 100,134 105,126 Z" fill="#FF8BA7" />
          </g>
        )}

        {/* 7. EXPRESSION-SPECIFIC ACCESSORIES / PAWS */}
        {/* WAVING PAW ANIMATION */}
        {expression === "waving" && (
          <g>
            <motion.g
              animate={{ rotate: [-8, 22, -8] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              transformOrigin="30px 145px"
            >
              {/* Left hand waving */}
              <path d="M 32,145 C 10,135 15,110 32,125 Z" fill={faceColor} stroke="#BA4E0B" strokeWidth="2" />
              <circle cx="23" cy="132" r="4" fill="#FFBCCB" />
            </motion.g>
            {/* Right hand normal rest */}
            <path d="M 168,145 C 185,140 180,125 168,130 Z" fill={faceColor} stroke="#BA4E0B" strokeWidth="2" />
          </g>
        )}

        {/* CELEBRATING PAWS */}
        {expression === "celebrating" && (
          <g>
            {/* Both palms high up */}
            <path d="M 45,130 C 25,110 40,90 55,105 Z" fill={faceColor} stroke="#BA4E0B" strokeWidth="2" />
            <path d="M 155,130 C 175,110 160,90 145,105 Z" fill={faceColor} stroke="#BA4E0B" strokeWidth="2" />
          </g>
        )}

        {/* THINKING PAW */}
        {expression === "thinking" && (
          <g>
            {/* Paw to mouth/chin */}
            <path d="M 130,150 C 145,140 120,118 108,128 Z" fill={faceColor} stroke="#BA4E0B" strokeWidth="2" />
            <path d="M 35,145 C 18,140 25,125 35,130 Z" fill={faceColor} stroke="#BA4E0B" strokeWidth="2" />
          </g>
        )}

        {/* PRAYING PAWS */}
        {expression === "praying" && (
          <g>
            {/* Paws together in the center bottom */}
            <ellipse cx="90" cy="144" rx="12" ry="10" fill={faceColor} stroke="#BA4E0B" strokeWidth="2" />
            <ellipse cx="110" cy="144" rx="12" ry="10" fill={faceColor} stroke="#BA4E0B" strokeWidth="2" />
            <text x="100" y="148" textAnchor="middle" fontSize="11" fill="#FF8BA7" fontWeight="bold">💖</text>
          </g>
        )}

        {/* READING BIBLE */}
        {expression === "reading" && (
          <g>
            {/* Open Holy Bible illustration */}
            <rect x="70" y="140" width="60" height="34" rx="4" fill="#6A49CC" stroke="#FFFFFF" strokeWidth="2" />
            {/* Pages */}
            <rect x="74" y="142" width="24" height="30" rx="2" fill="#FFFFFF" />
            <rect x="102" y="142" width="24" height="30" rx="2" fill="#FFFFFF" />
            {/* Bible lines */}
            <line x1="78" y1="148" x2="94" y2="148" stroke="#D1D5DB" strokeWidth="2" />
            <line x1="78" y1="154" x2="94" y2="154" stroke="#D1D5DB" strokeWidth="2" />
            <line x1="78" y1="160" x2="94" y2="160" stroke="#D1D5DB" strokeWidth="2" />
            <line x1="106" y1="148" x2="122" y2="148" stroke="#D1D5DB" strokeWidth="2" />
            <line x1="106" y1="154" x2="122" y2="154" stroke="#D1D5DB" strokeWidth="2" />
            {/* Golden cross */}
            <path d="M 114,158 L 114,166 M 110,161 L 118,161" stroke="#FFAC12" strokeWidth="2.5" strokeLinecap="round" />

            {/* Paws holding the bible on left & right sides */}
            <circle cx="70" cy="155" r="7" fill={faceColor} stroke="#6B3512" strokeWidth="1.5" />
            <circle cx="130" cy="155" r="7" fill={faceColor} stroke="#6B3512" strokeWidth="1.5" />
          </g>
        )}

        {/* SLEEPING NO EXTRAS, just soft paws */}
        {expression === "sleeping" && (
          <g>
            {/* Little closed eyes and calm paws folded */}
            <path d="M 85,145 C 80,140 120,140 115,145 Z" fill={faceColor} stroke="#BA4E0B" strokeWidth="1.5" />
          </g>
        )}
      </motion.svg>
    </div>
  );
}
