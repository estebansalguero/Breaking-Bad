import {Characters} from "../Types/Characters";

export const BASE_URL = "https://breakingbadapi.com/api"
export const CHARACTERS_URL = `${BASE_URL}/characters`;

export const fetchCharacters = async () => {
    const result = await fetch(CHARACTERS_URL);
    const data = await result.json();
    return data as Characters;
};