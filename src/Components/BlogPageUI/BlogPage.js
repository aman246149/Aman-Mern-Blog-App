import "./BlogPage.css";
import BlogDataContext from "../../store/BlogData"
import { useContext, useEffect, useState } from 'react';
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom"

function BlogPage() {

  const location = useLocation();
  const[comingData,setComingData]=useState({})

  useEffect(()=>{
    setComingData(location.state.data)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  const blogdataCtx=useContext(BlogDataContext)
  // console.log("fromblog ctx",blogdataCtx)

  return (
    <div className="section">
      <h1>{comingData.title}</h1>
      <p>{comingData.shortDesc}</p>

      <div className="midIconContainer">
      {comingData.date===undefined?new Date().getDate():comingData.date.toString().slice(0, 10)}
      <div className="icons">
          <img src="https://image.flaticon.com/icons/png/128/733/733635.png" alt="iconsimg" />
          <img src="https://image.flaticon.com/icons/png/128/733/733641.png" alt="whatsapp" />
      </div>
      </div>

     <ReactMarkdown>
     {comingData.markdown}
     </ReactMarkdown>
    </div>
  );
}

export default BlogPage;
