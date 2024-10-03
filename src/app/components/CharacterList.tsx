import React, { useContext } from "react";
import CharacterCard from "./CharacterCard";
import { cn } from '@/lib/utils';
import { CharacterContext } from "../providers/CharacterProvider";

/**
 * Props for the CharacterList component.
 * 
 * @interface CharacterListProps
 * @property {string} [className] - Optional CSS class name to apply to the component.
 */
interface CharacterListProps {
  className?: string;
}

/**
 * CharacterList component renders a list of character cards.
 * It displays a search result header if a search query is present.
 * 
 * @component
 * @param {CharacterListProps} props - The props for the CharacterList component.
 * @param {string} props.className - Additional class names for styling the component.
 * 
 * @returns {JSX.Element} The rendered CharacterList component.
 * 
 * @example
 * <CharacterList className="custom-class" />
 * 
 * @remarks
 * This component uses the `CharacterContext` to access the list of characters and the search query.
 * It displays the characters in a responsive grid layout.
 */
const CharacterList: React.FC<CharacterListProps> = ({ className }) => {
  const { characters, searchQuery } = useContext(CharacterContext);

  return (
    <div className="p-8 bg-lightblue">
      {((searchQuery?.length || 0) > 0) && (
        <h1 className="text-center text-4xl font-normal mb-8">Search Results - {searchQuery}</h1>
      )}

      <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ", className)} >
        {characters.map((character) => (
          <CharacterCard
            key={character._id}
            id={character._id}
            name={character.name}
            imageUrl={character.imageUrl}
            films={character.films}
          />
        ))}
      </div>
    </div>

  );
};

export default CharacterList;


