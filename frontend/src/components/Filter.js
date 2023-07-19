import React from 'react';

function Filter()
{
    const myStyle={
        color:"black",
        fontSize:30,
    }
    const myStyleq={
        color:"black",
        fontSize:20,
    }
    return (
        <div>
            <div class="text-left">
        <br/>
        <select name="cars" id="FIELD:" style={myStyle}>
            <option value="FIELD" style={myStyleq}>Field</option>
            <option value="volvo" style={myStyleq}>Artificial Intelligence</option>
            <option value="saab" style={myStyleq}>Deep learning</option>
            <option value="opel" style={myStyleq}>Opel</option>
            <option value="audi" style={myStyleq}>Audi</option>
        </select>
      </div>
        </div>
    )
};
export default Filter; 