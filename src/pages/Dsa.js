import React, { useEffect, useState } from "react";
import BlogCards from "../Components/BlogCards/BlogCards";
import axios from "../NetRequest/AxiosInstance"

import "./AllPage.css"

function Dsa() {
   
  const[responsedata,setresponsedata]=useState([])
  const[isLoading,setLoading]=useState(true)

  useEffect(()=>{
    axios.get("/blog/getdsa").then((response)=>{setresponsedata(response.data.success)},setLoading(false)).catch(e=>setLoading(false))

    return()=>{
      setLoading(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="forpadding">
      {/* blog motto section */}

      {/* blog cards */}

      <h2 className="loading">{isLoading === true ? "Loading..." : null}</h2>

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

export default Dsa
