import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 sm:mt-0 ">
      <span className="text-3xl sm:text-7xl ">
        <strong className="hover:text-blue-900 transition-colors duration-300">
          J
        </strong>
        <strong className="hover:text-blue-800 transition-colors duration-300">
          e
        </strong>
        <strong className="hover:text-blue-700 transition-colors duration-300">
          r
        </strong>
        <strong className="hover:text-blue-600 transition-colors duration-300">
          e
        </strong>
        <strong className="hover:text-blue-500 transition-colors duration-300">
          m
        </strong>
        <strong className="hover:text-blue-400 transition-colors duration-300">
          i
        </strong>
        <strong className="hover:text-blue-300 transition-colors duration-300">
          a
        </strong>
        <strong className="hover:text-blue-200 transition-colors duration-300">
          h
        </strong>{" "}
        <strong className="hover:text-pink-200 transition-colors duration-300">
          {" "}
          B
        </strong>
        <strong className="hover:text-pink-300 transition-colors duration-300">
          r
        </strong>
        <strong className="hover:text-pink-400 transition-colors duration-300">
          o
        </strong>
        <strong className="hover:text-pink-500 transition-colors duration-300">
          o
        </strong>
        <strong className="hover:text-pink-600 transition-colors duration-300">
          m
        </strong>
      </span>

      <div>
        <div className="flex items-center mt-4 sm:mt-0 font-bold">
          <div className="relative group flex gap-4">
            <div
              className="
        absolute 
        -inset-0.5 
        bg-gradient-to-r 
        from-pink-600 
        to-blue-600 
        rounded-xl 
        blur-3xl 
        opacity-75 
        group-hover:opacity-100 
        transition 
        duration-1000
        group-hover:duration-500
        animate-tilt
      "
            ></div>
            <Link to="/">
              <div className="p-2 relative bg-black rounded-lg sm:p-4 bg-opacity-50">
                Home
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUJU7Jq37PKxxQoc4cHG695gTtsrjEvn1C1iB8xbU8eg&s"
                  className="h-8 sm:h-10 mx-auto"
                />
              </div>
            </Link>
            <Link to="/projects">
              <div className="p-2 relative bg-black rounded-lg sm:p-4 font-bold bg-opacity-50">
                Projects
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKdDwYVYVKRY-h41PjL-rkD6nJEGzSVWe2gXpqWE&s"
                  className="h-8 sm:h-10 mx-auto"
                />
              </div>
            </Link>
            <Link to="/about">
              <div className="p-2 relative bg-black rounded-lg sm:p-4 font-bold bg-opacity-50">
                About Me
                <img
                  src="https://p.kindpng.com/picc/s/421-4212648_member-person-icon-clipart-hd-png-download.png"
                  className="h-8 sm:h-10 invert mx-auto"
                />
              </div>
            </Link>
            <Link to="/resume">
              <div className="p-2 relative bg-black rounded-lg sm:p-4 font-bold bg-opacity-50">
                Resume
                <img
                  src="data:image/png;base64,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"
                  className="h-8 sm:h-10 mx-auto"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
