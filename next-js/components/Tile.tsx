import Image from "next/image";

interface TileProps {
  number: number;
  coords: string;
  image?: string;
}

export default function Tile({ number, coords, image }: TileProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center  ${
        number % 2 === 0 ? "bg-[#779556]" : "bg-[#ebecd0]"
      }`}
    >
      {/* {coords} */}
      {image && (
        <Image
          src={image}
          alt="pawn"
          className="size-full select-none object-cover"
        />
      )}
    </div>
  );
}
