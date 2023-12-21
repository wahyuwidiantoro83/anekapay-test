import axios from "axios";

const api: string = "https://swapi-graphql.netlify.app/.netlify/functions/index";

export const getAllFilms = async () => {
  const query: string = `query Film {
    allFilms {
        totalCount
        films {
            title
            openingCrawl
            director
            releaseDate
            id
        }
    }
}`;
  const result: any = await axios.post(
    api,
    { query: query },
    { headers: { "Content-Type": "application/json" } }
  );
  return result.data;
};

export const getFilmDetails = async (id: string) => {
  const query: string = `query Film {
    film(id: "${id}") {
        title
        openingCrawl
        director
        producers
        releaseDate
    }
}`;
  const result: any = await axios.post(
    api,
    { query: query },
    { headers: { "Content-Type": "application/json" } }
  );
  return result.data;
};

export const getAllCharacters = async () => {
  const query: string = `query AllPeople {
    allPeople {
        totalCount
        people {
            name
            birthYear
            gender
            id
        }
    }
}`;
  const result: any = await axios.post(
    api,
    { query: query },
    { headers: { "Content-Type": "application/json" } }
  );
  return result.data;
};

export const getCharacterDetails = async (id: string) => {
  const query: string = `query AllPeople {
    person(id: "${id}") {
        name
        birthYear
        eyeColor
        gender
        hairColor
        height
        mass
        skinColor
    }
}`;
  const result: any = await axios.post(
    api,
    { query: query },
    { headers: { "Content-Type": "application/json" } }
  );
  return result.data;
};
