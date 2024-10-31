import SuggestionTopics from "../components/SuggestionTopics";
import Carousel from "../components/Carousel";
import Suggestions from "../components/Suggestions";

export default function Home() {
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

  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <SuggestionTopics categories={categories} />
      <Carousel slides={SLIDES} options={OPTIONS} />
      <Suggestions />
    </>
  );
}
