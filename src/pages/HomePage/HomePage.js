import React from "react";
import BlogMotto from "../../Components/Blog Moto/BlogMotto";
import BlogCards from "../../Components/BlogCards/BlogCards";

function HomePage() {
  return (
    <>
      {/* blog motto section */}

      <BlogMotto />

      {/* blog cards */}
      <BlogCards />
      <BlogCards />
      <BlogCards />
      <BlogCards />
      <BlogCards />
    </>
  );
}

export default HomePage;
