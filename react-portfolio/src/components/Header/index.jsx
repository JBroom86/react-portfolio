import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
      
      <div className="flex items-center mt-4 sm:mt-0 border border-brown-300 rounded-full p-2 shadow-md shadow-gray-300">
        <div className="p-4">Home</div>
        <div className="p-4">Projects</div>
        <div className="p-4">About Me</div>
        <div className="p-4">Resume</div>
      </div>
    </header>
  );
}

export default Header;
