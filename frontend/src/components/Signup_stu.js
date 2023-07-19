import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signup_stu() {
    const styleObj = {
        fontSize: 20,
        color: "gold",
    }
    const styleObjq = {
        fontSize: 20,
        color: "black",
    }
//declare usenavigate?
const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        role: ""
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3031/users/signup', formData)
            .then((response) => {
                // Handle successful response
                console.log(response.data);
                setSuccessMessage("User added successfully!");
                navigate('/login');
            })
            .catch((error) => {
                // Handle error
                console.error(error);
            });
    }

    return (
        <div>
            {successMessage && <div>{successMessage}</div>}
            <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
                <label htmlFor="firstname" style={styleObj}>First name:</label><br />
                <input type="text" id="fname" name="firstname" value={formData.firstname} onChange={handleInputChange} /><br />
                <label htmlFor="lastname" style={styleObj}>Last name:</label><br />
                <input type="text" id="lname" name="lastname" value={formData.lastname} onChange={handleInputChange} /><br /><br />
                <label htmlFor="username" style={styleObj}>User name</label><br />
                <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} /><br /><br />
                <label htmlFor="password" style={styleObj}>Password:</label><br />
                <input type="text" id="password" name="password" value={formData.password} onChange={handleInputChange} /><br /><br />
                <label htmlFor="role" style={styleObj}>Role:</label><br />
                <select id="role" name="role" value={formData.role} onChange={handleInputChange}>
                    <option value="">Select Role</option>
                    <option value="student">Student</option>
                    <option value="entrepreneur">Entrepreneur</option>
                </select><br /><br />
                <input type="submit" value="Submit" style={styleObjq} />
            </form>
        </div>
    )
};

export default Signup_stu;
