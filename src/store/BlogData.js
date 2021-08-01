import { createContext, useState } from "react";

const BlogDataContext = createContext({
  blogdata: "",
  addBlogData: (blogstringdata) => {},
});

//responsible for updating our blog data

export function BlogDataContextProvider(props) {
  const [blogstateData, setBlogStateData] = useState("");

  function addBlogDataHandler(blogstringdata) {
    console.log("state updated", blogstringdata);
    return setBlogStateData((prevState) => {
      return setBlogStateData(prevState + blogstringdata);
    });
  }

  //updating the context
  const context = {
    blogdata: blogstateData,
    addBlogData: addBlogDataHandler,
  };

  console.log("context", context);

  return (
    <BlogDataContext.Provider value={context}>
     {props.children}
    </BlogDataContext.Provider>
  );
}

export default BlogDataContext;
