import SuggestionTopics from "../components/SuggestionTopics";
import Carousel from "../components/Carousel";
import PostersCarousel from "../components/PostersCarousel";
import { useCinema } from "../contexts/jioCinemaContext";

const categories = [
  "For You",
  "Anime",
  "Bigg Boss",
  "BBK",
  "Bigg Boss Marathi",
  "Reality",
  "Khatron Ke Khiladi",
  "Top 10 Shows",
  "Crime",
  "Romance",
  "Kannada",
  "Bangla",
  "Horror",
  "Hindi",
  "English",
  "Thriller",
  "Tamil",
  "Gujarati",
  "Marathi",
  "Drama",
  "Comedy",
  "Action",
];

export default function TvShows() {
  const {
    tvShowsCarouselPosters,
    popularTvShowsPosters,
    nowPlayingTvShowsPosters,
    topRatedtvShowsPosters,
    upcomingTvShowsPosters,
  } = useCinema();
  return (
    <>
      <SuggestionTopics categories={categories} />
      <Carousel mainCarouselImages={tvShowsCarouselPosters} />
      <PostersCarousel
        heading={"Hot Right Now"}
        posters={popularTvShowsPosters}
      />
      <PostersCarousel
        heading={"Upcoming Movies"}
        posters={upcomingTvShowsPosters}
      />
      <PostersCarousel
        heading={"Fresh Episodes"}
        posters={nowPlayingTvShowsPosters}
      />
      <PostersCarousel
        heading={"Most Rated Movies"}
        posters={topRatedtvShowsPosters}
      />
    </>
  );
}
