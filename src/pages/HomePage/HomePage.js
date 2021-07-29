import React from "react";
import BlogMotto from "../../Components/Blog Moto/BlogMotto";
import BlogCards from "../../Components/BlogCards/BlogCards";
import Navbar from "../../Components/Navbar/Navbar";

function HomePage() {
  return (
    <>
      {/*fixed top bar */}
     

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
