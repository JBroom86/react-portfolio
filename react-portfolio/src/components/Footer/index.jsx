import { Link } from "react-router-dom";

function Footer() {
    return (
      <footer className="flex fixed bottom-0 w-full text-white">
        <Link to="https://github.com/JBroom86">        
        <img
          src="https://cdn.onlinewebfonts.com/svg/img_326384.png"
          className="h-12 ml-auto"
          alt="First Image"
        />
        </Link>
        <Link to="https://www.linkedin.com/in/jeremiahbroom/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"
          className="h-12 "
          alt="Second Image"
        />
        </Link>
      </footer>
    );
  }
  
  export default Footer;
  