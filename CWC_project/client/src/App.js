import "./App.css";
import Explorer from "./views/Explorer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Board from "./views/Board";
import Home from "./views/Home";
import CWC from "./views/CWC";
import Footer from "./components/Footer";
import Create from "./views/Create";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import LoginPage from "./views/LoginPage/LoginPage";

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
          <Route path="/explorer">
            <Explorer />
          </Route>
          <Route path="/cwc">
            <CWC />
          </Route>
          <Route path="/sign-up"><RegisterPage /></Route>
          <Route path="/login"><LoginPage /></Route>
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
