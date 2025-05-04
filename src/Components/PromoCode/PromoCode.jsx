import React from "react";

import "./PromoCode.css";

function PromoCode() {
  return (
    <>
      <div className="promo-container">
        <h1>Apply Promo code</h1>
        <div class="input-wrapper">
          <input type="text" placeholder="Promo Code" />
          <button>
            <p>Apply</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default PromoCode;
