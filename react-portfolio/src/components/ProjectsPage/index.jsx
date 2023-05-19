import { Link } from "react-router-dom";

function ProjectsPage() {
  return (
    <>
      <div className="flex justify-center items-top h-full">
        <div className="flex flex-col items-center mt-40">
          <div className="relative group grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            <div
              className="
            absolute 
            -inset-0.5 
            bg-gradient-to-r 
            from-pink-600 
            to-blue-600 
            rounded-3xl 
            blur-3xl 
            opacity-75 
            group-hover:opacity-100 
            transition 
            duration-1000
            group-hover:duration-500
            animate-tilt
            "
            ></div>
            <Link to="https://absoluteskin.herokuapp.com/" target="_blank">
              <div className="relative bg-black rounded-lg shadow-md p-4 bg-opacity-50">
                <h2 className="text-lg font-medium mb-2">
                  <strong>Absolute Skin by Aireonna</strong>
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://i.imgur.com/lALED9b.png"
                    className="w-full max-w-xs mb-4"
                  />
                  <img
                    src="https://i.imgur.com/fN8yEgq.png"
                    className="w-full max-w-xs mb-4"
                  />
                </div>

                <p>
                  A full stack React application built for a budding skincare
                  business to display services and products available.
                  <br />
                  <br />
                  <strong>Technologies Used:</strong> React, Node, Express,
                  MongoDB, and TailwindCSS.
                </p>
              </div>
            </Link>

            <Link to="https://sei-planit.herokuapp.com/" target="_blank">
              <div className="relative bg-black rounded-lg shadow-md p-4 bg-opacity-50">
                <h2 className="text-lg font-medium mb-2"><strong>PlanIt</strong></h2>

                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://i.imgur.com/A4n6zld.jpg"
                    className="w-full max-w-xs mb-4"
                  />
                  <img
                    src="https://i.imgur.com/lZE6uLK.jpg"
                    className="w-full max-w-xs mb-4"
                  />
                </div>

                <p>
                  A full stack event planning application built to take the
                  stress out of planning events! business to display services
                  and products available.
                  <br />
                  <br />
                  <strong>Technologies Used:</strong> Django, Python,
                  PostgreSQL, and Materialize CSS.
                  <br />
                  <br />
                  <em>
                    This project was developed in conjunction with{" "}
                    <a
                      href="https://github.com/mindyschwab"
                      target="_blank"
                      className="hover:text-pink-500"
                    >
                      Mindy Schwabenbauer
                    </a>
                    ,{" "}
                    <a
                      href="https://github.com/jonah-angelo"
                      target="_blank"
                      className="hover:text-pink-500"
                    >
                      Jonah Angelo
                    </a>
                    , and{" "}
                    <a
                      href="https://github.com/kkoorrbbiinn"
                      target="_blank"
                      className="hover:text-pink-500"
                    >
                      Korbin Westerfield.
                    </a>
                  </em>
                </p>
              </div>
            </Link>
            <Link to="https://github.com/JBroom86/Bassoon-O-Pedia" target="_blank">
              <div className="relative bg-black rounded-lg shadow-md p-4 bg-opacity-50">
                <h2 className="text-lg font-medium mb-2"><strong>Bassoon-O-Pedia</strong></h2>

                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://i.imgur.com/s4INl5b.jpg"
                    className="w-full max-w-xs mb-4"
                  />
                  
                </div>

                <p>
                  A MEN-stack CRUD application developed to bring bassoonists together.
                  <br />
                  <br />
                  <strong>Technologies Used:</strong> Express, Node, MongoDB, CSS, and EJS.
                  <br />
                  <br />
                  
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
