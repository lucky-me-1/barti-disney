/**
 * Props for the UserProfile component.
 * 
 * @interface UserProfileProps
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 * @property {number} age - The age of the user.
 * @property {string} location - The location of the user.
 * @property {string} favoriteCharacter - The user's favorite Disney character.
 */
interface UserProfileProps {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
    favoriteCharacter: string;
  }
  
  const UserProfile: React.FC<UserProfileProps> = ({ firstName, lastName, age, location, favoriteCharacter }) => {
    return (
      <div className="user-profile">
        <h2>{firstName} {lastName}</h2>
        <p>Age: {age}</p>
        <p>Location: {location}</p>
        <p>Favorite Character: {favoriteCharacter}</p>
      </div>
    );
  };
  
  export default UserProfile;
  