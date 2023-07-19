import React, { useState, useEffect } from "react";
import axios from "axios";

function Viewques(props) {
  const [ideas, setIdeas] = useState([]);
  const temp = JSON.stringify(props, null, 2);
  const parsedProps = JSON.parse(temp);
  const question1 = parsedProps.question1;
  const questionId = question1._id.toString();

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3031/ideas/specificlist",
          {
            params: {
              question_id: questionId,
            },
          }
        );
        setIdeas(response.data.ideas);
      } catch (error) {
        console.error("Error fetching ideas:", error);
      }
    };

    fetchIdeas();
  }, []);

  return (
    <div>
      <h2>Answer Question</h2>
      {question1 ? (
        <div>
          <h4>{question1.question}</h4>
          <p>{question1.detail}</p>
          <h3>Fetched Ideas</h3>
          <ul>
            {ideas.map((idea) => (
              <li key={idea._id}>
                <h4>{idea.title}</h4>
                <p>{idea.description}</p>
              </li>
            ))}
          </ul>
          {/* Add your answer input fields and submit button here */}
        </div>
      ) : (
        <p>No question selected.</p>
      )}
    </div>
  );
}

export default Viewques;
