import Card from "@/components/CharacterCard";

export default function CharacterList({ data }: any) {
  function frintChar(arr: any) {
    return arr.map((val: any, idx: number) => {
      return (
        <Card
          key={val.id}
          name={val.name}
          birthYear={val.birthYear}
          gender={val.gender}
          url={`/characters/details/${val.id}`}
        />
      );
    });
  }
  return <>{frintChar(data)}</>;
}
