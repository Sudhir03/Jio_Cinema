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
    homeCarouselPosters,
    popularHomePosters,
    nowPlayingHomePosters,
    topRatedHomePosters,
    upcomingHomePosters,
  } = useCinema();

  return (
    <>
      <SuggestionTopics categories={categories} />
      <Carousel mainCarouselImages={homeCarouselPosters} />
      <PostersCarousel heading={"Hot Right Now"} posters={popularHomePosters} />
      <PostersCarousel
        heading={"Upcoming Movies"}
        posters={upcomingHomePosters}
      />
      <PostersCarousel
        heading={"Fresh Episodes"}
        posters={nowPlayingHomePosters}
      />
      <PostersCarousel
        heading={"Most Rated Movies"}
        posters={topRatedHomePosters}
      />
    </>
  );
}
