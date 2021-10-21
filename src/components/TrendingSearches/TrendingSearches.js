import { useState, useEffect } from "react/cjs/react.development";
import Category from "components/Category";
import getTrendingTerms from "services/getTrendigTerms";

function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    getTrendingTerms().then(setTrends);
  }, []);

  return <Category name="tendencias" options={trends} />;
}

export default TrendingSearches;
