import { DisneyLogo } from "../images/disney";
import FeaturedList from "./FeaturedList";

/**
 * Footer component that displays a featured list and a footer section.
 * The footer section includes the Disney logo and a disclaimer text.
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 */
const Footer: React.FC = () => (
  <>
    <FeaturedList />
    <footer className="footer mt-8 flex flex-col align-center justify-center items-center text-center gap-[10px]">
      <div className="logo">
        <DisneyLogo />
      </div>
      <p className="px-10 text-[11px]">For educational use only. All characters and content are the property of Disney. This test is for private use and development testing only and should not be distributed for public consumption </p>
    </footer >
  </>
);

export default Footer;
