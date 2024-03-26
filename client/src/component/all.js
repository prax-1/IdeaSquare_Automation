import React, { useState,useEffect } from 'react';
import './all.css'; // Import the CSS file for styling

export default function All() {
    const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  const [inputText, setInputText] = useState('');
  const [jsonData, setJsonData] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    const newEntry = { id: Date.now(), text: inputText };
    const newData = [...jsonData, newEntry];
    setJsonData(newData);
    setInputText('');
  };

  const handleSaveToFile = () => {
    const dataStr = JSON.stringify(jsonData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const link = document.createElement('a');
    link.setAttribute('href', dataUri);
    link.setAttribute('download', 'data.json');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="main">
         <div className="fullscreen-container">
     
      {loaded && (
        <div className="main">
          <h1>Main Content</h1>
          {/* Your main content here */}
        </div>
      )}
      {!loaded && (
        <div className="loader">
          {/* Add your loading animation shapes here */}
          <div className="loader-shape"></div>
          <div className="loader-shape"></div>
          <div className="loader-shape"></div>
        </div>
      )}
    </div>
      <h1>Input Component</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text"
        />
        <button onClick={handleButtonClick}>Save Input</button>
        <button onClick={handleSaveToFile}>Save to JSON</button>
      </div>
      <div className="saved-data">
        <h2>Saved Data</h2>
        <ul>
          {jsonData.map(entry => (
            <li key={entry.id}>{entry.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
