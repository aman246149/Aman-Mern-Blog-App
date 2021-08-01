import "./BlogPage.css";
import BlogDataContext from "../../store/BlogData"
import { useContext } from 'react';
import ReactMarkdown from "react-markdown";


function BlogPage() {

  const blogdataCtx=useContext(BlogDataContext)
  console.log("fromblog ctx",blogdataCtx)

  return (
    <div className="section">
      <h1>How to optimise an overload of digital tools in your organisation</h1>
      <p>Discover how we manage and structure all our digital tooling in place while keeping the ownership and spending under control.</p>

      <div className="midIconContainer">
      28/7/2021
      <div className="icons">
          <img src="https://image.flaticon.com/icons/png/128/733/733635.png" alt="iconsimg" />
          <img src="https://image.flaticon.com/icons/png/128/733/733641.png" alt="whatsapp" />
      </div>
      </div>

     <ReactMarkdown>
     {blogdataCtx.blogdata}
     </ReactMarkdown>
    </div>
  );
}

export default BlogPage;
