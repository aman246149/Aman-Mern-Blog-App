import React, { useEffect, useState } from "react";
import BlogMotto from "../../Components/Blog Moto/BlogMotto";
import BlogCards from "../../Components/BlogCards/BlogCards";
import axios from "../../NetRequest/AxiosInstance";

function HomePage() {
  const [responsedata, setresponsedata] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get("/blog/getdata")
      .then((response) => {
        setresponsedata(response.data.success);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* blog motto section */}

      <BlogMotto />

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
    </>
  );
}

export default HomePage;
