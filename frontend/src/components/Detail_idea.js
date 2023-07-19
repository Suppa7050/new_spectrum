/* import "./../files/detail_idea.css"
 */import React from 'react';

function Detail_idea()
{
    const muStyle={
        marginRight:"20px",
        marginLeft:"20px",
    }
    const mtStyle={
        fontSize:40,
        textAlign:"center",
    }
    
    const Fun = () => {
        var y=document.getElementById("solution1");
    var z=document.getElementById("solution2");
    var x=document.getElementById("edit");
        if(x.innerHTML==="Edit")
        {
            let txt=y.innerHTML;
            txt=txt.replaceAll("<br/>","\n");
            x.innerHTML="Submit";
            z.innerHTML=txt;
            y.style.display = "none";
            z.style.display="block";
        }
        else
        {
            let txt=z.value;
            txt=txt.replaceAll("\n","<br/>");
            x.innerHTML="Edit";
            y.innerHTML=txt;
            z.style.display="none";
            y.style.display="block";
        }
    }
    return (
        <div
        style={{
          backgroundColor: "rgba(134, 187, 195,0.8)",
          width: '100%',
          height: '100%'
        }}>
            <div className="content" style={muStyle}>
                <h1 style={mtStyle}>Problem statement:</h1>
                <p style={{fontSize: "17px"}}>
                    ABC Supermarket customers in the northern region of Uttar Pradesh have significantly decreased over the past decade, while other areas of the state continue to see increasing numbers of sales at physical retail stores.
                    <br/>Surveys conducted by ABC Supermarkets suggest that sales are lowest among people between the ages of 18 to 30 and low-income households (making under five lakh rupees for a four-person household annually). The research conducted on sales patterns in other northern Indian states suggests that this could indicate a br/oader trend. Still, this region's demographics suggest that it could become a more significant problem.
                    <br/>Statistics from the 2019 Indian Business Review show that consumer spending within this demographic is at an all-time high. The study attributed these findings to the increase in disposable income and quality of life among city dwellers. The 2019 Indian Fitness Journal also shows increased consumer interest in diet and health among people between the ages of 18 to 25.
                    <br/>Other parts of the country have made attempts and succeeded, to a degree, to improve sales, but similar solutions have not had the desired effect here in northern Uttar Pradesh. More research is needed on the reasons these attempts have failed and what strategies might have more of an impact on reaching younger and lower-income households.
                </p>
                <h2 style={mtStyle}>Solution:</h2>
                <p id="solution1" style={{fontSize: "17px"}}>Areas with low supermarket sales have historically been shown to have lower disposable income levels and higher numbers of instances of civil unrest. Most recently, this has become increasingly concerning for parts of India where the wealth gap continues to grow wider (as shown in reference attached). Data shows that consumer shopping habits are also increasingly transitioning online, as competitors provide cost-effective bulk discounts and free delivery for heavy items (see reference below).<br/>Addressing this problem would give ABC Supermarkets' store managers in the region much-needed insights to help them adjust their customer service strategies to include more of the residents of this region. It would also contribute to gaining a more nuanced understanding of consumer behaviour trends.</p>
                <textarea id="solution2" placeholder="Enter your solution here"></textarea>
                <label for="myfile">Files linked:</label>
                <input type="file" id="myfile" name="myfile"/><br/><br/>
                <button type="button" onClick={Fun} id="edit" style={{fontSize: "large"}}>Edit</button>
            </div>
        </div>
/* <script>
    
</script> */
        
    )
};
export default Detail_idea; 