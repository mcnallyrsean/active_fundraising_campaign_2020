import React, { useEffect, useState } from "react";

export default function ProgressBar({ donationsTotal, goal }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress((donationsTotal / goal) * 100);
  }, [donationsTotal]);

  return (
    <div
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
      className="progress-bar"
    >
      <div className="progress" style={{ width: `${progress}%` }}></div>
      <span className="aria-text">{progress}%</span>
    </div>
  );
}
