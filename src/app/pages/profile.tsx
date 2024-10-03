import React from "react";
import UserProfileForm from "../components/UserProfileForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cookies from "js-cookie";

/**
 * ProfilePage component displays the user's profile information if available,
 * otherwise it renders a form to collect the user's profile details.
 *
 * The component retrieves the user profile from cookies and parses it.
 * If the profile is found, it displays the user's first name, last name,
 * location (city and state), and favorite character.
 * If the profile is not found, it renders the UserProfileForm component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const ProfilePage: React.FC = () => {
  const savedProfile = Cookies.get("userProfile");
  const userProfile = savedProfile ? JSON.parse(savedProfile) : null;

  return (
    <div>
      <Header />
      {userProfile ? (
        <div>
          <h1>{userProfile.firstName} {userProfile.lastName}</h1>
          <p>Location: {userProfile.city}, {userProfile.state}</p>
          <p>Favorite Character: {userProfile.favoriteCharacter}</p>
        </div>
      ) : (
        <UserProfileForm />
      )}
      <Footer />
    </div>
  );
};

export default ProfilePage;
