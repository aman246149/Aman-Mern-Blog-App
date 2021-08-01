import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route,Switch } from 'react-router-dom'
import Web from "./pages/Web";
import Tech from "./pages/Tech";
import Dsa from "./pages/Motivation";
import Tricks from "./pages/Tricks";
import About from "./pages/About";
import SignUP from "./pages/Contactus";
import Navbar from "./Components/Navbar/Navbar";
import Jobs from "./pages/Jobs";
import BlogPage from "./Components/BlogPageUI/BlogPage";
import DraftEdit from "./Components/DraftEdit/Drafteditor"
import Errorpage from "./pages/Errorpage";

function App() {
  return (
    <div className="App">
       <Navbar />
     <Switch>
       <Route path="/" exact>
           <HomePage/>
       </Route>

       <Route path="/web" >
           <Web/>
       </Route>
       <Route path="/tech" >
           <Tech/>
       </Route>
       <Route path="/dsa" >
           <Dsa/>
       </Route>
       <Route path="/tricks" >
           <Tricks/>
       </Route>
       <Route path="/jobs" >
           <Jobs/>
       </Route>
       <Route path="/about" >
           <About/>
       </Route>
       <Route path="/signup" >
           <SignUP/>
       </Route>
       <Route path="/blog" >
           <BlogPage/>
       </Route>
       <Route path="/formeditor" >
           <DraftEdit/>
       </Route>
       <Route path="*" exact >
           <Errorpage/>
       </Route>
     </Switch>
    </div>
  );
}

export default App;
