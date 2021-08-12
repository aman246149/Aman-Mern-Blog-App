import React, { useEffect, useState } from "react";
import BlogCards from "../Components/BlogCards/BlogCards";
import axios from "../NetRequest/AxiosInstance";

import "./AllPage.css";

function Web() {
  const [responsedata, setresponsedata] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError,setError]=useState(false);


  useEffect(() => {
    console.log("useeffect calleing")
    setLoading(true)
    axios
      .get("/blog/getweb")
      .then((response) => {
        setresponsedata(response.data.success);
        setLoading(false)
      }, )
      .catch((e) => {
        setError(true)
        setLoading(false)
      });
      console.log("useeffect end")

    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="forpadding">
      {/* blog motto section */}

      {/* blog cards */}

      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError?<h1>Make Sure To check Your Internet and refresh this page again</h1>:(
        responsedata.map((elem) => {
          return (
            <BlogCards
              key={elem._id}
              title={elem.title}
              shortDesc={elem.shortDesc}
              date={elem.date}
              markdown={elem.markdown}
            />
          );
        })
      )}
    </div>
  );
}

export default Web;
