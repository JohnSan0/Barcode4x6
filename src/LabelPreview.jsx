import React, { useEffect, useState } from 'react';
import LabelSheet from './components/LabelSheet';

export default function LabelPreview() {
  const [labelData, setLabelData] = useState([]);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.type === 'LABEL_DATA') {
        setLabelData(event.data.payload.labels);
        setTimeout(() => {
          window.print();
        }, 500);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  if (!labelData || labelData.length === 0) {
    return <div className="p-8 text-center">Loading label preview...</div>;
  }

  return (
    <div className="p-4 bg-white">
      <div
        style={{
          width: '6in',
          height: '4in',
          margin: '0 auto',
          border: '1px solid black',
          backgroundColor: 'white',
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'flex-start',
        }}
      >
        <LabelSheet labels={labelData} />
      </div>
    </div>
  );
}
