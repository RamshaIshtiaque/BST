import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EnterNumbers.css'

const EnterNumbers = () => {
  const [numbers, setNumbers] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with numbers:', numbers);

    axios.post('http://localhost:8080/api/trees/process', numbers, {
      headers: {
        'Content-Type': 'text/plain'
      }
    })
      .then(response => {
        console.log('Data submitted successfully:', response.data);
        navigate('/tree', { state: { treeData: response.data } });
      })
      .catch(error => {
        console.error('There was an error submitting the data!', error);
      });

  };

  return (
    <div>
      <h2>Enter Numbers</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="numbers"
          placeholder="Enter numbers separated by commas"
          value={numbers}
          onChange={e => setNumbers(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <Link to="/previous" className="view-trees-button">View Previous Trees</Link>
    </div>
  );
};

export default EnterNumbers;



