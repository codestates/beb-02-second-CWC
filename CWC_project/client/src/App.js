import "./App.css";
import Mypage from "./views/Mypage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Board from "./views/Board";
import Home from "./views/Home";
import CWC from "./views/CWC";
import Footer from "./components/Footer";
import Create from "./views/Create";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home">
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
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
