import React,{useState} from "react";
import Sidebar from "./Sidebar";
import { Router } from "@reach/router";
import Home from "./Home";
import About from "./About";
import Signupin from "./Signupin";
import Signup from "./Signup";
import SignInContext from "./SignInContext";

const App = () => {
  const signedStateHook = useState("signed out");
  return (
    <React.StrictMode>
      <SignInContext.Provider value={signedStateHook}>
      <div className="main-container">
        <div className="side-container">
          <Router>
            <Sidebar
              options={["Home", "Sign In"]}
              links={["/", "/signupin"]}
              path="/signup"
            />
            <Sidebar options={["Home"]} links={["/"]} path="/signupin" />
            <Sidebar
              options={["Sign Up / Sign In"]}
              links={["/signupin"]}
              path="/"
            />
          </Router>
        </div>
        <div className="nested-main-container">
          <Router>
            <Home path="/" />
            <About path="/about" />
            <Signupin path="/signupin" />
            <Signup path="/signup" />
          </Router>
        </div>
      </div>
      </SignInContext.Provider>
    </React.StrictMode>
  );
};

export default App;
