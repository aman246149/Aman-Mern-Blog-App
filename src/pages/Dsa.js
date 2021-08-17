import BlogCards from "../Components/BlogCards/BlogCards";
import useCustom from "../customHooks/useCustomPagesRequest";

import "./AllPage.css";

function Dsa() {
  let { responsedata, isLoading, isError } = useCustom("/blog/getdsa");

  return (
    <div className="forpadding">
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

export default Dsa;
