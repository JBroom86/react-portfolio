function AboutPage() {
  return (
    <>
    <h1 className="text-4xl pl-16">About Me</h1>
      <div className="flex justify-center items-top h-full">
        <div className="flex flex-col items-center mt-40">
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
          <div className="relative w-4/5 m-auto p-8 bg-black bg-opacity-50 rounded-3xl">
            
            <p className="text-lg">
              Jeremiah is a skilled bassoonist with over 22 years of experience
              in the field. He was born and raised in Tacoma, Washington, where
              he developed his passion for music at a young age. After
              graduating from high school, he decided to pursue his dream of
              becoming a professional musician and enrolled in the San Francisco
              Conservatory of Music.
              <br  />
              <br />
              During his time at the conservatory, Jeremiah studied under some
              of the most renowned bassoonists in the country and honed his
              skills on the instrument. He also had the opportunity to perform
              with a variety of ensembles and orchestras, both in San Francisco
              and beyond.
              <br />
              <br />
              After graduation, Jeremiah began his career as a professional
              bassoonist and quickly established himself as a sought-after
              performer. He has played with orchestras all over the world and
              has collaborated with many of the most respected musicians in the
              field.
              <br />
              <br />
              Despite his success as a musician, Jeremiah has recently decided
              to pursue a career change and is embarking on a journey into the
              world of coding. He is excited to learn new skills and explore new
              opportunities in this exciting field.
              <br />
              <br />
              When he's not playing the bassoon or learning to code, Jeremiah
              enjoys spending time with his two French bulldogs, Moo and Yakult.
              They love going on walks together and taking naps on the couch.
            </p>
          </div>
          </div>  
        </div>
      </div>
    </>
  );
}

export default AboutPage;
