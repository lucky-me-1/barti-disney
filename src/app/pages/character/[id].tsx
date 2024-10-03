"use client";


import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacterById } from "../../api/disneyApi";

/**
 * Component to display detailed information about a specific character.
 * 
 * This component fetches character details based on the `id` parameter from the URL query.
 * It uses the `useQuery` hook to fetch data from the `fetchCharacterById` function.
 * 
 * @component
 * @example
 * // Example usage:
 * // Assuming the URL is /character/1, the component will fetch and display details for the character with ID 1.
 * <CharacterDetails />
 * 
 * @returns {JSX.Element} A React component that displays character details including name, image, films, short films, TV shows, and a link to more details.
 * 
 * @remarks
 * - Displays a loading message while fetching data.
 * - Displays an error message if there is an error fetching data.
 * - Only fetches data if the `id` parameter exists in the URL query.
 */
const CharacterDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch character details
  const { data, error, isLoading } = useQuery({
    queryKey: ["character", id],
    queryFn: () => fetchCharacterById(Number(id)),
    enabled: !!id // Only run if id exists
  });

  if (isLoading) return <div>Loading character...</div>;
  if (error) return <div>Error loading character details.</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.imageUrl} alt={data.name} />
      <p>Films: {data.films.join(", ")}</p>
      <p>Short Films: {data.shortFilms.join(", ")}</p>
      <p>TV Shows: {data.tvShows.join(", ")}</p>
      <a href={data.sourceUrl} target="_blank" rel="noopener noreferrer">
        Explore More Character Details
      </a>
    </div>
  );
};

export default CharacterDetails;
