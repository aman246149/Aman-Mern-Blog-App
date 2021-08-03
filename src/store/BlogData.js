import { createContext, useState } from "react";

const BlogDataContext = createContext({
  blogdata: "",
  userEmailData:"",
  addBlogData: (blogstringdata) => {},
  addUserEmailHandler:(userEmailData)=>{}
});

//responsible for updating our blog data

export function BlogDataContextProvider(props) {
  const [blogstateData, setBlogStateData] = useState("");
  const [userEmailData, setUserEmailData] = useState("");
  
  function addBlogDataHandler(blogstringdata) {
    return setBlogStateData((prevState) => {
      return setBlogStateData(prevState + blogstringdata);
    });
  }
  function addUserEmailHandler(userEmail) {
    return setUserEmailData((prevState) => {
      return setUserEmailData(prevState + userEmail);
    });
  }

  //updating the context
  const context = {
    blogdata: blogstateData,
    addBlogData: addBlogDataHandler,
    userEmailData:userEmailData,
    addUserEmailHandler:addUserEmailHandler
  };


  return (
    <BlogDataContext.Provider value={context}>
     {props.children}
    </BlogDataContext.Provider>
  );
}

export default BlogDataContext;
