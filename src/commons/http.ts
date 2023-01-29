import axios from "axios";
import { Movies } from "../interfaces/movie.interface";

const URL_API = 'https://www.omdbapi.com/?i=tt3896198&apikey=5eec5adc&s=scary'

export async function getMovies(): Promise<Movies> {
        const { data, status } = await axios.get<Movies>(URL_API);

        localStorage.setItem("movies", JSON.stringify(data));

        console.log('response status: ', status);

        return data;
}
