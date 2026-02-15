import React from "react";

function Error() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "red", marginBottom: "10px" }}>
          Something went wrong
        </h2>
        <p style={{ color: "#555" }}>Please try again later.</p>
      </div>
    </div>
  );
}

export default Error;
