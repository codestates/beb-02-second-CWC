import "./App.css";
import Mypage from "./views/Mypage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Board from "./components/Board";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
          <Route path="/post">
            <Board />
          </Route>
          <Route path="/profile">
            <Mypage />
          </Route>
          <Route path="/sign-up"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
