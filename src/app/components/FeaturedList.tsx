// app/components/CharacterList.tsx

import React, { ReactNode } from "react";
import CharacterCard from "./CharacterCard";
import { cn } from '@/lib/utils';
import { fetchFeaturedCharacters } from "../api/disneyApi";
import { useQuery } from "@tanstack/react-query";
import { CharacterList } from "../models/disney";

/**
 * Props for the FeaturedList component.
 * 
 * @interface FeaturedListProps
 * @property {string} [className] - Optional CSS class name to apply to the component.
 */
interface FeaturedListProps {
    className?: string;
}

/**
 * FeaturedList component fetches and displays a list of featured characters.
 * 
 * @component
 * @param {FeaturedListProps} props - The props for the FeaturedList component.
 * @param {string} props.className - Additional class names to style the component.
 * 
 * @returns {JSX.Element} The rendered FeaturedList component.
 * 
 * @example
 * <FeaturedList className="custom-class" />
 * 
 * @remarks
 * This component uses the `useQuery` hook to fetch data from the `fetchFeaturedCharacters` function.
 * It displays a loading message while the data is being fetched and an error message if the fetch fails.
 * The fetched characters are displayed using the `CharacterCard` component.
 */
const FeaturedList: React.FC<FeaturedListProps> = ({ className }) => {
    const { data, error, isLoading } = useQuery<CharacterList>({
        queryKey: ["featuredCharacters"],
        queryFn: () => fetchFeaturedCharacters()
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading characters.</div>;

    return (
        <div className="bg-disneyblue flex flex-col gap-[40px] p-8 ">
            <h1 className="text-white text-4xl text-center">Featured Characters!</h1>
            <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12  ", className)} >
                {data?.data && data.data.map((character) => (
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

export default FeaturedList;
