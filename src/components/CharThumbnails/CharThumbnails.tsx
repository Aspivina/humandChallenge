import { Link } from "react-router-dom";
import type { Character } from "../../interfaces/character";

import classes from "./CharThumbnails.module.css";

const CharThumbnails = ({ characterList }: { characterList: Character[] }) => {
  return (
    <div className={classes.thumbnailList}>
      {characterList.length > 0 &&
        characterList.map((char) => {
          return (
            <Link to={`/${char.id}`} key={char.id} style={{textDecoration: 'none'}}>
              <div

                className={classes.thumbnailContainer}
                style={{ backgroundImage: `url(${char.image})` }}
              >
                <div className={classes.thumbnailContent}>
                  <h4 className={classes.title}>{char.name}</h4>
                  <p className={classes.species}>{char.species}</p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default CharThumbnails;
