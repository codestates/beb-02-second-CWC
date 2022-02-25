import "./App.css";
import Mypage from "./views/Mypage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Board from "./components/Board";
import Home from "./components/Home";
import CWC from "./components/CWC";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/post">
            <Board />
          </Route>
          <Route path="/profile">
            <Mypage />
          </Route>
          <Route path="/cwc">
            <CWC />
          </Route>
          <Route path="/sign-up"></Route>
        </Switch>
      </Router>
      
    </>
 

  );
}

export default App;
