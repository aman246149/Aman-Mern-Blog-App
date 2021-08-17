import BlogMotto from "../../Components/Blog Moto/BlogMotto";
import BlogCards from "../../Components/BlogCards/BlogCards";
import useCustomPagesRequest from "../../customHooks/useCustomPagesRequest";

function HomePage() {
  let { responsedata, isLoading, isError } =
    useCustomPagesRequest("/blog/getdata");

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
