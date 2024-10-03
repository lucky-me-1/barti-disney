/**
 * Represents a Disney character with various attributes.
 * 
 * @interface Character
 * 
 * @property {number} _id - Unique identifier for the character.
 * @property {string} name - Name of the character.
 * @property {string} [sourceUrl] - Optional URL to the source of the character.
 * @property {string[]} films - List of films the character appears in.
 * @property {string[]} shortFilms - List of short films the character appears in.
 * @property {string[]} tvShows - List of TV shows the character appears in.
 * @property {string[]} videoGames - List of video games the character appears in.
 * @property {string[]} parkAttractions - List of park attractions the character is associated with.
 * @property {string[]} allies - List of allies of the character.
 * @property {string[]} enemies - List of enemies of the character.
 * @property {string} imageUrl - URL to an image of the character.
 * @property {string} url - URL to more information about the character.
 * @property {string} [createdAt] - Optional timestamp of when the character was created.
 * @property {string} [updatedAt] - Optional timestamp of when the character was last updated.
 */
export interface Character {
    _id: number;
    name: string;
    sourceUrl?: string; // Optional field
    films: string[];
    shortFilms: string[];
    tvShows: string[];
    videoGames: string[];
    parkAttractions: string[];
    allies: string[];
    enemies: string[];
    imageUrl: string;
    url: string;
    createdAt?: string; // Optional field
    updatedAt?: string; // Optional field
}

/**
 * Interface representing pagination information.
 * 
 * @property {number} totalPages - The total number of pages available.
 * @property {number} count - The total number of items.
 * @property {string | null} [previousPage] - The URL of the previous page, or null if there is no previous page.
 * @property {string | null} [nextPage] - The URL of the next page, or null if there is no next page.
 */
export interface PaginationInfo {
    totalPages: number;
    count: number;
    previousPage?: string | null; // Can be null if there’s no previous page
    nextPage?: string | null; // Can be null if there’s no next page
}

/**
 * Represents a list of Disney characters along with pagination information.
 * 
 * @interface CharacterList
 * @property {PaginationInfo} info - The pagination information for the character list.
 * @property {Character[]} data - The array of Disney characters.
 */
export interface CharacterList {
    info: PaginationInfo;
    data: Character[];
}