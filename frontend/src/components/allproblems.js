import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

const AllProblems= ({ handleAnswerQuestion })  =>{
  const [problems, setProblems] = useState([]);
  
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get('http://localhost:3031/problems/list');
        setProblems(response.data.problems);
      } catch (error) {
        console.error('Error fetching problems:', error);
      }
    };

    fetchProblems();
  }, []);

  const handleAnswerClick = (problem) => {
    navigate('/answerques');
    console.log("executing");
    handleAnswerQuestion(problem);
  };

  return (
    <div>
      <h2>All Problems</h2>
      {problems.length > 0 ? (
        <ul>
          {problems.map((problem) => (
            <li key={problem._id}>
              <h4>{problem.question}</h4>
              <p>{problem.detail}</p>
              <button onClick={() => handleAnswerClick(problem)}>Answer this question</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No problems found.</p>
      )}
    </div>
  );
};

export default AllProblems;
