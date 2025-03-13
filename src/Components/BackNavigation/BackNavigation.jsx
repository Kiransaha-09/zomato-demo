import React from "react";
import { useNavigate } from "react-router-dom";

function BackNavigation() {
  const navigate = useNavigate();
  const backButton = () => {
    navigate(-1);
  };
  return (
    <div>
      <button onClick={backButton}>Back</button>
    </div>
  );
}

export default BackNavigation;
