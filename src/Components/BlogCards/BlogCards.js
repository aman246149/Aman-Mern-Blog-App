import React, { useEffect, useState } from "react";
import "./BlogCards.css";

function BlogCards() {
  const [imageDimen, setImageDime] = useState({
    height: "22vh",
    width: "20vw",
  });

  function changeDimensions() {
    if (window.outerWidth<650 ) {
      setImageDime({
        height: "30vh",
        width: "100%",
    });
    console.log("called", imageDimen);
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
    console.log("Render", imageDimen);

    return () => {
      window.removeEventListener("resize", changeDimensions);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setImageDime]);

  return (
    <div className="card">
      <div className="leftpart">
        <h1>
          How to optimise an overload of digital tools in your organisation
        </h1>
        <p>-8 min. read</p>
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
