import { Link } from "react-router-dom";
import type { CharacterDetailType } from "../../interfaces/character";

import classes from './CharacterDetail.module.css'

const CharacterDetail = ({ character }: { character: CharacterDetailType }) => {

  return (
    <div  className={classes.container}>
      <div className={classes.content}>
        <div className={classes.image}>
          <img src={character.image} alt={character.name} />
        </div>
        <p className={classes.detail}>Name: <span>{character.name}</span></p>
        <p className={classes.detail}>Status: <span>{character.status}</span></p>
        <p className={classes.detail}>Species: <span>{character.species}{character.type ? `(${character.type})` : ''}</span></p>
        <p className={classes.detail}>Last known location: <span>{character.location?.name}</span></p>
        <p className={classes.detail}>#Episodes: <span>{character.episode.length}</span></p>
      </div>

      <Link to='/' style={{textDecoration: 'none'}}>{`<-- Go back to main list`}</Link>
    </div>
  );
}
export default CharacterDetail;