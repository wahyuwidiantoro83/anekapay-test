import Link from "next/link";

export default function Card({
  title,
  date,
  desc,
  director,
  url,
}: {
  title: string;
  date: string;
  desc: string;
  director: string;
  url: string;
}) {
  return (
    <Link
      href={url}
      className=" w-60 lg:w-72 aspect-[3/4] border-2 rounded-xl group hover:shadow-md transition-all duration-500"
    >
      {" "}
      <div className="flex m-auto flex-col p-4 gap-2">
        <div className="flex w-[60%] aspect-square self-center justify-center items-center">
          <span className="text-center items-center text-9xl font-extrabold">{title[0]}</span>
        </div>
        <span className=" text-xl font-semibold line-clamp-1">{title}</span>
        <span className=" text-sm text-gray-400 line-clamp-1">{date}</span>
        <span className=" text-sm text-gray-600 line-clamp-3">{desc}</span>
        <span className=" text-sm text-gray-800 font-semibold line-clamp-3">{director}</span>
        <div className="flex gap-2 text-base font-bold group-hover:gap-3 transition-all duration-500">
          <span>See Details</span>
          <span>{"->"}</span>
        </div>
      </div>
    </Link>
  );
}
