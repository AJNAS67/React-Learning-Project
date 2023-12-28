import React, { useEffect } from 'react';
// import generateBarcode from './generateBarcode';
import JsBarcode from 'jsbarcode';
import BarCode from 'react-barcode';


function generateBarcode(productDetails, quantity, productCategory, Rs) {
    // Concatenate relevant details to create a unique identifier
    const identifier = `${productDetails}  | ${quantity} | ${productCategory} | ${Rs}/-`;
    // Curcumin Capsule | 30 Capsules | Health Supplement | Rs. 399/-
  
    // Generate barcode
    JsBarcode("#barcode", 'ahbas kp ', {
      format: "CODE128",
      displayValue: false,
      fontSize: 1,
      margin: 10,
    //   width:1
    });
  }

function BarcodeGenerator({ productDetails, quantity, productCategory }) {
  useEffect(() => {
    generateBarcode(productDetails, quantity, productCategory);
  }, [productDetails, quantity, productCategory]);

 
  return (
    <div>
      <div style={{'padding-top':'100px' }}>
      <svg id="barcode"></svg>
      </div>
 
    </div>
  );
}

export default BarcodeGenerator