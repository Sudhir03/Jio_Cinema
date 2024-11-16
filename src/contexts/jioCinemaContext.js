import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const JioCinemaContext = createContext();

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

function JioCinema({ children }) {
  const [mainCarouselImages, setMainCarouselImages] = useState([]);
  const [popularPosters, setPopularPosters] = useState([]);
  const [nowPlayingPosters, setNowPlayingPosters] = useState([]);
  const [topRatedPosters, setTopRatedPosters] = useState([]);
  const [upcomingMoviesPosters, setUpcomingMoviesPosters] = useState([]);

  useEffect(function () {
    async function getPlayingNowMovies() {
      const apiKey = "f6d5271c500bfd3acbffd317e60e8b7a"; // ideally, use an environment variable
      const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        const movieArr = data.results;

        const images = [];
        for (let index = 0; index < movieArr.length; index++) {
          if (index === 10) break;
          images.push(`${IMAGE_BASE_URL}/w780/${movieArr[index].poster_path}`);
        }

        setMainCarouselImages(images);
        setNowPlayingPosters(images);
      } catch (error) {
        console.error("Failed to fetch now-playing movies:", error);
      }
    }

    getPlayingNowMovies();
  }, []);

  useEffect(function () {
    async function getPopularMovies() {
      const apiKey = "f6d5271c500bfd3acbffd317e60e8b7a"; // ideally, use an environment variable
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        const movieArr = data.results;

        const posters = [];
        for (let index = 0; index < movieArr.length; index++) {
          if (index === 10) break;
          posters.push(`${IMAGE_BASE_URL}/w780/${movieArr[index].poster_path}`);
        }

        setPopularPosters(posters);
      } catch (error) {
        console.error("Failed to fetch popular movies:", error);
      }
    }

    getPopularMovies();
  }, []);

  useEffect(function () {
    async function getTopRatedMovies() {
      const apiKey = "f6d5271c500bfd3acbffd317e60e8b7a"; // ideally, use an environment variable
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        const movieArr = data.results;

        const posters = [];
        for (let index = 0; index < movieArr.length; index++) {
          if (index === 10) break;
          posters.push(`${IMAGE_BASE_URL}/w780/${movieArr[index].poster_path}`);
        }

        setTopRatedPosters(posters);
      } catch (error) {
        console.error("Failed to fetch top rated movies:", error);
      }
    }

    getTopRatedMovies();
  }, []);

  useEffect(function () {
    async function getUpcomingMovies() {
      const apiKey = "f6d5271c500bfd3acbffd317e60e8b7a"; // ideally, use an environment variable
      const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        const movieArr = data.results;

        const posters = [];
        for (let index = 0; index < movieArr.length; index++) {
          if (index === 10) break;
          posters.push(`${IMAGE_BASE_URL}/w780/${movieArr[index].poster_path}`);
        }

        setUpcomingMoviesPosters(posters);
      } catch (error) {
        console.error("Failed to fetch upcoming movies:", error);
      }
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
