const HeartbeatLine = () => {
  // ECG-like SVG path
  const ecgPath =
    "M0,50 L30,50 L35,50 L40,30 L45,70 L50,20 L55,80 L60,50 L65,50 L100,50 L130,50 L135,50 L140,30 L145,70 L150,20 L155,80 L160,50 L165,50 L200,50 L230,50 L235,50 L240,30 L245,70 L250,20 L255,80 L260,50 L265,50 L300,50 L330,50 L335,50 L340,30 L345,70 L350,20 L355,80 L360,50 L365,50 L400,50";

  return (
    <div className="absolute inset-x-0 bottom-0 overflow-hidden pointer-events-none opacity-30 heartbeat-pulse">
      <svg
        viewBox="0 0 400 100"
        preserveAspectRatio="none"
        className="w-full h-20"
        fill="none"
      >
        <path
          d={ecgPath}
          stroke="hsl(var(--ecg-line))"
          strokeWidth="2"
          className="heartbeat-line"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default HeartbeatLine;
