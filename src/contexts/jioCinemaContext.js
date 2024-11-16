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

const getFormattedDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

function JioCinema({ children }) {
  // home page states
  const [homeCarouselPosters, setHomeCarouselPosters] = useState([]);
  const [popularHomePosters, setPopularHomePosters] = useState([]);
  const [nowPlayingHomePosters, setNowPlayingHomePosters] = useState([]);
  const [topRatedHomePosters, setTopRatedHomePosters] = useState([]);
  const [upcomingHomePosters, setUpcomingHomePosters] = useState([]);

  // sports page states
  const [sportsCarouselPosters, setSportsCarouselPosters] = useState([]);
  const [popularSportsPosters, setPopularSportsPosters] = useState([]);
  const [nowPlayingSportsPosters, setNowPlayingSportsPosters] = useState([]);
  const [topRatedSportsPosters, setTopRatedSportsPosters] = useState([]);
  const [upcomingSportsPosters, setUpcomingSportsPosters] = useState([]);

  // movies page states

  // tv page states

  // home page useEffects

  useEffect(function () {
    async function getPlayingNowMoviesPosters() {
      const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
      const images = await getMoviesPoster(url);

      setHomeCarouselPosters(images);
      setNowPlayingHomePosters(images);
    }
    getPlayingNowMoviesPosters();
  }, []);

  useEffect(function () {
    async function getPopularMoviesPosters() {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
      const posters = await getMoviesPoster(url);

      setPopularHomePosters(posters);
    }

    getPopularMoviesPosters();
  }, []);

  useEffect(function () {
    async function getTopRatedMoviesPosters() {
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
      const posters = await getMoviesPoster(url);

      setTopRatedHomePosters(posters);
    }

    getTopRatedMoviesPosters();
  }, []);

  useEffect(function () {
    async function getUpcomingMovies() {
      const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
      const posters = await getMoviesPoster(url);

      setUpcomingHomePosters(posters);
    }

    getUpcomingMovies();
  }, []);

  // sports page useEffects

  useEffect(function () {
    async function getPlayingNowSportsPosters() {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=sports`;
      const images = await getMoviesPoster(url);

      setSportsCarouselPosters(images);
      setNowPlayingSportsPosters(images);
    }
    getPlayingNowSportsPosters();
  }, []);

  useEffect(function () {
    async function getPopularSportsPosters() {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=18&sort_by=popularity.desc`;
      const posters = await getMoviesPoster(url);

      setPopularSportsPosters(posters);
    }

    getPopularSportsPosters();
  }, []);

  useEffect(function () {
    async function getTopRatedSportsPosters() {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=18&sort_by=vote_average.desc`;
      const posters = await getMoviesPoster(url);

      setTopRatedSportsPosters(posters);
    }

    getTopRatedSportsPosters();
  }, []);

  useEffect(function () {
    async function getUpcomingSportsPosters() {
      const today = getFormattedDate();
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=18&primary_release_date.gte=${today}`;
      const posters = await getMoviesPoster(url);

      setUpcomingSportsPosters(posters);
    }

    getUpcomingSportsPosters();
  }, []);

  return (
    <JioCinemaContext.Provider
      value={{
        homeCarouselPosters,
        popularHomePosters,
        nowPlayingHomePosters,
        topRatedHomePosters,
        upcomingHomePosters,

        sportsCarouselPosters,
        popularSportsPosters,
        nowPlayingSportsPosters,
        topRatedSportsPosters,
        upcomingSportsPosters,
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
