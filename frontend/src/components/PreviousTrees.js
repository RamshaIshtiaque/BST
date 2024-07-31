import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PreviousTrees.css';

function PreviousTrees() {
  const [trees, setTrees] = useState([]);

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/trees/previous');
        setTrees(response.data);
      } catch (error) {
        console.error("There was an error fetching the previous trees!", error);
      }
    };

    fetchTrees();
  }, []);

  const renderTree = (node) => {
    if (!node) {
      return null;
    }
    return (
      <div className="tree-node">
        <div className="node-value">{node.value}</div>
        <div className="tree-children">
          <div className="tree-left">{renderTree(node.left)}</div>
          <div className="tree-right">{renderTree(node.right)}</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1>Previous Trees</h1>
      {trees.length === 0 ? (
        <p>No previous trees found.</p>
      ) : (
        trees.map((tree, index) => (
          <div key={index} className="tree-container">
            <h2>Tree {index + 1}</h2>
            <p>Numbers: {tree.numbers}</p>
            {renderTree(JSON.parse(tree.treeStructure))}
          </div>
        ))
      )}
      <button className="back-button" onClick={() => window.location.href = '/'}>Enter New Numbers</button>
    </div>
  );
}

export default PreviousTrees;


