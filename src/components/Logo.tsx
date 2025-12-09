const Logo = ({ className = "w-14 h-14" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background rectangle */}
      <rect
        x="5"
        y="15"
        width="90"
        height="70"
        rx="4"
        className="fill-primary"
      />
      
      {/* Chart line going up */}
      <polyline
        points="10,70 35,55 55,62 90,25"
        className="stroke-primary-foreground"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Arrow head at the end of line */}
      <polyline
        points="80,22 90,25 87,35"
        className="stroke-primary-foreground"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Letter I in center */}
      <rect
        x="42"
        y="35"
        width="16"
        height="40"
        rx="2"
        className="fill-primary-foreground"
      />
      
      {/* Top bar of I */}
      <rect
        x="38"
        y="32"
        width="24"
        height="6"
        rx="1"
        className="fill-primary-foreground"
      />
      
      {/* Bottom bar of I */}
      <rect
        x="38"
        y="72"
        width="24"
        height="6"
        rx="1"
        className="fill-primary-foreground"
      />
    </svg>
  );
};

export default Logo;
