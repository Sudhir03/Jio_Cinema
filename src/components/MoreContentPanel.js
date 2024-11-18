import { useCinema } from "../contexts/jioCinemaContext";

export default function MoreContentPanel() {
  const { showMorePanel } = useCinema();
  return (
    <>
      {showMorePanel && (
        <div className="absolute  h-dynamic z-10 w-full bg-black bg-opacity-60">
          <div className=" flex h-[50%] w-[60%] bg-gray-900 rounded-b-xl border-[0.5px] border-yellow-50 border-opacity-50 mx-auto">
            <div className="flex flex-col h-full w-[60%] border-r-[0.5px] border-yellow-50 border-opacity-50 justify-center gap-y-4 px-10 py-16 ">
              <span className="text-white text-3xl font-extrabold">Browse</span>
              <div className="grid grid-cols-3 gap-4 ">
                <div className="flex flex-col items-center justify-center bg-gray-400 p-5 rounded-lg">
                  <img
                    className=" h-5 w-5"
                    src="/images/ic_premium_inactive.svg"
                    alt=""
                  />
                  <span className="text-gray-200 font-semibold">Premium</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-400 p-5 rounded-lg">
                  <img
                    className=" h-5 w-5"
                    src="/images/ic_news_inactive.svg"
                    alt=""
                  />
                  <span className="text-gray-200 font-semibold">News</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-400 p-5 rounded-lg">
                  <img
                    className=" h-5 w-5"
                    src="/images/ic_family_inactive.svg"
                    alt=""
                  />
                  <span className="text-gray-200 font-semibold">
                    Kids & Family
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-400 p-5 rounded-lg">
                  <img
                    className=" h-5 w-5"
                    src="/images/ic_originals_inactive.svg"
                    alt=""
                  />
                  <span className="text-gray-200 font-semibold">Originals</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-400 p-5 rounded-lg">
                  <img
                    className=" h-5 w-5"
                    src="/images/ic_cricket_inactive.svg"
                    alt=""
                  />
                  <span className="text-gray-200 font-semibold">Cricket</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-400 p-5 rounded-lg">
                  <img
                    className=" h-5 w-5"
                    src="/images/ic_hindi_inactive.svg"
                    alt=""
                  />
                  <span className="text-gray-200 font-semibold">Hindi</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full pt-16 gap-y-6 pl-10">
              <span className="text-white text-3xl font-extrabold">
                My JioCinema
              </span>
              <span className="flex gap-3">
                <img src="/images/ic_playlist_successful.svg" alt="" />
                <span className="text-white font-semibold">Watchlist</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
