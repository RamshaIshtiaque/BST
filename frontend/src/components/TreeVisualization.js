import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TreeVisualization.css';

const TreeVisualization = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const treeData = location.state?.treeData;

  if (!treeData) {
    return <div>Loading...</div>;
  }

  const treeStructure = JSON.parse(treeData.treeStructure);

  // Function to render the tree
  const renderTree = (node) => {
    if (!node) {
      return null;
    }
    return (
      <div className="tree-node">
        <div>{node.value}</div>
        <div className="tree-branch">
          <div>{renderTree(node.left)}</div>
          <div>{renderTree(node.right)}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="tree-container">
      <h2>Tree Visualization</h2>
      {renderTree(treeStructure)}
      <button className="back-button" onClick={() => navigate('/')}>Enter New Numbers</button>
    </div>
  );
};

export default TreeVisualization;



