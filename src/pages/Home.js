import SuggestionTopics from "../components/SuggestionTopics";
import Carousel from "../components/Carousel";
import PostersCarousel from "../components/PostersCarousel";
import { useCinema } from "../contexts/jioCinemaContext";

const categories = [
  "For You",
  "INDvsBAN",
  "Bigg Boss",
  "BBK",
  "ISL",
  "FREE Anime",
  "FREE Movies",
  "Cricket",
  "Kids & Family",
  "Big Boss Marathi",
  "Bandminton",
  "KKK",
  "Reality",
  "FREE Shows",
  "Premium",
];

export default function Home() {
  const {
    moviesCarouselPosters,
    popularSportsPosters,
    nowPlayingTvShowsPosters,
    topRatedMoviesPosters,
    upcomingSportsPosters,
  } = useCinema();

  return (
    <>
      <SuggestionTopics categories={categories} />
      <Carousel mainCarouselImages={moviesCarouselPosters} />
      <PostersCarousel
        heading={"Hot Right Now"}
        posters={popularSportsPosters}
      />
      <PostersCarousel
        heading={"Fresh Episodes"}
        posters={nowPlayingTvShowsPosters}
      />
      <PostersCarousel
        heading={"Most Rated Movies"}
        posters={topRatedMoviesPosters}
      />
      <PostersCarousel
        heading={"Upcoming Movies"}
        posters={upcomingSportsPosters}
      />
    </>
  );
}
