import SuggestionTopics from "../components/SuggestionTopics";
import Carousel from "../components/Carousel";
import PostersCarousel from "../components/PostersCarousel";
import { useCinema } from "../contexts/jioCinemaContext";

const categories = [
  "For You",
  "IND vs BAN",
  "Ranji Trophy",
  "Badminton",
  "Global Chess League",
  "ISL",
  "Motorsports",
  "IND vs NZ",
  "SA20",
  "Cricket 🏏",
  "TATA IPL",
  "Football ⚽",
  "Paralympics 🥇 ",
  " Athletics",
  "Olympics🥇",
  "UTT",
  "India @ Olympics",
  "Hockey",
  "TATA IPL Classics",
  "TATA IPL Highlights",
  "Paris 2024 Highlights",
  "Top 10",
  "Studios",
  "Coming Soon",
  "Creators Adda",
  "Live",
  "News",
];

export default function Sports() {
  const {
    sportsCarouselPosters,
    popularSportsPosters,
    nowPlayingSportsPosters,
    topRatedSportsPosters,
    upcomingSportsPosters,
  } = useCinema();
  return (
    <>
      <SuggestionTopics categories={categories} />
      <Carousel mainCarouselImages={sportsCarouselPosters} />
      <PostersCarousel
        heading={"Hot Right Now"}
        posters={popularSportsPosters}
      />
      <PostersCarousel
        heading={"Upcoming Movies"}
        posters={upcomingSportsPosters}
      />
      <PostersCarousel
        heading={"Fresh Episodes"}
        posters={nowPlayingSportsPosters}
      />
      <PostersCarousel
        heading={"Most Rated Movies"}
        posters={topRatedSportsPosters}
      />
    </>
  );
}
