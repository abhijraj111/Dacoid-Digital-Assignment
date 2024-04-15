import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const Start = () => {
  const navigate = useNavigate();
  const centerImageRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Animation timeline
    const tl = gsap.timeline();

    // Initial positions
    gsap.set(centerImageRef.current, { opacity: 0, y: -50 });
    gsap.set(titleRef.current, { opacity: 0, x: -50 });
    gsap.set(paragraphRef.current, { opacity: 0, y: 50 });

    // Animation sequence
    tl.to(centerImageRef.current, { opacity: 1, y: 0, duration: 1, delay: 0.5 })
      .to(titleRef.current, { opacity: 1, x: 0, duration: 1 }, "-=0.5")
      .to(paragraphRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.5");

  }, []);

  return (
    <div className=" bg-white border-1 rounded-2xl shadow-lg shadow-gray-300 border-gray-400 max-w-[375px] min-h-[800px] border-1 pb-[84px] mx-auto  relative ">
      <div>
        <div>
          <span className="absolute top-[44px] left-[323px]  ">
            <a href="/" className="text-[#9FB2FF] underline text-[21px] font-medium font-montserrat ">
              Skip
            </a>
          </span>
        </div>
        <div className="centerImage absolute top-[156px] left-[11px] " ref={centerImageRef}>
          <img src="image 16.svg" alt="centerimage" />
        </div>
        <h1 className="text-[26px] font-semibold font-montserrat  absolute top-[499px] left-[16px] " ref={titleRef}>
          Get Burn
        </h1>
        <p className="text-[21px] font-medium font-montserrat text-gray-400 absolute top-[538px] left-[16px]" ref={paragraphRef}>
          Let’s keep burning to achieve your goals, it hurts only temporarily,
          if you give up now you will be in pain forever
        </p>

        <div
          className="absolute top-[696px] left-[299px] "
          onClick={() => navigate("/signin")}
        >
          <img src="Group 1.svg" alt="button"></img>
        </div>
      </div>
    </div>
  );
};

export default Start;
