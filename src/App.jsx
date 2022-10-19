import { useEffect } from "react";
import ThreeCanvas from "./components/ThreeCanvas";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.from("#H1", {
      duration: 1,
      opacity: 0,
      y: -30,
    }).from(
      "#H2",
      {
        duration: 1,
        opacity: 0,
        y: -30,
      },
      "-=0.25"
    );

    gsap.from("#H3", {
      scrollTrigger: {
        trigger: "#About-me > #H3 ",
        start: `bottom ${window.innerHeight / 2}`,

        toggleActions: "play reverse play reset",
        markers: true,
      },
      duration: 1,
      opacity: 0,
      y: 30,
    });
    gsap.from("#About-me > p", {
      scrollTrigger: {
        trigger: "#About-me > p ",
        start: `bottom ${window.innerHeight / 2}`,

        toggleActions: "play reverse play reset",
        markers: true,
      },
      duration: 1,
      opacity: 0,
      y: 30,
    });
  }, []);

  return (
    <div id='app' className='text-lg md:text-xl lg:text-2xl text-white'>
      <ThreeCanvas></ThreeCanvas>
      <div className='h-screen bg-black'>
        <h1
          id='H1'
          className='text-3xl md:text-5xl lg:text-7xl text-center pt-12'>
          Welcome to my portfolio
        </h1>
        <h2
          className=' text-xl md:text-3xl lg:text-4xl text-center mt-10'
          id='H2'>
          Scroll down to know more about me
        </h2>
        <div id='About-me' className='my-24 flex flex-col'>
          <h3
            id='H3'
            className='mt-16 text-center text-3xl md:text-5xl lg:text-7xl'>
            About me
          </h3>
          <p className='text-base md:text-lg xl:text-xl w-11/12 mt-12 sm:w-8/12 lg:1/4  mx-auto'>
            I'm Bentaleb Sami, a 20 year old algerian computer science student
            at the university of Badji Moukhtar Annaba. I am also mostly a self
            taught web developer with 2 years of experience programming and
            building some learning projects
          </p>
        </div>
      </div>
      <div className='h-screen bg-black '></div>
      <div id='wireframe' className='h-screen bg-black'></div>
      <div className='h-screen bg-black'></div>
      <div className='h-screen bg-black'></div>
    </div>
  );
}

export default App;
