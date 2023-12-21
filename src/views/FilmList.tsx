import Card from "@/components/FilmCard";

export default function FilmList({ data }: any) {
  function printFIlm(arr: any) {
    return arr.map((val: any, idx: number) => {
      return (
        <Card
          key={val.id}
          title={val.title}
          date={val.releaseDate}
          desc={val.openingCrawl}
          director={val.director}
          url={`/films/details/${val.id}`}
        />
      );
    });
  }
  return <>{printFIlm(data)}</>;
}
