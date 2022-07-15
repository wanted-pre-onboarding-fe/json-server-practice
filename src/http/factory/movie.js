import axios from "axios";
import { HttpRequest } from "../httpRequest";
export const movieAxios = axios.create({
	baseURL: "http://localhost:8000/movie_v2",
});

export const movieRequest = new HttpRequest(movieAxios);
