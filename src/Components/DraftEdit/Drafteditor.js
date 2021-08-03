import React, { useState, useContext } from "react";
import "./Draft.css";
import ReactMarkdown from "react-markdown";
import axios from "../../NetRequest/AxiosInstance";
import storeContext from "../../store/BlogData";

function MyEditor() {
  const [markDown, setMarkDown] = useState("Welcome to Markdown");
  const storectx = useContext(storeContext);

  function handlingdata(event) {
    event.preventDefault();

    const data = JSON.stringify({
      title: event.target[0].value,
      shortDesc: event.target[1].value,
      markdown: markDown,
      postType: event.target[2].value,
    });
    axios
      .post("blog/postformData", data, {
        headers: {
          "Content-Type": "application/json",
          "auth-token": storectx.blogdata,
        },
      })
      .then((response) => {
      })
      .catch((err) => console.log(err));
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
          <input type="text" placeholder="title" />
          <label htmlFor="description">Choose a description:</label>
          <input type="text" placeholder="short description" />
          <select name="blogtype" id="blogtype">
            <option value="Web">Web</option>
            <option value="Tech">Tech</option>
            <option value="Dsa">Dsa</option>
            <option value="CheatSheet">CheatSheet</option>
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
