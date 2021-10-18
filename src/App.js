import './App.css';
import { Route } from "react-router-dom"
import Nav from './components/Nav'
import Home from './components/Home'
import Movie from './components/Movie';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Nav} />
      <Route path="/" exact component={Home} />
      <Route path="/movie/:id" exact component={Movie} />
    </div>
  );
}

export default App;
