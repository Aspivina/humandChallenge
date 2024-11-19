import { Fragment, useEffect, useState } from "react";
import CharThumbnails from "./CharThumbnails";
import classes from "./Home.module.css";

import type { Character, PaginationControl } from "../../interfaces/character";

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

  const handleCharacterList = async () => {
    const params = `?page=${paginationControl?.page}&name=${query}`;

    const response = await getCharacterList(params);

    if (response) {
      const {
        data: { info, results },
      } = response;

      if (results) {
        setCharacters(results);
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
  };

  const handleSearch = () => {
    handleCharacterList();
  };

  // const handleGetMore = ()=> {
    //TODO handle the current page based on the next prop of currentInfo and add +1 for the next page
    //TODO handle pagination
  // }

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Fragment>
      <div className={classes.container}>
        <h1>Rick & Morty</h1>
        <div className={classes.content}>
          <div className={classes.searchContainer}>
            <label htmlFor="search">Search</label>
            <input
              id="search"
              type="text"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              value={query}
            />
            <button onClick={handleSearch}>Search me!</button>
          </div>
          <h3>Characters</h3>
          <CharThumbnails characterList={characters} />
        </div>
      </div>
    </Fragment>
  )
};

export default Home;
