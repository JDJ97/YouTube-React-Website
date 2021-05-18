import './App.css';
import NavBar from "./Components/NavBar"

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
