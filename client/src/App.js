import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Templates from "./pages/Templates";
import CustomTemplate from "./pages/CustomTemplate";
import CustomPage from "./pages/CustomPage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import { Temp1 } from "./pages/Temp1";
import { Temp2 } from "./pages/Temp2";
import Navbar from "./components/Navbar";
// import { Temp3 } from "./pages/Temp3";
import GoogleScholar from "./pages/GoogleScholar";
import { ResearchContext } from "./utils/ResearchContext";
import { useState } from "react";

function App() {
  const userInfo = window.localStorage.user;
  const [isResearcher, setIsResearcher] = useState(true);
  return (
    <div className="text-white bg-[#111827]">
      <ResearchContext.Provider value={{ isResearcher, setIsResearcher }}>
        <Router>
          <Navbar />
          <Switch>
            <Route
              exact
              path={["/", "/dashboard"]}
              activeClassName="active"
              eventKey="/"
              component={userInfo ? Dashboard : LandingPage}
            />
            {/* <Route path="/" component={MainProfile} /> */}
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/templates" component={Templates} />
            <Route path="/scholar" component={GoogleScholar} />
            <Route path="/customtemplate" component={CustomTemplate} />
            <Route path="/custompage" component={CustomPage} />
            <Route path="/template-one" component={Temp1} />
            <Route path="/template-two" component={Temp2} />
            {/* <Route path="/template-three" component={Temp3} /> */}
          </Switch>
          <Footer />
        </Router>
      </ResearchContext.Provider>
    </div>
  );
}
export default App;
