import React from 'react';
import BarcodeGenerator from './BarcodeGenerator';

export default function LabelSmall({ reference }) {
  return (
    <div
      className="label-small"
      style={{
        width: '1.5in',
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
      <div style={{ fontSize: '10px', marginTop: '2px' }}>{reference}</div>
    </div>
  );
}
