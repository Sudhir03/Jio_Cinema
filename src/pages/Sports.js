import SuggestionTopics from "../components/SuggestionTopics";
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
  return <SuggestionTopics categories={categories} />;
}
