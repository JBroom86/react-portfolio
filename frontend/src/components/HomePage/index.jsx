import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex justify-center items-start h-full sm:pb-10 sm:pt-1">
      <div className="flex flex-col items-center sm:mt-40">
        <Link to="/about">
        <div className="relative group">
          <div className="
            absolute 
            -inset-0.5 
            bg-gradient-to-r 
            from-pink-600 
            to-blue-600 
            rounded-full 
            blur-3xl 
            opacity-75 
            group-hover:opacity-100 
            transition 
            duration-1000
            group-hover:duration-500
            animate-tilt
            "></div>
          <img
            src="https://i.imgur.com/0Qk4nhs.jpg"
            alt="Jeremiah"
            className="relative h-72 w-72 rounded-full"
          />
        </div>
        </Link>
        <h1 className="text-4xl font-bold mt-12">Full Stack Developer</h1>
        <p className="text-center mt-2 text-xl">
          Welcome to my page! My name is Jeremiah and I am a full stack
          developer located in Tacoma, WA.
        </p>
        <div id="techstack" className="flex flex-wrap items-center mt-4 -my-80">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png"
            className="h-10 w-10 sm:h-12 sm:w-12 mr-4 mb-4"
            alt="React Icon"
          />
          <img
            src="https://www.svgrepo.com/show/353657/django-icon.svg"
            className="h-10 w-10 sm:h-12 sm:w-12 mr-4 mb-4"
            alt="Django Icon"
          />
          <img
            src="https://www.kindpng.com/picc/m/188-1882559_python-flask-hd-png-download.png"
            className="h-10 w-10 sm:h-12 sm:w-12 mr-4 mb-4 rounded-full"
            alt="Flask Icon"
          />
          <img
            src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
            className="h-10 w-10 sm:h-12 sm:w-12 mr-4 mb-4"
            alt="Python Icon"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png"
            className="h-10 w-10 sm:h-12 sm:w-12 mr-4 mb-4"
            alt="JavaScript Icon"
          />
          <img
            src="https://cdn.cdnlogo.com/logos/c/18/css.svg"
            className="h-10 w-10 sm:h-12 sm:w-12 mr-4 mb-4"
            alt="CSS Icon"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
            className="h-10 w-10 sm:h-12 sm:w-12 mr-4 mb-4"
            alt="HTML Icon"
          />
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png"
            className="h-10 w-10 sm:h-12 sm:w-12 mr-4 mb-4"
            alt="Node.js Icon"
          />
          <img
            src="https://www.svgrepo.com/show/331488/mongodb.svg"
            className="h-10 w-18 sm:h-12 sm:w-12 mr-4 mb-4 rounded "
            alt="MongoDB Icon"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
            className="h-10 w-18 sm:h-12 sm:w-12 mr-4 mb-4 rounded "
            alt="PostgreSQL Icon"
          />
          <img
            src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png"
            className="h-10 w-12 sm:h-12 sm:w-12 mr-4 mb-4"
            alt="TailwindCSS Icon"
          />
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/bootstrap-4-logo-png-transparent.png"
            className="h-10 w-10 sm:h-12 sm:w-12 mr-4 mb-4"
            alt="Bootstrap Icon"
          />
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/sass-1-logo-png-transparent.png"
            className="h-10 w-10 sm:h-12 sm:w-12 mr-4 mb-4"
            alt="Sass Icon"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png"
            className="h-10 w-10 sm:h-12 sm:w-12 mr-4 mb-4"
            alt="Git Icon"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
