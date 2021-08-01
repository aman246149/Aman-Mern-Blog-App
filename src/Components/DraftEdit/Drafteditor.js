import React, { useState } from "react";
import "./Draft.css";
import ReactMarkdown from "react-markdown";

function MyEditor() {
  const [markDown, setMarkDown] = useState("Welcome to Markdown");




  function handlingdata(event){
    event.preventDefault();
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    console.log(event.target[2].value)
    console.log(markDown)
    
  }

  return (
    <div className="section">
      <h1>MarkDown Editor</h1>
      <div className="center-div">
        <textarea
          className="left-side"
          value={markDown}
          onChange={(e) => setMarkDown(e.target.value)}
        ></textarea>

        <div className="right-side">
          <ReactMarkdown>{markDown}</ReactMarkdown>
        </div>
      </div>
      <div className="formcontainer">
      <form onSubmit={handlingdata} method="post" className="form">
      <label htmlFor="title">Choose a title:</label>
        <input type="text" placeholder="title"/>
        <label htmlFor="description">Choose a description:</label>
        <input type="text" placeholder="short description"/>
        <select name="blogtype" id="blogtype">
          <option value="Web">Web</option>
          <option value="Tech">Tech</option>
          <option value="Motivation">Motivation</option>
          <option value="Tricks">Tricks</option>
          <option value="Jobs">Jobs</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      </div>
      {/* <button className="center" onClick={handleSubmit}>
        <Link to="/blog" style={{ color: "white" }}>
          Submit
        </Link>
      </button> */}
      <div className="spacer"></div>
    </div>
  );
}

export default MyEditor;
