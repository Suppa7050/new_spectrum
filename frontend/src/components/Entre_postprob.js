import React from 'react';

function Entre_postprob()
{
    return (
        <div
            style={{
                backgroundColor: "rgba(134, 187, 195,0.8)",
                width: '100%',
                height: '100%'
            }}>
            <div className="content" style={{marginLeft: "20px", marginRight: "20px"}}>
                <h1 style={{fontSize: "40px", fontFamily: "cursive"}}>Problem statement:</h1><br/>
                <label for="myfile">Enter field:</label>
                <input type="text" placeholder="Enter field here.."/>
                <textarea id="solution" placeholder="Enter your problem here"></textarea>
                <label for="myfile">Select last date:</label>
                <input type="date" />
                <input type="submit" value="Submit" style={{fontSize: "large", padding: "5px", display: "block"}}/>
            </div>
        </div>
    )
};
export default Entre_postprob; 