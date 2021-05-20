import './App.css';
import NavBar from "./Components/NavBar"
import {Switch, Route} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Video from "./Components/Video"

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/video/:id" component={Video} />
      </Switch>
    </div>
  );
}

export default App;
