import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route,Switch } from 'react-router-dom'
import Web from "./pages/Web";
import Tech from "./pages/Tech";
import Motivation from "./pages/Motivation";
import Tricks from "./pages/Tricks";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Navbar from "./Components/Navbar/Navbar";
import Jobs from "./pages/Jobs";

function App() {
  return (
    <div className="App">
       <Navbar />
     <switch>
       <Route path="/" exact>
           <HomePage/>
       </Route>

       <Route path="/web" >
           <Web/>
       </Route>
       <Route path="/tech" >
           <Tech/>
       </Route>
       <Route path="/motivation" >
           <Motivation/>
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
       <Route path="/contactus" >
           <Contactus/>
       </Route>
     </switch>
    </div>
  );
}

export default App;
