import React from "react";
import { useNavigate } from "react-router-dom";

import "./BackNavigation.css";

function BackNavigation() {
  const navigate = useNavigate();
  const backButton = () => {
    navigate(-1);
  };
  return (
    <div className="Backnavigation" onClick={backButton}>
      ←
    </div>
  );
}

export default BackNavigation;
