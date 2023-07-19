import React from 'react';

function Signup_ent()
{
    const styleObj={
        fontSize: 20,
        color: "gold",
    }
     const styleObjq = {
        fontSize: 20,
        color: "black",
    } 
    return (
        <div>
            <form  style={{textAlign: "center"}}>
        <label for="fname" style={styleObj}>First name:</label><br/>
        <input type="text" id="fname" name="fname" /><br/>
        <label for="lname" style={styleObj}>Last name:</label><br/>
        <input type="text" id="lname" name="lname" /><br/><br/>
        <label for="lname" style={styleObj}>Company</label><br/>
        <input type="text" id="lname" name="Institution" /><br/><br/>
        <label for="lname" style={styleObj}>Gmail</label><br/>
        <input type="text" id="lname" name="Gmail" /><br/><br/>
        <label for="lname" style={styleObj}>Password:</label><br/>
        <input type="text" id="lname" name="Password" /><br/><br/>
        <label for="lname" style={styleObj}>Nick Name/Username:</label><br/>
        <input type="text" id="lname" name="Nickname" /><br/><br/>
        <input type="submit" value="Submit" style={styleObjq}/>
      </form> 
        </div>
    )
};
export default Signup_ent; 