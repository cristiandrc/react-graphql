import React from "react";
const Notify = ({ errorMessage }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: "2px",
        top: "2px",
        background: "red",
        padding: "2px 15px",
      }}
    >
      {errorMessage}
    </div>
  );
};
export default Notify;
