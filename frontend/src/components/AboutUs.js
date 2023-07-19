import React from 'react';
import data from "./sample.json"

const AboutUs = () => {
    //console.log(Sampledata)
    return (
        <div
        style={{
          backgroundColor: "white",
          width: '100%',
          height: '100%'
        }}>
            <h1> List of Something!!</h1>
            <h2> Data should be displayed below</h2>
            <table className='table45' >
        <tr>
          <th>Name</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
        {data && data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.lati}</td>
              <td>{val.lon}</td>
            </tr>
          )
        })}
      </table>

            
        </div>
    );
};

export default AboutUs;