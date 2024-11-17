import SuggestionTopics from "../components/SuggestionTopics";
import Carousel from "../components/Carousel";
import PostersCarousel from "../components/PostersCarousel";
import { useCinema } from "../contexts/jioCinemaContext";

const categories = [
  "For You",
  "Action",
  "Hollywood In Hindi",
  "Top 10 Movies",
  "Tamil",
  "Romance",
  "Drama",
  "Kannada",
  "Bangla",
  "Thriller",
  "Comedy",
  "Hindi",
  "Crime",
  "Malayalam",
  "English",
  "For You",
  "Action",
  "Hollywood In Hindi",
  "Top 10 Movies",
  "Tamil",
  "Romance",
  "Drama",
  "Kannada",
  "Bangla",
  "Thriller",
  "Comedy",
  "Hindi",
  "Crime",
  "Malayalam",
  "English",
];

export default function Movies() {
  const {
    moviesCarouselPosters,
    popularMoviesPosters,
    nowPlayingMoviesPosters,
    topRatedMoviesPosters,
    upcomingMoviesPosters,
  } = useCinema();
  return (
    <>
      <SuggestionTopics categories={categories} />
      <Carousel mainCarouselImages={moviesCarouselPosters} />
      <PostersCarousel
        heading={"Hot Right Now"}
        posters={popularMoviesPosters}
      />
      <PostersCarousel
        heading={"Most Rated Movies"}
        posters={topRatedMoviesPosters}
      />
      <PostersCarousel
        heading={"Fresh Episodes"}
        posters={nowPlayingMoviesPosters}
      />
      <PostersCarousel
        heading={"Upcoming Movies"}
        posters={upcomingMoviesPosters}
      />
    </>
  );
}
