import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EnterNumbers from './components/EnterNumbers';
import TreeVisualization from './components/TreeVisualization';
import PreviousTrees from './components/PreviousTrees';

function App() {
  const [data, setData] = useState(null);

//  useEffect(() => {
//    axios.get('http://localhost:8080/api/trees/previous')
//      .then(response => {
//        setData(response.data);
//      })
//      .catch(error => {
//        console.error('There was an error fetching the data!', error);
//      });
//  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Final Sprint DSA</h1>
          <Routes>
            <Route path="/" element={<EnterNumbers />} />
            <Route path="/tree" element={<TreeVisualization data={data} />} />
            <Route path="/previous" element={<PreviousTrees />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;



