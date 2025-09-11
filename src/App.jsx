import React from 'react';
import InputSection from './components/InputSection';

function App() {
  const handleDataParsed = (parsedData) => {
    const previewWindow = window.open('/label-preview', '_blank');

    const waitForWindowLoad = setInterval(() => {
      if (previewWindow && previewWindow.document.readyState === 'complete') {
        clearInterval(waitForWindowLoad);
        previewWindow.postMessage(
          {
            type: 'LABEL_DATA',
            payload: {
              labels: parsedData, 
            },
          },
          '*'
        );
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          🖨️ Barcode Label Generator
        </h1>

        <div className="bg-white shadow rounded-lg p-6">
          {/* Input Section handles text or file upload and parsing */}
          <InputSection onDataParsed={handleDataParsed} />
        </div>
      </div>
    </div>
  );
}

export default App;
