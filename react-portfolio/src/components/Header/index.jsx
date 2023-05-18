import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 sm:mt-0 border border-brown-300 rounded-full shadow-md shadow-gray-300">
      <span className="text-7xl font-bold">Jeremiah Broom</span>

      <div className="flex items-center mt-4 sm:mt-0 border border-brown-300 rounded-full p-2 shadow-md shadow-gray-300">
        <div className="p-4">
          Home
          <img
            src="https://w7.pngwing.com/pngs/848/762/png-transparent-computer-icons-home-house-home-angle-building-rectangle-thumbnail.png"
            className="h-10 "
          />
        </div>
        <div className="p-4">
          Projects
          <img
            src="https://w7.pngwing.com/pngs/360/232/png-transparent-computer-icons-the-book-thief-book-angle-rectangle-curriculum-thumbnail.png"
            className="h-10 "
          />
        </div>
        <div className="p-4">
          About Me
          <img
            src="https://e7.pngegg.com/pngimages/518/64/png-clipart-person-icon-computer-icons-user-profile-symbol-person-miscellaneous-monochrome-thumbnail.png"
            className="h-10 "
          />
        </div>
        <div className="p-4">
          Resume
          <img
            src="https://simg.nicepng.com/png/small/38-387621_pen-and-paper-comments-free-paper-icon-vector.png"
            className="h-10 "
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
