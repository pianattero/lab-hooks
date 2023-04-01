import React from "react";

export const Button = ({ text, onClick }) => {
  return (
    <div className="btn btn-primary">
      <button onClick={onClick}>{text}</button>
    </div>
  )
}
