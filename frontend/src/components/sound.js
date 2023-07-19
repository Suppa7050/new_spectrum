import React, {useState} from "react"
import "../App.css"
import axios from "axios"
import logo from './images/uploadimg.png'

const Upload = () => {

    const [ file, setFile] = useState({
        pic:"",
    })

    const handleChange = e => {
        const { name,value } = e.target
        setFile({
            ...file,
            [name]: value
        })
    }

      const upload=()=>{
      axios.post('http://localhost:9002/upload', file)
      .then((res) => {
        console.log(res.data);
      });
  
    }
    
    return (
      <div style ={divStyle}>
        <div className="uploadbox">
        <div className="upload">
        <form  action="/upload">
          <h2 className="head">Upload</h2>
          <br/>
          <input className="uploadinp"name="pic"  value={file.pic} type="file" onChange={handleChange}/>
          <br/>
          <br/>
          <div className="button" onClick={upload}>Detect</div>
        </form>
    </div>
    </div>
    </div>

    )
}

export default Upload
const divStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${logo})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};