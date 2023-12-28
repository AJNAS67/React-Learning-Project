import React from "react";
import BarcodeGenerator from "./barcode-generator";
function BarcodeFn() {
    const productDetails = 'Curcumin Capsule ';
    const quantity = '30 Capsules';
    const productCategory = 'Health Supplement';
    const rs='399'
  
    return (
      <div className="barcode">
        {/* <h1>Barcode Generator</h1> */}
        <BarcodeGenerator
          productDetails={productDetails}
          quantity={quantity}
          productCategory={productCategory}
          Rs={rs}
        />
      </div>
    );
  }
  
  export default BarcodeFn;