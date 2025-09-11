import React, { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';

export default function BarcodeGenerator({ value, options = {} }) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      JsBarcode(svgRef.current, value, {
        format: 'CODE128',
        displayValue: false,
        height: 40,
        width: 2,
        margin: 0,
        ...options,
      });
    }
  }, [value, options]);

  return <svg ref={svgRef} />;
}
