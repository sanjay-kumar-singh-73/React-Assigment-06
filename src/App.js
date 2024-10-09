import React, { useState } from "react";
import "./App.css";

function App() {
  const [zoomLevel, setZoomLevel] = useState(1); // For zoom functionality

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };

  const handleZoomOut = () => {
    if (zoomLevel > 1) {
      setZoomLevel(zoomLevel - 0.1);
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <p>Mon Oct 07 2024 16:39:07</p>
      </div>

      {/* Left Panel */}
      <div className="left-panel">
        <h3>Findings</h3>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Atypical Cells</td>
              <td>67</td>
              <td>30%</td>
            </tr>
            <tr>
              <td>Borderline Oncocytes</td>
              <td>50</td>
              <td>20%</td>
            </tr>
            <tr>
              <td>Other Findings</td>
              <td>2</td>
              <td>0.12%</td>
            </tr>
            <tr>
              <td>Neutrophils</td>
              <td>60</td>
              <td>27%</td>
            </tr>
            <tr>
              <td>Lymphocytes</td>
              <td>87</td>
              <td>34%</td>
            </tr>
            <tr>
              <td>Monocytes</td>
              <td>2</td>
              <td>0.12%</td>
            </tr>
            <tr>
              <td>Platelets</td>
              <td>222</td>
              <td>10%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Center Panel for Zoomed-in Image */}
      <div className="center-panel">
        <div className="wsi-zoomed-in" style={{ transform: `scale(${zoomLevel})` }}>
          <h3>WSI Zoomed IN View</h3>
        </div>
        <div className="zoom-controls">
          <button onClick={handleZoomIn}>Zoom In</button>
          <button onClick={handleZoomOut}>Zoom Out</button>
        </div>
        <button className="report-button">Report</button>
      </div>

      {/* Right Panel (Hub) */}
      <div className="right-panel">
        <h3>WSI Zoomed Out View (Hub)</h3>
        <p>Patient ID: XYZ123</p>
        <p>Blood Type: A+</p>
        <div className="pointer">Pointer (indicates area viewed)</div>
      </div>
    </div>
  );
}

export default App;
