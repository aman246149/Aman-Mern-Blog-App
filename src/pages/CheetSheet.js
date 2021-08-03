import React, { useEffect, useState } from "react";
import BlogCards from "../Components/BlogCards/BlogCards";
import axios from "../NetRequest/AxiosInstance"

import "./AllPage.css"

function CheetSheet() {
   
  const[responsedata,setresponsedata]=useState([])

  useEffect(()=>{
    axios.get("/blog/getcheatsheet").then((response)=>{setresponsedata(response.data.success)}).catch(e=>console.log(e))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="forpadding">
      {/* blog motto section */}

      {/* blog cards */}

      {
        responsedata.map((elem)=>{
          return <BlogCards 
          key={elem._id}
          title={elem.title}
          shortDesc={elem.shortDesc}
          date={elem.date}
          markdown={elem.markdown}
          />
        })
      }
      
    </div>
  );
}

export default CheetSheet
