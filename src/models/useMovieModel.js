import React from "react";
import { movieRequest } from "../http/factory/movie";
export const useMovieModel = () => {
	const [movies, setMovies] = React.useState(null);

	const updateMovies = (response) => {
		setMovies(response.data);
	};

	const getMovies = async () => {
		const response = await movieRequest.get("");
		updateMovies(response);
	};

	const patchMovieById = async (id, data) => {
		return await movieRequest.patch(id, data);
	};

	return {
		movies,
		getMovies,
		patchMovieById,
	};
};
