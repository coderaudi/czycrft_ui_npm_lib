import React from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div style={{ width: "100%", height: "20px", border: "1px solid #ccc" }}>
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "blue",
        }}
      />
    </div>
  );
};

export default ProgressBar;
