import Detail_idea from "./components/Detail_idea";
import Detail_prob from "./components/Detail_prob";
import Entre_1 from "./components/Entre_1";
import Entre_myprob from "./components/Entre_myprob";
import Entre_postprob from "./components/Entre_postprob";
import Filter from "./components/Filter";
import Home from "./components/Home";
import Login_1 from "./components/Login_1";
import Signup from "./components/Signup";
import Signup_ent from "./components/Signup_ent";
import Signup_stu from "./components/Signup_stu";
import Student_1 from "./components/Student1";
import Student_myideas from "./components/Student_myideas";
import Student_suggsol from "./components/Student_suggsol";
import { Routes, Route, Router } from 'react-router-dom';
// import Navbarltst from "./components/Navbarltst";
import { BrowserRouter } from 'react-router-dom';
import Navbarr from "./components/Navbarr";
import Detail_soln from "./components/Detail_soln";
import AboutUs from "./components/AboutUs";
import About from "./components/About";
import Footer from "./components/Footer";
import FrontPage from "./components/Frontpage";
import Navbarltst from "./components/Navbarltst";
function App() {
  return (
    <Routes>
        <Route path = "/" element = {<><Navbarltst/> <FrontPage/><Footer/></>}/> 
        <Route path = 'login' element = {<> <Navbarltst/> <Login_1/><Footer/></>}/>
         <Route path = 'Signup' element = {  <><Navbarltst/><Signup_stu/> </>}/>
         <Route path = 'about' element = {  <><Navbarltst/> <About/><Footer/></>}/>
         
         {/* <Route path = "signup_student.html" element = {  <><Navbarltst/> </>}/>
         <Route path = "signup_entre.html" element = {  <><Navbarltst/> <Signup_ent/> </>}/> */}
         <Route path = "Student_1.html" element = {  <><Navbarltst/> <Student_1/> </>}/>
         {/* <Route path = "signup_entre.html" element = {  <><Navbarltst/> <Signup_ent/> </>}/> */}
         <Route path = "student_myideas.html" element = {  <><Navbarltst/> <Filter/><Student_myideas/> </>}/>
         <Route path = "detail_idea.html" element = {  <><Navbarltst/> <Detail_idea/> </>}/>
         <Route path = "student_suggsol.html" element = {  <><Navbarltst/> <Filter/> <Student_suggsol/> </>}/>
         <Route path = "detail_soln.html" element = {  <><Navbarltst/> <Detail_soln/> </>}/>
         <Route path = "entre_1.html" element = {  <><Navbarltst/> <Entre_1/> </>}/>
         <Route path = "entre_myprob.html" element = {  <><Navbarltst/> <Filter/> <Entre_myprob/> </>}/>
         <Route path = "detail_prob.html" element = {  <><Navbarltst/> <Detail_prob/> </>}/>
         <Route path = "entre_postprob.html" element = {  <><Navbarltst/> <Filter/> <Entre_myprob/> </>}/>
         <Route path = "*" element = {  <></>}/>
         <Route path = "sample" element = {  <AboutUs/>}/>
        {/* 
        <Route path = "CollegeSignUP" element = {  <CollegeSignUp/> }/>
        <Route path = "GovernmentSignUp" element = {  <GovernmentSignUp/> }/>
        <Route path = "Governmentview" element = { <Governmentview />}/>
        <Route path = "SchoolAndCollegeview" element = { <SchoolAndCollegeview />}/>
        <Route path = "SchoolAndCollegeUpload" element = { <SchoolAndCollegeUpload/> } /> */}

    </Routes>
  );
}
export default App;
