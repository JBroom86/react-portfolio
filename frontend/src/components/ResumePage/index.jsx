function ResumePage() {
  return (
    <>
    <h1 className="text-4xl pl-16">Resume & Experience</h1>
      <div className="flex justify-center items-top h-full">
        <div className="flex flex-col items-center mt-40">
          <div className="relative group">
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
                
                "
            ></div>
            {/* Can add -  animate-tilt  - to animate the gradient background but it causes the page to scroll down and its not ideal. */}
            <div className="relative w-4/5 m-auto p-8 bg-black bg-opacity-50 rounded-3xl">
            
            <h2 className="text-2xl underline"><strong>Technologies</strong></h2>
            <p><strong>Languages:</strong> Python, JavaScript, CSS, WordPress, and HTML</p>
            <p><strong>Software:</strong> MongoDB, Figma, Git, and Microsoft Office</p>
            <p><strong>Frameworks:</strong> Django, React, Express, TailwindCSS, Materialize, and Microsoft Office</p>
            <br />
            <hr></hr>
            <br />
            <h2 className="text-2xl underline"><strong>Relevant Experience</strong></h2>
            <h2 className="text-xl"><strong>Absolute Skincare by <em>Aireonna</em></strong> - <a href="https://absoluteskin.herokuapp.com/" className="hover:text-pink-600 transition duration-500"><em>https://absoluteskin.herokuapp.com/</em></a> - 2023</h2>
            <p>A full-stack services app built using MongoDB, Express, React, and Node.</p>
            
            <ul>
                <li>•	Designed for ease of use to present available services to potential clients.</li>
                <li>•	Created to be fully responsive regardless of the screen size being used.</li>
                <li>•	Created multiple points of interaction to review services, products, and about me sections. </li>
            </ul>
            <br />
            <h2 className="text-xl"><strong>Plan<em>It</em></strong> - <a href="https://sei-planit.herokuapp.com/" className="hover:text-pink-600 transition duration-500"><em>https://sei-planit.herokuapp.com/</em></a> - 2023</h2>
            <p>A full-stack polling app built using Django, Python, and Bootstrap.</p>
            
            <ul>
                <li>•	Designed with useability in mind. The application strives to create a clean and simple interface for users to plan events and receive input from attendees. </li>
                <li>•	Designed and executed the functionality with a team of developers to create the end result.  </li>
            </ul>
            <br />
            <h2 className="text-xl"><strong>Bassoon-O-Pedia</strong> - <a href="https://github.com/JBroom86/Bassoon-O-Pedia" className="hover:text-pink-600 transition duration-500"><em>https://github.com/JBroom86/Bassoon-O-Pedia</em></a> - 2023</h2>
            <p>A full-stack polling app built using MongDB, Express.js, Node.js, and CSS.</p>
            
            <ul>
                <li>•	Designed and implemented a fully responsive, user-friendly site to navigate bassoon data.  </li>
                <li>•	Included points of interaction where users can upload and update information on the site.  </li>
            </ul>
            <br />
            <hr></hr>
            <br />
            <h2 className="text-2xl underline"><strong>Professional Experience</strong></h2>
            <h2 className="text-lg"><strong>Accounting Assistant</strong> - Amara, Pet Food Express, and Old Republic Home Protection - - 2015 - 2023</h2>
            <ul>
                <li>•	Reviewed and prepared all invoices for accounts payables and receivables.</li>
                <li>•	Void and reissue checks that were lost or sent in error. </li>
                <li>•	Regularly updated documentation on Microsoft Word and Excel.</li>
                <li>•	Ran monthly reports to ensure all incoming invoices have appropriate approvals for payment.</li>
                <li>•	Balanced 60+ corporate credit cards weekly.</li>
                <li>•	Worked with staff accountant to insure GL coding was reported accurately.</li>
                <li>•	Coached and forward errors to appropriate supervisors to main consistent check issuing standards.</li>
                <li>•	Maintained consistent contact with suppliers, technicians, and management.</li>
                <li>•	Reviewed cash settlement requests.</li>
                <li>•	Applied plan coverage to ensure the cash settlements were properly processed. </li>
            </ul>
            <br />
            <h2 className="text-lg"><strong>Director of Operations</strong> - W Academy of Salon and Spa - - 2014</h2>
            <h2 className="text-lg"><strong>Business Director</strong> - CHANEL - - 2008 - 2014</h2>
            <br />
            <hr></hr>
            <br />
            <h2 className="text-2xl underline"><strong>Education</strong></h2>
            <h2 className="text-lg"><strong>General Assembly </strong> - <em>Software Engineering Immersive</em> - February 2023 - May 2023</h2>
            <h2 className="text-lg"><strong>San Francisco Conservatory of Music </strong> - <em>Bachelors of Music in Bassoon Performance</em> - September 2004 - May 2008</h2>
            <br />
            <hr></hr>
            <br />
            <h2 className="text-2xl underline"><strong>Certificates</strong></h2>
            <h2 className="text-lg"><strong>Learn CSS Course </strong> - <em>Codecademy</em> - February 2022</h2>
            <h2 className="text-lg"><strong>Learn HTML Course </strong> - <em>Codecademy</em> - February 2022</h2>
          </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default ResumePage;
