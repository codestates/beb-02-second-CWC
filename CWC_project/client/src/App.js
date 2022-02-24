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
        </Switch>
      </Router>
      <Mypage />
      <Board />
    </>

  );
}

export default App;
