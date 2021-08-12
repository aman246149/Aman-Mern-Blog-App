import React, { useEffect, useState } from "react";
import BlogCards from "../Components/BlogCards/BlogCards";
import axios from "../NetRequest/AxiosInstance";

import "./AllPage.css";

function Tech() {
  const [responsedata, setresponsedata] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    axios
      .get("/blog/gettech")
      .then((response) => {
        setresponsedata(response.data.success);
        setLoading(false);
      })
      .catch((e) => setLoading(false));
    console.log(responsedata);
    return () => {
      setError(true);
      setLoading(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="forpadding">
      {/* blog motto section */}

      {/* blog cards */}

      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Make Sure To check Your Internet and refresh this page again</h1>
      ) : (
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

export default Tech;
