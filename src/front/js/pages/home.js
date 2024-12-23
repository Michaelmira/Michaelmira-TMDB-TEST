import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getMovies()
	}, [])



	return (
		<div className="text-center mt-5">
			<h1>Hello TMDB!!</h1>

			{store.movies?.results?.map((movie,index) => (
				<div keu={index}>
					<h3>
						{movie.original_title}
						<img
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.poster_path} style={{width: "200px", height: "300px"}}
						/>

						
					</h3>
				</div>
			))}

		</div>
	);
};
