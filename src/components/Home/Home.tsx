import { Fragment, useEffect, useState } from "react";
import CharThumbnails from "../CharThumbnails/CharThumbnails";
import classes from "./Home.module.css";

import type { Character } from "../../interfaces/character";
import { PaginationControl } from "../../interfaces/pagination";

import { getCharacterList } from "../../services/character";

const INITIAL_PAGINATION: PaginationControl = {
  page: 1,
  hasNext: true,
  totalPages: 1,
  count: 0,
};

const Home = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [paginationControl, setPaginationControl] = useState(INITIAL_PAGINATION);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCharacterList = async (page: number = 1, isLoadMore: boolean = false) => {
    if (loading) return; // Prevent multiple API calls simultaneously

    setLoading(true);

    const params = `?page=${page}&name=${query}`;
    const response = await getCharacterList(params);

    if (response) {
      const {
        data: { info, results },
      } = response;

      if (results) {
        setCharacters((prev) =>
          isLoadMore ? [...prev, ...results] : results
        );
      }
      if (info) {
        setPaginationControl((prev) => {
          return {
            ...prev,
            totalPages: info.pages || 1,
            hasNext: info.next && info.next !== "" ? true : false,
            count: info.count || 0,
          };
        });
      }
    }
    setLoading(false);

  };

  const handleSearch = () => {
    handleCharacterList();
  };

  const handleLoadMore = () => {
    if (paginationControl.hasNext) {
      handleCharacterList(paginationControl.page + 1, true);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Fragment>
      <div className={classes.container}>
        <h1>Rick & Morty</h1>
        <div className={classes.content}>
          <div className={classes.searchContainer}>
            <label htmlFor="search">Check for a particular character!</label>
            <input
              id="search"
              type="text"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              value={query}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          <h3>Characters</h3>
          <CharThumbnails characterList={characters} />
          {paginationControl.hasNext && (
            <button
              className={classes.loadMoreButton}
              onClick={handleLoadMore}
              disabled={loading}
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          )}
        </div>
      </div>
    </Fragment>
  )
};

export default Home;
