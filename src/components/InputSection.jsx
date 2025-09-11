import React, { useState } from 'react';
import { parseInputData } from '../utils/parseInput';

export default function InputSection({ onDataParsed }) {
  const [rawText, setRawText] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result;
        setRawText(text);
        const parsed = parseInputData(text);
        onDataParsed(parsed);
      };
      reader.readAsText(file);
    }
  };

  const handleParseClick = () => {
    const parsed = parseInputData(rawText);
    onDataParsed(parsed);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>📥 Input Data</h2>
      <textarea
        rows="10"
        cols="80"
        value={rawText}
        onChange={(e) => setRawText(e.target.value)}
        placeholder="Paste raw part data here..."
      />
      <br />
      <input type="file" accept=".txt" onChange={handleFileUpload} />
      <br />
      <button onClick={handleParseClick}>Parse Data</button>
    </div>
  );
}
