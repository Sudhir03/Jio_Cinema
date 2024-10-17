import SuggestionTopics from "../components/SuggestionTopics";

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
  return <SuggestionTopics categories={categories} />;
}
