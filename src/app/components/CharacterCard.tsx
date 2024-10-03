import React from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Props for the CharacterCard component.
 *
 * @interface CharacterCardProps
 * @property {number} id - The unique identifier for the character.
 * @property {string} name - The name of the character.
 * @property {string} imageUrl - The URL of the character's image.
 * @property {string[]} films - A list of films the character appears in.
 */
interface CharacterCardProps {
  id: number;
  name: string;
  imageUrl: string;
  films: string[];
}

/**
 * A React functional component that displays a character card with an image, name, and featured films.
 * 
 * @component
 * @param {CharacterCardProps} props - The properties object.
 * @param {string} props.id - The unique identifier for the character.
 * @param {string} props.name - The name of the character.
 * @param {string} props.imageUrl - The URL of the character's image.
 * @param {string[]} props.films - An array of films in which the character is featured.
 * 
 * @returns {JSX.Element} A JSX element representing the character card.
 */
const CharacterCard: React.FC<CharacterCardProps> = ({ id, name, imageUrl, films }) => {
  return (
    <div className="flex flex-col bg-white text-center relative">
      <Image
        src={imageUrl}
        alt={name}
        width={248}
        height={248}
        className="w-full h-48 object-cover mb-4 object-center"
        priority={true}
      />
      <div className="flex flex-col flex-grow items-center gap-2 align-center justify-center px-4 pb-4 ">
        <h3 className="font-bold text-lg line-clamp-1">{name}</h3>

        <div className="flex-grow">
          {
            films.length > 0 && (<>
              <p className="text-sm font-bold">Featured Films</p>
              <p className="text-sm line-clamp-2 content-center">{films.join(', ')}</p>
            </>)
          }
        </div>
        <div className="">
          <Link href={`/character/${id}`} className="text-primary font-black underline underline-offset-4">
            VIEW PROFILE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
