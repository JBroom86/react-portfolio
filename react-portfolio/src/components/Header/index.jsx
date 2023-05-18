import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 sm:mt-0 ">
      <span className="text-3xl sm:text-7xl "><strong className="hover:text-blue-900 transition-colors duration-300">J</strong><strong className="hover:text-blue-800 transition-colors duration-300">e</strong><strong className="hover:text-blue-700 transition-colors duration-300">r</strong><strong className="hover:text-blue-600 transition-colors duration-300">e</strong><strong className="hover:text-blue-500 transition-colors duration-300">m</strong><strong className="hover:text-blue-400 transition-colors duration-300">i</strong><strong className="hover:text-blue-300 transition-colors duration-300">a</strong><strong className="hover:text-blue-200 transition-colors duration-300">h</strong> <strong className="hover:text-orange-200 transition-colors duration-300"> B</strong><strong className="hover:text-orange-300 transition-colors duration-300">r</strong><strong className="hover:text-orange-400 transition-colors duration-300">o</strong><strong className="hover:text-orange-500 transition-colors duration-300">o</strong><strong className="hover:text-orange-600 transition-colors duration-300">m</strong></span>

      <div className="flex items-center mt-4 sm:mt-0 font-bold">
        <Link to="/">
        <div className="p-2 sm:p-4">
          Home
          <img
            src="https://w7.pngwing.com/pngs/848/762/png-transparent-computer-icons-home-house-home-angle-building-rectangle-thumbnail.png"
            className="h-8 sm:h-10"
          />
        </div>
        </Link>
        <Link to="/projects">
        <div className="p-2 sm:p-4 font-bold">
          Projects
          <img
            src="https://w7.pngwing.com/pngs/360/232/png-transparent-computer-icons-the-book-thief-book-angle-rectangle-curriculum-thumbnail.png"
            className="h-8 sm:h-10"
          />
        </div>
        </Link>
        <Link to="/about">
        <div className="p-2 sm:p-4 font-bold">
          About Me
          <img
            src="https://e7.pngegg.com/pngimages/518/64/png-clipart-person-icon-computer-icons-user-profile-symbol-person-miscellaneous-monochrome-thumbnail.png"
            className="h-8 sm:h-10"
          />
        </div>
        </Link>
        <Link to="/resume">
        <div className="p-2 sm:p-4 font-bold">
          Resume
          <img
            src="https://simg.nicepng.com/png/small/38-387621_pen-and-paper-comments-free-paper-icon-vector.png"
            className="h-8 sm:h-10"
          />
        </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
