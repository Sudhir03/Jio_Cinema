import SuggestionTopics from "../components/SuggestionTopics";
import Carousel from "../components/Carousel";
import PostersCarousel from "../components/PostersCarousel";
import { useCinema } from "../contexts/jioCinemaContext";

export default function Home() {
  const {
    popularPosters,
    nowPlayingPosters,
    topRatedPosters,
    upcomingMoviesPosters,
  } = useCinema();
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

  return (
    <>
      <SuggestionTopics categories={categories} />
      <Carousel />
      <PostersCarousel heading={"Hot Right Now"} posters={popularPosters} />
      <PostersCarousel
        heading={"Upcoming Movies"}
        posters={upcomingMoviesPosters}
      />
      <PostersCarousel heading={"Fresh Episodes"} posters={nowPlayingPosters} />
      <PostersCarousel
        heading={"Most Rated Movies"}
        posters={topRatedPosters}
      />
    </>
  );
}
