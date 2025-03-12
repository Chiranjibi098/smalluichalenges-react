import React, { useRef, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function StopWatch() {
  const [secoundPass, setSecoundPass] = useState(0);
  const [satrt, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handelStart() {
    setStart(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handelStop() {
    clearInterval(intervalRef.current);
  }

  function handelReset() {
    clearInterval(intervalRef.current);
    setSecoundPass(0);
    toast("Please try to stop before reset!");
  }

  useEffect(() => {
    if (satrt != null && now != null) {
      setSecoundPass((now - satrt) / 1000);
    }
  }, [satrt, now]);

  return (
    <div className="Main">
      <h2>Stop Watch</h2>
      <div>
        <p>Stopwatch: {secoundPass.toFixed(2)}</p>
        <div className="btnGroup">
          <div className="startButton">
            <button onClick={handelStart}>Start</button>
          </div>
          <div className="stopButton">
            <button onClick={handelStop}>Stop</button>
          </div>
          <div className="resetButton">
            <button onClick={handelReset}>Reset</button>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
}
