export default function CircuitBg({ opacity = 0.18 }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Grid pattern */}
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="#2563EB"
            strokeWidth="0.5"
          />
        </pattern>
        {/* Dot pattern at intersections */}
        <pattern id="dots" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="0" cy="0" r="1.2" fill="#60a5fa" />
          <circle cx="60" cy="0" r="1.2" fill="#60a5fa" />
          <circle cx="0" cy="60" r="1.2" fill="#60a5fa" />
          <circle cx="60" cy="60" r="1.2" fill="#60a5fa" />
        </pattern>
      </defs>

      {/* Background grid */}
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#dots)" />

      {/* Circuit trace lines */}
      <g stroke="#2563EB" strokeWidth="1" fill="none" opacity="0.6">
        <polyline points="0,120 180,120 180,300 360,300" />
        <polyline points="120,0 120,180 300,180 300,60" />
        <polyline points="480,0 480,240 600,240 600,420" />
        <polyline points="0,360 240,360 240,480 420,480" />
        <polyline points="540,120 540,360 720,360" />
        <polyline points="660,0 660,180 840,180 840,300 960,300" />
      </g>

      {/* Nodes at corners */}
      <g fill="#2563EB">
        <circle cx="180" cy="120" r="3" />
        <circle cx="180" cy="300" r="3" />
        <circle cx="360" cy="300" r="3" />
        <circle cx="120" cy="180" r="3" />
        <circle cx="300" cy="180" r="3" />
        <circle cx="300" cy="60" r="3" />
        <circle cx="480" cy="240" r="3" />
        <circle cx="600" cy="240" r="3" />
        <circle cx="600" cy="420" r="3" />
        <circle cx="240" cy="360" r="3" />
        <circle cx="240" cy="480" r="3" />
        <circle cx="420" cy="480" r="3" />
        <circle cx="540" cy="360" r="3" />
        <circle cx="720" cy="360" r="3" />
        <circle cx="660" cy="180" r="3" />
        <circle cx="840" cy="180" r="3" />
        <circle cx="840" cy="300" r="3" />
        <circle cx="960" cy="300" r="3" />
      </g>
    </svg>
  );
}
