import React, { useEffect, useState } from "react";
import "./BlogCards.css";
import { useHistory } from "react-router-dom"

function BlogCards({title,shortDesc,date,markdown}) {
  const [imageDimen, setImageDime] = useState({
    height: "22vh",
    width: "20vw",
  });

  const history=useHistory()

  function changeDimensions() {
    if (window.outerWidth<650 ) {
      setImageDime({
        height: "30vh",
        width: "90%",
    });
    } else {
      setImageDime({
        height: "22vh",
        width: "20vw",
      });
    }

  }

  function changeDimensionsfor1024(){
     if(window.outerWidth<1025){
   setImageDime({
        height: "40vh",
        width: "100%",
    });
    }else {
      setImageDime({
        height: "22vh",
        width: "20vw",
      });
    }
  }

  useEffect(() => {
    if (window.outerWidth<650 ) {
      changeDimensions()
    }else if(window.outerWidth<1025){
      changeDimensionsfor1024()
    }

    window.addEventListener("resize", changeDimensions);

    return () => {
      window.removeEventListener("resize", changeDimensions);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setImageDime]);

  return (
    <div className="card" onClick={()=>history.push({
      pathname: '/blogpage',
      state: { data: {title:title,shortDesc:shortDesc,date:date,markdown:markdown} }
    })}>
      <div className="leftpart">
        <h1>
          {title}
        </h1>
        <p>{date.toString().slice(0, 10)}</p>
      </div>
      <div
        className="rightpart"
        style={{
          height: `${imageDimen.height}`,
          width: `${imageDimen.width}`,
          backgroundSize: "cover",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1627552113979-aae121b0e7bc?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
        }}
      >
        {/* <h6>How to optimize an overload tool in your organization</h6> */}
      </div>
    </div>
  );
}

export default BlogCards;
