import './App.css';
import NavBar from "./Components/NavBar"
import {Switch, Route} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
