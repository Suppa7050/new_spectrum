import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ProfileStudent({ user }) {
  const [ideas, setIdeas] = useState([]);
  const [problems, setProblems] = useState({});
  const navigate = useNavigate();
  console.log(user.username);
  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await axios.get("http://localhost:3031/ideas/list", {
          params: {
            student_id: user.id,
          },
        });
        setIdeas(response.data.ideas);
      } catch (error) {
        console.error("Error fetching ideas:", error);
      }
    };

    fetchIdeas();
  }, [user.id]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const fetchedProblems = {};

        for (const idea of ideas) {
          const response = await axios.get(
            "http://localhost:3031/problems/specificlist1",
            {
              params: {
                _id: idea.question_id,
              },
            }
          );

          const problem = response.data.problem;
          if (problem) {
            if (fetchedProblems[idea._id]) {
              fetchedProblems[idea._id].push(problem);
            } else {
              fetchedProblems[idea._id] = [problem];
            }
          }
        }

        setProblems(fetchedProblems);
      } catch (error) {
        console.error("Error fetching problems:", error);
      }
    };

    fetchProblems();
  }, [ideas]);

  const handleAnswerClick = () => {
    navigate("/allproblems");
    // console.log("executing");
    // handleAnswerQuestion(problem);
  };
  return (
    <div>
      <h2>My Ideas</h2>
      <ul>
        {ideas.map((idea) => (
          <li key={idea._id}>
            <h4>{idea.title}</h4>
            <p>{idea.description}</p>
            {/* <p>{idea.question_id}</p> */}
            <h5>Problems:</h5>
            {problems[idea._id] ? (
              <ul>
                {problems[idea._id].map((problem) => (
                  <li key={problem._id}>
                    <h6>{problem.question}</h6>
                    <p>{problem.detail}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No problems found</p>
            )}
          </li>
        ))}
      </ul>
      <button onClick={() => handleAnswerClick()}>All problems</button>
    </div>
  );
}

export default ProfileStudent;
