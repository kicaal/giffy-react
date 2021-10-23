import { useCallback } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import { useGifs } from "hooks/useGifs";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";

export default function Home() {
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <>
      <Helmet>
        <title>Home Giffy</title>
        <meta name="description" content="Home desc"></meta>
      </Helmet>
      <header className="o-header">
        <SearchForm onSubmit={handleSubmit} />
      </header>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Los gifs más populares</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  );
}
