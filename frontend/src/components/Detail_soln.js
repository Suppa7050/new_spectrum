import React from 'react';

function Detail_soln()
{
    const myStyle={
        fontSize:40,
        

    }
    return (
      <div
      style={{
        backgroundColor: "rgba(134, 187, 195,0.8)",
        width: '100%',
        height: '100%'
      }}>
            <div style={{marginLeft: "10px", marginRight: "10px"}}>
        <h1 style={{fontSize: "40px", font: "bolder" ,fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', 'Arial', 'sans-serif'", textAlign: "center"}} >Problem statement:</h1>
        <p style={{fontSize: "large"}}>Users of our proposal software have reported frustration at having to copy information into the CRM after they send a proposal. They use their CRMs to track all email conversations, phone calls, and other lead and client interactions. Without CRM integrations, our proposal software causes a frustrating experience for our power users. While users from very small businesses and firms don’t have this issue, we are hearing from sales reps at SMBs and enterprises that the need to duplicate proposal sending information in their CRM causes an additional two to three hours of work every week. The problem is that we don’t have any integrations with CRMs and we have not yet identified the CRMs of our best users. We need to send segmented surveys to determine our priorities for the first three CRMs to integrate with, and we need to build in the user flows around these integrations.</p>
        <h1 style={{fontSize: "40px", font: "bolder" ,fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', 'Arial', 'sans-serif'", textAlign: "center"}} >Solution:</h1>
        <textarea id="solution" placeholder="Enter your solution here"></textarea>
        <p style={{fontSize: "20px"}}>Link related files:</p>
        <form action="/action_page.php">
          <input type="file" id="myFile" name="filename"/><br/>
          <input type="submit" style={{fontSize: "15px"}}/>
        </form>
      </div>
        </div>
    )
};
export default Detail_soln; 