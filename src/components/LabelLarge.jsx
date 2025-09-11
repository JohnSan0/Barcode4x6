import React from 'react';
import BarcodeGenerator from './BarcodeGenerator';

export default function LabelLarge({ reference }) {
  return (
    <div
      className="label-large"
      style={{
        width: '5.5in',
        height: '1in',
        border: '1px solid black',
        padding: '5px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BarcodeGenerator value={reference} />
      <div style={{ fontSize: '12px', marginTop: '4px' }}>{reference}</div>
    </div>
  );
}
