import classes from "./CharThumbnails.module.css";
const CharThumbnails = ({ characterList }) => {
  return (
    <div className={classes.thumbnailList}>
      {characterList.length > 0 &&
        characterList.map((char, index) => {
          return (
            <div
              key={index}
              className={classes.thumbnailContainer}
              style={{ backgroundImage: `url(${char.image})` }}
            >
              <div className={classes.thumbnailContent}>
                <h4 className={classes.title}>{char.name}</h4>
                <p className={classes.species}>{char.species}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CharThumbnails;
