import { useParams } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import { getCharacter } from '../services/character';
import type { CharacterDetailType } from '../interfaces/character';
import CharacterDetail from '../components/CharacterDetail/CharacterDetail';

function CharacterPage() {
  const { id } = useParams<{
    id: string;
  }>();

  const [character, setCharacter] = useState<CharacterDetailType>();
  const [loading, setLoading] =  useState<boolean>(false);

  const getCharacterDetails = async () => {

    if (id) {
      const response = await getCharacter(+id);

      if (response) {
        const {data} =  response;
        setCharacter(data);
        console.log(data);
      }
    }
  }

  useEffect(() => {
    getCharacterDetails();
  }, []);

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        Character Details:
      </h1>
      {character && <CharacterDetail character={character} />}

    </div>
  );
}

export default CharacterPage;
