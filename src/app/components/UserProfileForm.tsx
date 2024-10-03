"use client";

import React, { useState } from "react";
import Cookies from "js-cookie";

/**
 * UserProfileForm component allows users to update their profile information.
 * The form includes fields for first name, last name, city, state, favorite character,
 * favorite movie, and favorite Disneyland.
 *
 * @component
 * @example
 * return (
 *   <UserProfileForm />
 * )
 *
 * @returns {JSX.Element} A form for updating user profile information.
 *
 * @remarks
 * The form data is stored in the component's state and updated via the handleChange function.
 * Upon form submission, the data is saved in cookies and an alert is shown to the user.
 */
const UserProfileForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    favoriteCharacter: "",
    favoriteMovie: "",
    favoriteDisneyland: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Cookies.set("userProfile", JSON.stringify(formData));
    alert("Profile updated!");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default UserProfileForm;
