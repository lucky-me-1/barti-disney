const API_BASE_URL = "https://api.disneyapi.dev";

/**
 * Fetches a list of characters from the Disney API.
 *
 * @param {number} [page=1] - The page number to fetch.
 * @param {number} [pageSize=8] - The number of characters per page.
 * @returns {Promise<any>} A promise that resolves to the JSON response containing the characters.
 * @throws {Error} If the fetch operation fails.
 */
export const fetchAllCharacters = async (page: number = 1, pageSize: number = 8) => {
    const response = await fetch(`${API_BASE_URL}/character?page=${page}&pageSize=${pageSize}`);
    if (!response.ok) {
        throw new Error("Failed to fetch characters.");
    }
    return response.json();
};

/**
 * Fetches a list of featured characters from the Disney API.
 * 
 * @returns {Promise<any>} A promise that resolves to the JSON response containing the featured characters.
 * @throws {Error} Throws an error if the fetch operation fails.
 */
export const fetchFeaturedCharacters = async () => {
    const response = await fetch(`${API_BASE_URL}/character?page=1&pageSize=4`);
    if (!response.ok) {
        throw new Error("Failed to fetch characters.");
    }
    return response.json();
};

/**
 * Fetches the details of a Disney character by their ID.
 *
 * @param id - The unique identifier of the Disney character.
 * @returns A promise that resolves to the character details in JSON format.
 * @throws Will throw an error if the fetch operation fails.
 */
export const fetchCharacterById = async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/character/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch character details.");
    }
    return response.json();
};

// Search characters by name
export const searchCharacters = async (query: string) => {
    const response = await fetch(`${API_BASE_URL}/character?name=${query}`);
    if (!response.ok) {
        throw new Error("Failed to search characters.");
    }
    return response.json();
};
