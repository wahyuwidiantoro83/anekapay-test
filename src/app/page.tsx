import Link from "next/link";

export default function Home() {
  return (
    <div className="container lg:w-[1024px] m-auto h-screen relative overflow-auto">
      <div className="flex w-full h-full py-12">
        <div className="flex flex-col w-full h-full justify-between gap-4">
          <div className="flex max-sm:flex-col p-4 lg:p-0 gap-4 justify-between items-center">
            <div className="p-4 border-2 from-green-100 to-blue-200 backdrop-blur-lg rounded-xl">
              <span className="text-sm font-mono font-semibold">
                Application to fulfill the IT Frontend test at Anekapay
              </span>
            </div>
            <div className="">
              <span className="text-xl font-mono font-semibold">By Wahyu Widiantoro</span>
            </div>
          </div>
          <div className="flex justify-center text-center cursor-pointer group">
            <h1 className="text-5xl lg:text-6xl font-bold drop-shadow-md group-hover:drop-shadow-2xl transition-all duration-500">
              StarWars Database
            </h1>
          </div>

          <div className="flex max-sm:flex-col gap-4 p-4 lg:p-0">
            <Link
              href={"/films"}
              className="flex flex-1 flex-col gap-3 border-2 rounded-xl p-4 backdrop-blur-xl group hover:shadow-lg transition-all duration-500 cursor-pointer"
            >
              <div className="flex text-2xl font-semibold gap-2 group-hover:gap-4 transition-all duration-500">
                <span>StarWars Films</span>
                <span>{"->"}</span>
              </div>
              <p className="text-base text-gray-600">
                List of populars StarWars Films that you must watch before you die.
              </p>
            </Link>
            <Link
              href={"/characters"}
              className="flex flex-1 flex-col gap-3 border-2 rounded-xl p-4 backdrop-blur-xl group hover:shadow-lg transition-all duration-500 cursor-pointer"
            >
              <div className="flex text-2xl font-semibold gap-2 group-hover:gap-4 transition-all duration-500">
                <span>StarWars Characters</span>
                <span>{"->"}</span>
              </div>
              <p className="text-base text-gray-600">
                List of majestic cahracters that appears on StarWars, they are have their own unique
                that make them special and standout among others
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
