import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex fixed bottom-0 w-full text-white">
      <Link to="https://github.com/JBroom86">
        <img
          src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png"
          className="h-12 ml-auto bg-black rounded-full"
          alt="Jeremiah's GitHub"
        />
      </Link>
      <Link to="https://www.linkedin.com/in/jeremiahbroom/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"
          className="h-12 "
          alt="Jeremiah's LinkedIn"
        />
      </Link>
      <Link to="mailto:jbroom86@gmail.com">
        <img
          src="https://media.istockphoto.com/id/1248990173/vector/glowing-neon-line-paper-plane-icon-isolated-on-black-background-paper-airplane-icon-aircraft.jpg?s=170667a&w=0&k=20&c=P8aZfrPOc3qqIUWSrf8Z4cd2fzmWVhPzg0NCIz3zyXQ="
          className="h-12 rounded-full"
          alt="Email Jeremiah"
        />
      </Link>
    </footer>
  );
}

export default Footer;
