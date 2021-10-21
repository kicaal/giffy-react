import "./App.css";
import { Link, Route } from "wouter";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import StaticContext from "./context/StaticContext";
import { GifsContext } from "./context/GifContext";

function App() {
  return (
    <StaticContext.Provider value>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img className="App-logo" alt="Giffy logo" src="/giphy-logo.png" />
          </Link>
          <GifsContext>
            <Route path="/" component={Home} />
            <Route path="/gif/:id" component={Detail} />
            <Route path="/search/:keyword" component={SearchResults} />
          </GifsContext>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
