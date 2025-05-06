import React from "react";

import "./PromoCode.css";

function PromoCode() {
  return (
    <>
      <div className="promo-container">
        <p className="Promo-heading">Apply Promo code</p>
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
