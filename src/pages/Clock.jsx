import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="page clock-page">
      <div className="clock-box">
        <div className="clock-title">Live Clock</div>
        <div className="clock-time">
          {time.toLocaleTimeString()}
        </div>
        <div className="clock-day">
          {time.toLocaleDateString(undefined, { weekday: "long" })}
        </div>
      </div>
    </div>
  );
}

export default Clock;
