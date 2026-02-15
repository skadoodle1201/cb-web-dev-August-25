import React from "react";

function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          border: "5px solid #ccc",
          borderTop: "5px solid #007bff",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />

      <p style={{ marginTop: "15px", color: "#555" }}>Loading...</p>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

export default Loading;
