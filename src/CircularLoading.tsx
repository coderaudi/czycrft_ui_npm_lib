import React from "react";

interface CircularLoadingProps {
  size?: number;
}

const CircularLoading: React.FC<CircularLoadingProps> = ({ size = 40 }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: "4px solid #ccc",
        borderTopColor: "#00bcd4",
        animation: "spin 1s linear infinite",
      }}
    />
  );
};

export default CircularLoading;
