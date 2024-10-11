function SuggestedTopics({ topics }) {
  return (
    <>
      <div className="  w-full h-[80px] flex justify-between items-center bg-[#0d1a27] px-10 ">
        {topics.map((topic, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? "bg-white text-black " : "bg-gray-500 bg-opacity-50"
            } pt-1 px-[8px] h-[35px] w-auto max-w-[150px] text-white text-[16px] text-nowrap  rounded-3xl font-semibold cursor-pointer  hover:bg-opacity-100`}
          >
            {topic}
          </div>
        ))}
      </div>
    </>
  );
}
export default SuggestedTopics;
