import React, { useEffect, useRef, useCallback } from "react";
import Spinner from "components/Spinner";
import ListOfGifs from "components/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const visorRef = useRef();
  const { show } = useNearScreen({
    externalRef: !loading && visorRef,
    once: false,
  });

  const debounceNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 2000),
    []
  );

  useEffect(function () {
    if (show) debounceNextPage();
  });

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div data-testid="visor" ref={visorRef} />
        </>
      )}
    </>
  );
}
