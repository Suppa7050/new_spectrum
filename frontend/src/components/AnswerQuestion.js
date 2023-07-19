import React, { useState } from 'react';
import axios from 'axios';

const AnswerQuestion = ({ question, user }) => {
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState({
    question_id: question._id,
    student_id: user.id,
    title: '',
    description: ''
  });
  console.log(question._id)
  console.log(user.id)
  const handleInputChange = (event) => {
    setNewIdea({
      ...newIdea,
      [event.target.name]: event.target.value
    });
  };

  const handleAddIdea = async (event) => {
    event.preventDefault();

    try {
      // Send a POST request to add the new idea
      await axios.post('http://localhost:3031/ideas/add', newIdea);

      // Clear the form and fetch the updated ideas list
      setNewIdea({
        question_id: question._id,
        student_id: user.id,
        title: '',
        description: ''
      });

      const response = await axios.get('http://localhost:3031/ideas/list');
      setIdeas(response.data.ideas);
    } catch (error) {
      console.error('Error adding idea:', error);
    }
  };

  return (
    <div>
      <h2>Answer Question</h2>
      {question ? (
        <div>
          <h4>{question.question}</h4>
          <p>{question.detail}</p>
          {/* Add your answer input fields and submit button here */}
        </div>
      ) : (
        <p>No question selected.</p>
      )}
      <h3>Add Idea</h3>
      <form onSubmit={handleAddIdea}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={newIdea.title} onChange={handleInputChange} />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={newIdea.description} onChange={handleInputChange} />
        <br />
        <button type="submit">Add Idea</button>
      </form>
    </div>
  );
};

export default AnswerQuestion;
