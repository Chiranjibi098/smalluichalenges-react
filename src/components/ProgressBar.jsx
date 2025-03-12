import React, { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let x = null;
    if (progress != 100) {
      x = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 10);
    }

    return () => {
      if (x) clearInterval(x);
    };
  }, [progress]);

  return (
    <div className="Main">
      <h2>Progress Bar</h2>
      <div>
        <p>Progress Bar:{progress}%</p>
        <progress value={progress} max={100}></progress>
      </div>
    </div>
  );
}
