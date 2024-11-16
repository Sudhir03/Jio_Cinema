import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const JioCinemaContext = createContext();
const apiKey = process.env.REACT_APP_API_KEY;

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

async function getMoviesPoster(url, maxPosters = 10) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (!Array.isArray(data.results)) {
      throw new Error("Invalid API response: results is not an array.");
    }

    const movies = data.results;
    const images = [];

    for (let index = 0; index < movies.length; index++) {
      if (index === maxPosters) break;

      if (movies[index].poster_path) {
        images.push(`${IMAGE_BASE_URL}/w780/${movies[index].poster_path}`);
      }
    }
    return images;
  } catch (error) {
    console.error("Failed to get movies:", error);
    return []; // Return an empty array on error
  }
}

function JioCinema({ children }) {
  const [mainCarouselImages, setMainCarouselImages] = useState([]);
  const [popularPosters, setPopularPosters] = useState([]);
  const [nowPlayingPosters, setNowPlayingPosters] = useState([]);
  const [topRatedPosters, setTopRatedPosters] = useState([]);
  const [upcomingMoviesPosters, setUpcomingMoviesPosters] = useState([]);

  useEffect(function () {
    async function getPlayingNowMoviesPosters() {
      const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
      const images = await getMoviesPoster(url);

      setMainCarouselImages(images);
      setNowPlayingPosters(images);
    }
    getPlayingNowMoviesPosters();
  }, []);

  useEffect(function () {
    async function getPopularMoviesPosters() {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
      const posters = await getMoviesPoster(url);

      setPopularPosters(posters);
    }

    getPopularMoviesPosters();
  }, []);

  useEffect(function () {
    async function getTopRatedMoviesPosters() {
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
      const posters = await getMoviesPoster(url);

      setTopRatedPosters(posters);
    }

    getTopRatedMoviesPosters();
  }, []);

  useEffect(function () {
    async function getUpcomingMovies() {
      const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
      const posters = await getMoviesPoster(url);

      setUpcomingMoviesPosters(posters);
    }

    getUpcomingMovies();
  }, []);

  return (
    <JioCinemaContext.Provider
      value={{
        mainCarouselImages,
        popularPosters,
        nowPlayingPosters,
        topRatedPosters,
        upcomingMoviesPosters,
      }}
    >
      {children}
    </JioCinemaContext.Provider>
  );
}

function useCinema() {
  const context = useContext(JioCinemaContext);
  if (!context) throw new Error("Using context in a wrong place");
  return context;
}

export { JioCinema, useCinema };
