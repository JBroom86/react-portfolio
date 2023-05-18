import React from "react";

function HomePage() {
  return (
    <div className="flex justify-center items-start h-full">
      <div className="flex flex-col items-center mt-40">
        <img
          src="https://i.imgur.com/0Qk4nhs.jpg"
          alt="Jeremiah"
          className="h-72 w-72 rounded-full"
        />
        <h1 className="text-4xl font-bold mt-4">Full Stack Developer</h1>
        <p className="text-center mt-2">
          Welcome to my page! My name is Jeremiah and I am a full stack developer located in Tacoma, WA.
        </p>
        <div id="techstack" className="flex items-center mt-4 -my-80">
          <h2 className="text-2xl font-bold mb-2">Tech Stack:  </h2>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png"
            className="h-10 w-10 mr-4"
          />
          <img
            src="https://www.svgrepo.com/show/353657/django-icon.svg"
            className="h-10 w-10 mr-4"
          />
          <img
            src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
            className="h-10 w-10 mr-4"
          />
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png"
            className="h-10 w-10 mr-4"
          />
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png"
            className="h-10 w-10 mr-4"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
            className="h-10 w-18 mr-4"
          />
          <img
            src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png"
            className="h-10 w-10 mr-4"
          />
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/bootstrap-4-logo-png-transparent.png"
            className="h-10 w-10 mr-4"
          />
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/sass-1-logo-png-transparent.png"
            className="h-10 w-10 mr-4"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
