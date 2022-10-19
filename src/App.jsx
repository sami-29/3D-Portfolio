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

    const t2 = gsap.timeline();
    t2.from("#H3", {
      scrollTrigger: {
        trigger: "#About-me ",
        start: "bottom center",
        toggleActions: "play pause none none",
      },
      duration: 1,
      opacity: 0,
      y: -100,
    });
  }, []);

  return (
    <div id='app'>
      <ThreeCanvas></ThreeCanvas>
      <div className='h-screen bg-black'>
        <h1 id='H1' className='text-white text-7xl text-center pt-12'>
          Welcome to my portfolio
        </h1>
        <h2 className='text-white text-4xl text-center mt-10' id='H2'>
          Scroll down to know more about me
        </h2>
        <div id='About-me' className=''>
          <h3 id='H3' className=''>
            About me
          </h3>
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
