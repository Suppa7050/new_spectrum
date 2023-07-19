// import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Login_1 from "./components/Login_1";
// import Profile from './components/Profile';
// import Entre_myprob from './components/Entre_myprob';
import Frontpage from "./components/Frontpage";
import Detail_idea from "./components/Detail_idea";
import Detail_prob from "./components/Detail_prob";
import Entre_1 from "./components/Entre_1";
import Entre_myprob from "./components/Entre_myprob";
import Entre_postprob from "./components/Entre_postprob";
import Filter from "./components/Filter";
import Home from "./components/Home";
// import Login_1 from "./components/Login_1";
import Signup from "./components/Signup";
import Signup_ent from "./components/Signup_ent";
import Signup_stu from "./components/Signup_stu";
import Student_1 from "./components/Student1";
import Student_myideas from "./components/Student_myideas";
import Student_suggsol from "./components/Student_suggsol";
// import { Routes, Route, Router } from 'react-router-dom';
// import Navbarltst from "./components/Navbarltst";
import { BrowserRouter } from "react-router-dom";
import Navbarr from "./components/Navbarr";
import Detail_soln from "./components/Detail_soln";
import AboutUs from "./components/AboutUs";
import About from "./components/About";
import Footer from "./components/Footer";
import FrontPage from "./components/Frontpage";
import Navbarltst from "./components/Navbarltst";
import ProfileStudent from "./components/ProfileStudent";
import ProfileEntre from "./components/ProfileEntre";
import AllProblems from "./components/allproblems";
import AnswerQuestion from "./components/AnswerQuestion";
import Viewques from "./components/Viewques";
// import user from '../../backend/express-backend/models/user';
function App() {
  const [loginResult, setLoginResult] = useState(null);
  const [questionData, setQuestionData] = useState(null);
  const [questionData1, setQuestionData1] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const storedLoginResult = localStorage.getItem("loginResult");
    if (storedLoginResult) {
      setLoginResult(JSON.parse(storedLoginResult));
    }
  }, []);
  const handleLogin = (result) => {
    setLoginResult(result);
    // Save loginResult to localStorage
    localStorage.setItem("loginResult", JSON.stringify(result));
  };

  // const handleLogin = (result) => {
  //   setLoginResult(result);
  // };
  const handleAnswerQuestion = (question) => {
    setQuestionData(question);
    // navigate('/answerques');
  };
  const handleAnswerQuestion1 = (question1) => {
    setQuestionData1(question1);
    // navigate('/answerques');
  };
  // Handle logout
  const handleLogout = () => {
    setLoginResult(null);
    // Clear loginResult from localStorage
    localStorage.removeItem("loginResult");
    // navigate('/login');
  };
  // const handleLogoutClick = () => {
  //   // Call the logout handler passed from the parent component
  //   handleLogout();
  // navigate('/login'); // Navigate to the login page or any other desired route
  // };

  // Handle routes based on login result
  if (loginResult && loginResult.success) {
    // Logged in successfully, handle roles or other conditions if needed
    if (loginResult.role === "student") {
      // Admin route
      return (
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbarltst handleLogout={handleLogout} />
                  <FrontPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <Navbarltst handleLogout={handleLogout} />
                  <ProfileStudent user={loginResult} handleAnswerQuestion={handleAnswerQuestion} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Navbarltst handleLogout={handleLogout} />
                  <About />
                  <Footer />
                </>
              }
            />

            <Route
              path="/allproblems"
              element={
                <AllProblems handleAnswerQuestion={handleAnswerQuestion} />
              }
            />
            <Route
              path="/answerques"
              element={
                <AnswerQuestion question={questionData} user={loginResult} />
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Navbarltst />
                  <Login_1 handleLogin={handleLogin} />
                  <Footer />
                </>
              }
            />
            {/* Other admin routes */}
          </Routes>
        </div>
      );
    } else if (loginResult.role === "entrepreneur") {
      // User route
      return (
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbarltst handleLogout={handleLogout} />
                  <FrontPage />
                  <Footer />
                </>
              }
            />
            {/* <Route path="/profile" element={<><Navbarltst /><Entre_myprob /><Footer /></>} /> */}
            <Route
              path="/profile"
              element={
                <>
                  <Navbarltst handleLogout={handleLogout} />
                  <ProfileEntre user={loginResult} handleAnswerQuestion1={handleAnswerQuestion1} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Navbarltst />
                  <About />
                  <Footer />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Navbarltst />
                  <Login_1 handleLogin={handleLogin} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/viewques"
              element={
                <>
                  <Navbarltst />
                  <Viewques question1={questionData1}/>
                  <Footer />
                </>
              }
            />
            {/* Other user routes */}
          </Routes>
        </div>
      );
    } else {
      // Handle other roles or conditions as needed
    }
  } else {
    // Not logged in or login failed, show login route
    return (
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbarltst handleLogout={handleLogout} />
                <FrontPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Navbarltst />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Navbarltst />
                <Login_1 handleLogin={handleLogin} />
                <Footer />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Navbarltst />
                <Signup_stu />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbarltst />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/allproblems"
            element={
              <>
                <Navbarltst />
                <AllProblems handleAnswerQuestion={handleAnswerQuestion} />
                <Footer />
              </>
            }
          />
          <Route
            path="/answerques"
            element={<AnswerQuestion question={questionData} />}
          />
          {/* Other routes for non-logged-in users */}
        </Routes>
      </div>
    );
  }
}

export default App;
