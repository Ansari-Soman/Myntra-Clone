import React from "react";

function LoadingSpinner() {
  return (
    <>
      <div className="text-center text-black mt-5 my-3">
        <div
          className="spinner-border"
          role="status"
          style={{
            height: "100px",
            width: "100px",
          }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default LoadingSpinner;
