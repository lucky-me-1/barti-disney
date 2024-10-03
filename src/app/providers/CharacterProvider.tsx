"use client";

import React, { createContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { useQuery } from "@tanstack/react-query";
import { fetchAllCharacters, searchCharacters } from '../api/disneyApi';
import { Character } from '../models/disney';

/**
 * Props for the CharacterContext.
 * 
 * @interface CharacterContextProps
 * @property {Character[]} characters - An array of character objects.
 * @property {boolean} isCharactersLoading - Indicates if the characters are currently being loaded.
 * @property {boolean} isCharactersError - Indicates if there was an error loading the characters.
 * @property {(query: string) => void} findCharacters - Function to find characters based on a search query.
 * @property {string} searchQuery - The current search query string.
 * @property {(query: string) => void} setSearchQuery - Function to set the search query string.
 */
interface CharacterContextProps {
    characters: Character[];
    isCharactersLoading: boolean;
    isCharactersError: boolean;
    findCharacters: (query: string) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

/**
 * Context for managing character-related state and actions.
 * 
 * This context provides a way to share character data and operations
 * across the component tree without having to pass props down manually
 * at every level.
 * 
 * @type {React.Context<CharacterContextProps>}
 */
export const CharacterContext = createContext<CharacterContextProps>({} as CharacterContextProps);

/**
 * CharacterProvider is a React functional component that provides character-related data and state management
 * to its children components via the CharacterContext.
 *
 * @param {ReactNode} children - The child components that will have access to the character data and state.
 *
 * @returns {JSX.Element} A provider component that wraps its children with CharacterContext.
 *
 * @remarks
 * This component manages the state for characters, including loading and error states, and provides functions
 * to search for characters and update the search query.
 *
 * @example
 * ```tsx
 * <CharacterProvider>
 *   <YourComponent />
 * </CharacterProvider>
 * ```
 *
 * @context
 * The context value provided includes:
 * - `characters`: An array of characters.
 * - `isCharactersLoading`: A boolean indicating if the characters are currently being loaded.
 * - `isCharactersError`: A boolean indicating if there was an error loading the characters.
 * - `findCharacters`: A function to search for characters based on a query.
 * - `searchQuery`: The current search query string.
 * - `setSearchQuery`: A function to update the search query string.
 */
export const CharacterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [isCharactersLoading, setIsCharactersLoading] = useState<boolean>(false);
    const [isCharactersError, setIsCharactersError] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const findCharacters = useCallback(async (query: string) => {
        setIsCharactersLoading(true);
        const result = await searchCharacters(query);
        const data = result?.data || [];
        setIsCharactersLoading(false);
        setCharacters(data);
    }, []);

    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ["characters", 1],
        queryFn: () => fetchAllCharacters(1),
    });

    useEffect(() => {
        if (data) {
            setCharacters(data.data);
        }
    }, [data]);

    useEffect(() => {
        setIsCharactersLoading(isLoading);
    }, [isLoading]);

    useEffect(() => {
        setIsCharactersError(!!error);
    }, [error]);

    useEffect(() => {
        (async () => {
            if (!!!searchQuery) {
                const { data: result } = await refetch();
                if (result.data) {
                    setCharacters(result.data);
                }
            }
        })();
    }, [searchQuery]);

    const values = {
        characters,
        isCharactersLoading,
        isCharactersError,
        findCharacters,
        searchQuery,
        setSearchQuery
    }

    return (
        <CharacterContext.Provider value={values}>
            {children}
        </CharacterContext.Provider>
    );
};