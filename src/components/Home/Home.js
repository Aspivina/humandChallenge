import { useEffect, useState } from "react";
import classes from "./Home.module.css";
import { getCharacters } from "../../api/characters";
import CharThumbnails from "./CharThumbnails";
const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [currentInfo, setCurrentInfo] = useState(null);
  const [query, setQuery] = useState("");

  const getCharactersHandler = async () => {
    const params = `page=1&name=${query}`;

    const { info, results } = await getCharacters(params);
    console.log(info, results);

    if(!results){
      alert('Sorry there was an error, please try again')
    }

    if (results) {
      setCharacters(results);
    }
    if (info) {
      setCurrentInfo(info);
    }
  };

  const handleSearch = () => {
    getCharactersHandler();
  };

  // const handleGeMore = ()=> {

    //TODO handle the current page based on the next prop of currentInfo and add +1 for the next page
    //TODO handle pagination

  // }

  useEffect(() => {
    handleSearch();
  }, []);

  return (
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
  );
};

export default Home;
