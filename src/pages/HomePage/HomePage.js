import React, { useEffect, useState } from "react";
import BlogMotto from "../../Components/Blog Moto/BlogMotto";
import BlogCards from "../../Components/BlogCards/BlogCards";
import axios from "../../NetRequest/AxiosInstance"

function HomePage() {

  const[responsedata,setresponsedata]=useState([])

  useEffect(()=>{
    axios.get("/blog/getdata").then((response)=>{setresponsedata(response.data.success)}).catch(e=>console.log(e))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      {/* blog motto section */}

      <BlogMotto />

 


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
      
    </>
  );
}

export default HomePage;
