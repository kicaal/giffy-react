import "./App.css";
import { Link, Route } from "wouter";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import StaticContext from "./context/StaticContext";
import { GifsContext } from "./context/GifContext";
import { Suspense } from "react";

function App() {
  return (
    <StaticContext.Provider value>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Link to="/">
              <figure className="App-logo">
                <img alt="Giffy logo" src="/giphy-logo.png" />
              </figure>
            </Link>
            <GifsContext>
              <Route component={Home} path="/" />
              <Route
                component={SearchResults}
                path="/search/:keyword/:rating?"
              />
              <Route component={Detail} path="/gif/:id" />
              <Route component={() => <h1>404 ERROR :(</h1>} path="/404" />
            </GifsContext>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
