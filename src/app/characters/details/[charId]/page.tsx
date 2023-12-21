"use client";
import { getCharacterDetails } from "@/helpers/API";
import { useEffect, useState } from "react";

export default function CharacterDetails({ params }: { params: { charId: string } }) {
  interface detailCharacter {
    name: string;
    birthYear: string;
    eyeColor: string;
    gender: string;
    hairColor: string;
    height: string;
    mass: string;
    skinColor: string;
  }
  const [detail, setDetail] = useState<detailCharacter>({
    name: "",
    birthYear: "",
    eyeColor: "",
    gender: "",
    hairColor: "",
    height: "",
    mass: "",
    skinColor: "",
  });

  useEffect(() => {
    const decoded: string = decodeURIComponent(params.charId);
    async function getDataDetail() {
      const result = await getCharacterDetails(decoded);
      setDetail(result.data.person);
    }
    getDataDetail();
  }, [params.charId]);

  return (
    <div className="container lg:w-[1024px] m-auto h-screen relative overflow-auto">
      <div className="flex w-full h-full py-12 relative overflow-auto">
        <div className="flex flex-col w-full h-full gap-4 justify-center">
          <div className="flex flex-col gap-2 ">
            <span className=" text-sm font-bold">Character name:</span>
            <span className="text-6xl font-extrabold">{detail.name}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold">Birth year:</span>
            <span className="text-large font-normal">{detail.birthYear}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold">Eye color:</span>
            <span className="text-large font-normal">{detail.eyeColor}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold">Gender:</span>
            <span className="text-large font-normal">{detail.gender}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold">Hair color:</span>
            <span className="text-large font-normal">{detail.hairColor}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold">Height:</span>
            <span className="text-large font-normal">{detail.height}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold">Mass:</span>
            <span className="text-large font-normal">{detail.mass}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold">Skin color:</span>
            <span className="text-large font-normal">{detail.skinColor}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
