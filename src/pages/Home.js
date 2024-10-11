import SuggestionTopics from "../components/SuggestionTopics";
export default function Home() {
  const topics = [
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

  return <SuggestionTopics topics={topics} />;
}
