import { useEffect, useState } from "react";
import { fetchCharacters } from "../Lib/DataFetch";
import { Characters } from "../Types/Characters";

export const CharacterList = () => {
  const [data, setData] = useState<Characters | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    fetchCharacters().then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <main>
      <h1> Personajes de Breaking Bad </h1>
      {data?.results?.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt=""></img>
        </div>
      ))}
    </main>
  );
};
