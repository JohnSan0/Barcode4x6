import React, { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';

function SingleBarcode({ value, height, width = 2 }) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      JsBarcode(svgRef.current, value, {
        format: 'CODE128',
        width,
        height,
        displayValue: true,
        textAlign: 'center',
        textMargin: 0,
        fontSize: 16,
        margin: 0,
      });
    }
  }, [value, height, width]);

  return (
    <svg
      ref={svgRef}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
}

export default function LabelSheet({ labels }) {
  return labels.map((item, idx) => (
    <React.Fragment key={idx}>
      {/* Large Label */}
      <div
        style={{
          width: '5.5in',
          height: '1in',
          margin: '0.05in',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SingleBarcode value={item.reference} height={40} width={2} />
      </div>

      {/* Small Label */}
      <div
        style={{
          width: '1.5in',
          height: '1in',
          margin: '0.05in',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SingleBarcode value={item.reference} height={30} width={1.6} />
      </div>
    </React.Fragment>
  ));
}
