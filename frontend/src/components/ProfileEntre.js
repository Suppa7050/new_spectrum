import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProfileEntre(props) {
  const [problems, setProblems] = useState([]);
  const [newProblem, setNewProblem] = useState({
    Entre_id: props.user.id,
    question: '',
    detail: ''
  });
  const navigate = useNavigate();

  // Fetch the entrepreneur's problems from the backend
  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get('http://localhost:3031/problems/specificlist', {
          params: {
            Entre_id: props.user.id
          }
        });
        setProblems(response.data.problems);
      } catch (error) {
        console.error('Error fetching problems:', error);
      }
    };

    fetchProblems();
  }, []);

  const handleAnswerClick = (problem) => {
    navigate('/viewques');
    console.log("problem" + problem);
    props.handleAnswerQuestion1(problem);
  };

  // Handle input change for new problem
  const handleInputChange = (event) => {
    setNewProblem({
      ...newProblem,
      [event.target.name]: event.target.value
    });
  };

  // Handle form submission to add a new problem
  const handleAddProblem = async (event) => {
    event.preventDefault();

    try {
      // Send a POST request to add the new problem
      await axios.post('http://localhost:3031/problems/add', newProblem);

      // Clear the form and fetch the updated problems list
      setNewProblem({
        Entre_id: props.user.id,
        question: '',
        detail: ''
      });
    } catch (error) {
      console.error('Error adding problem:', error);
    }
  };

  console.log(props.user);

  return (
    <div>
      <h2>Entrepreneur Profile</h2>

      <h3>My Problems</h3>
      <ul>
        {problems.map((problem) => (
          <li key={problem._id}>
            <h4>{problem.question}</h4>
            <p>{problem.detail}</p>
            <button onClick={() => handleAnswerClick(problem)}>view answers</button>
          </li>
        ))}
      </ul>

      <h3>Add Problem</h3>
      <form onSubmit={handleAddProblem}>
        <label htmlFor="question">Question:</label>
        <textarea id="question" name="question" value={newProblem.question} onChange={handleInputChange} />
        <br />
        <label htmlFor="detail">Detail:</label>
        <textarea id="detail" name="detail" value={newProblem.detail} onChange={handleInputChange} />
        <br />
        <button type="submit">Add Problem</button>
      </form>
    </div>
  );
}

export default ProfileEntre;
