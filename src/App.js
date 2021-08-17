import "./App.css";
import { Route, Switch } from "react-router-dom";

import DraftEdit from "./Components/DraftEdit/Drafteditor";
import { lazy, Suspense } from "react";

const LazyHomepage = lazy(() => import("./pages/HomePage/HomePage"));
const LazyWeb = lazy(() => import("./pages/Web"));
const LazyDsa = lazy(() => import("./pages/Dsa"));
const LazyTech = lazy(() => import("./pages/Tech"));
const LazyTricks = lazy(() => import("./pages/CheetSheet"));
const LazyAbout = lazy(() => import("./pages/About"));
const LazySignUp = lazy(() => import("./pages/Contactus"));
const LazyNavBar = lazy(() => import("./Components/Navbar/Navbar"));
const LazyBlogPage = lazy(() => import("./Components/BlogPageUI/BlogPage"));
const LazyErrorPage = lazy(() => import("./pages/Errorpage"));

function App() {
  return (
    <div className="App">
      <Suspense fallback="Loading">
        <LazyNavBar />
        <Switch>
          <Route path="/" exact>
            <LazyHomepage />
          </Route>

          <Route path="/web">
            <LazyWeb />
          </Route>

          <Route path="/blogpage">
            <LazyBlogPage />
          </Route>

          <Route path="/tech">
            <LazyTech />
          </Route>
          <Route path="/dsa">
            <LazyDsa />
          </Route>
          <Route path="/tricks">
            <LazyTricks />
          </Route>

          <Route path="/about">
            <LazyAbout />
          </Route>
          <Route path="/signup">
            <LazySignUp />
          </Route>
          <Route path="/blog">
            <LazyBlogPage />
          </Route>
          <Route path="/formeditor">
            <DraftEdit />
          </Route>
          <Route path="*" exact>
            <LazyErrorPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
