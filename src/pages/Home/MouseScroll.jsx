

function MouseScrollIcon() {
  return (
    <svg 
      width="24" 
      height="40" 
      viewBox="0 0 24 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Contorno do mouse */}
      <rect 
        x="1" 
        y="1" 
        width="22" 
        height="38" 
        rx="11" 
        stroke="white" 
        strokeWidth="2" 
        fill="none"
      />
      
      {/* Bolinha animada */}
      <circle 
        cx="12" 
        cy="11" 
        r="3" 
        fill="white"
        className="animate-scroll-dot"
      />
    </svg>
  );
}

export default MouseScrollIcon;