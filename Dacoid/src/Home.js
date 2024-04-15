import React, { useEffect, useRef } from "react";
import "../src/App.css";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const Home = () => {
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Animation timeline
    const tl = gsap.timeline();

    // Initial positions
    gsap.set(imageRef.current, { opacity: 0, y: -50 });
    gsap.set(textRef.current, { opacity: 0, x: -50 });
    gsap.set(paragraphRef.current, { opacity: 0, y: 50 });

    // Animation sequence
    tl.to(imageRef.current, { opacity: 1, y: 0, duration: 1, delay: 0.5 })
      .to(textRef.current, { opacity: 1, x: 0, duration: 1 }, "-=0.5")
      .to(paragraphRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.5");

  }, []);

  return (
    <div className=" bg-white border-1 rounded-2xl shadow-lg shadow-gray-300 border-gray-400 max-w-[375px] min-h-[800px] border-1 pb-[84px] mx-auto  relative ">
      <div>
        <div>
          <span className="absolute top-[44px] left-[323px] ">
            <a href="/" className="text-[#9FB2FF] underline text-[21px] font-medium font-montserrat ">
              Skip
            </a>
          </span>
        </div>
        <div className="centerImage absolute top-[132px] left-[46px] ">
          <img
            ref={imageRef}
            src="image 13.svg"
            className="w-[282px] h-[282px]"
            alt="centerimage"
          />
        </div>
        <h1
          ref={textRef}
          className="text-[26px] font-semibold font-montserrat  absolute top-[499px] left-[16px] "
        >
          Track Your Goal
        </h1>
        <p
          ref={paragraphRef}
          className="text-[21px] font-medium font-montserrat text-gray-400 absolute top-[538px] left-[16px]"
        >
          Don't worry if you have trouble determining your goals ,We can help
          you determine your goals and track your goals
        </p>

        <div
          className="absolute top-[696px] left-[299px] "
          onClick={() => navigate("/start")}
        >
          <img src="Group 1.svg" alt="button"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
