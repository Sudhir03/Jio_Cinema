import SuggestionTopics from "../components/SuggestionTopics";
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

  return <SuggestionTopics categories={categories} />;
}
