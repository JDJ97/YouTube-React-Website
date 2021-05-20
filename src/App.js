import './App.css';
import NavBar from "./Components/NavBar"
import {Switch, Route} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Videos from "./Components/Videos"
const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/video/id" component={Videos} />
      </Switch>
    </div>
  );
}

export default App;
