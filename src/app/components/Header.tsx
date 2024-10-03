"use client";

import React, { useContext, useEffect, useState } from 'react';
import { DisneyLogo } from '../images/disney';
import { AvatarIcon } from '../images/avatar';
import { Input } from "@/components/ui/input"
import { CharacterContext } from '../providers/CharacterProvider';

/**
 * Header component that provides a search input and displays a logo and profile avatar.
 * 
 * @component
 * @example
 * return (
 *   <Header />
 * )
 * 
 * @returns {JSX.Element} The rendered header component.
 * 
 * @remarks
 * This component uses the `CharacterContext` to manage the search query state and to find characters based on the search input.
 * 
 * @context {CharacterContext} CharacterContext - Context to manage character search functionality.
 * 
 * @function handleKeyUp - Handles the key up event on the search input to trigger character search.
 * @param {React.KeyboardEvent<HTMLInputElement>} e - The keyboard event.
 * 
 * @function handleOnChange - Handles the change event on the search input to update the search query state.
 * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
 * 
 * @returns {JSX.Element} The rendered header component.
 */
const Header: React.FC = () => {
    const { findCharacters, searchQuery, setSearchQuery } = useContext(CharacterContext);

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!!e.currentTarget.value) {
            findCharacters(e.currentTarget.value);
        }
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.currentTarget.value);
    }

    return (
        <header className="header flex align-center justify-center gap-8 mb-8">
            <div className="logo">
                <DisneyLogo />
            </div>
            <div className="search flex-grow">
                <Input type="search" placeholder="Search" value={searchQuery}
                    className="bg-lightblue round-full rounded-[100px]" onKeyUp={handleKeyUp}
                    onChange={handleOnChange} />
            </div>
            <div className="profile">
                <AvatarIcon />
            </div>
        </header>
    );
};

export default Header;
