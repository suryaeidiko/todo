import React, { useEffect, useState } from "react";

const P2_Current_Time = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    let interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
        <nav className="navbar fixed-top navbar-light bg-light">
  <div className="container-fluid">
  <div className="clock">
        <h1 style={{fontSize : '20px'}}>{time.toLocaleTimeString()}</h1>
      </div>
    
  </div>
</nav>      
    </>
  );
};

export default P2_Current_Time;
