"use client";

import { getFilmDetails } from "@/helpers/API";
import { useEffect, useState } from "react";

export default function FilmDetails({ params }: { params: { filmId: string } }) {
  interface detailFilm {
    title: string;
    openingCrawl: string;
    director: string;
    producers: [];
    releaseDate: string;
  }
  const [detail, setDetail] = useState<detailFilm>({
    title: "",
    openingCrawl: "",
    director: "",
    producers: [],
    releaseDate: "",
  });

  useEffect(() => {
    const decoded: string = decodeURIComponent(params?.filmId);
    async function getDataDetail() {
      const result = await getFilmDetails(decoded);
      setDetail(result.data.film);
    }
    getDataDetail();
  }, [params.filmId]);

  return (
    <div className="container lg:w-[1024px] m-auto h-screen relative overflow-auto">
      <div className="flex w-full h-full py-12 relative overflow-auto">
        <div className="flex flex-col w-full h-full gap-4 justify-center">
          <div className="flex flex-col gap-2 ">
            <span className=" text-sm font-bold">Title:</span>
            <span className="text-6xl font-extrabold">{detail.title}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold">Description:</span>
            <span className="text-base font-light">{detail.openingCrawl}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold">Release date:</span>
            <span className="text-large font-normal">{detail.releaseDate}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold">Directed by:</span>
            <span className="text-large font-normal">{detail.director}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold">produced by:</span>
            <span className="text-large font-normal">
              {detail.producers.map((val, idx) => `${val}`).join(", ")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
