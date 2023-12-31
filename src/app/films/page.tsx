"use client";
import { getAllFilms } from "@/helpers/API";
import FilmList from "@/views/FilmList";
import { useEffect, useState } from "react";

export default function Page() {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState("");

  useEffect(() => {
    async function getData() {
      const result = await getAllFilms();
      localStorage.setItem("filmsData", JSON.stringify(result.data.allFilms.films));
      setFilms(result.data.allFilms.films.slice(0, 6));
    }
    getData();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("filmsData")) {
      const data: string = localStorage.getItem("filmsData") || "";
      setTimeout(() => {
        setFilms(
          JSON.parse(data)
            .filter((val: any, idx: number) => val.title.toLowerCase().includes(key.toLowerCase()))
            .slice(0, page * 6)
        );
        setLoading(false);
      }, 500);
    }
  }, [page, key]);

  const handleSearch = (e: any) => {
    setTimeout(() => {
      if (e.target.value.length >= 2 || e.target.value === "") {
        setKey(e.target.value);
        setPage(1);
      }
    }, 500);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      const newPage = page + 1;
      setPage(newPage);
      setLoading(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page, handleScroll]);

  return (
    <div className="data-container container lg:w-[1024px] m-auto">
      <div className="flex w-full h-full py-12 relative">
        <div className="flex flex-col w-full h-full justify-evenly gap-4">
          <div className="flex justify-center text-center cursor-pointer group">
            <h1 className="text-5xl lg:text-6xl font-bold drop-shadow-md group-hover:drop-shadow-2xl transition-all duration-500">
              StarWars Films
            </h1>
          </div>
          <div className="flex w-full justify-center">
            <input
              type="text"
              className="border-2 border-gray-800 rounded-xl py-2 px-4"
              placeholder="Type search keyword"
              onChange={handleSearch}
            />
          </div>
          <div className="data-container flex p-6 justify-center">
            <div className="grid grid-cols-3 gap-4 min-h-[350px]">
              <FilmList data={films} />
            </div>
          </div>
          <div className={`flex ${loading ? "" : "invisible"} justify-center`}>
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-16 h-16 text-gray-200 animate-spin  fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
