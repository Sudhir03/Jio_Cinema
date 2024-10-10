function Search() {
  return (
    <div className="flex items-center ml-auto rounded-full bg-gray-700 px-4 py-2 gap-4">
      <img src="./images/ic_search.svg" alt="search icon" />
      <input
        className="bg-gray-700 outline-none text-white "
        type="text"
        placeholder="Movies, Shows and more"
      />
      <img src="./images/voice-search.svg" alt="mic icon" />
    </div>
  );
}

export default Search;
