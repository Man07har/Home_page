import React from 'react';
import AboutHero from '../components/AboutHero';
import Comp3About from '../components/comp3About';
import Aboutfs from '../components/Aboutfs';
import AllPageBG from '../assets/AllPageBG.png';
function About() {
  return (
    <>
      <div style={ {
        backgroundImage: `url(${AllPageBG})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "contain",

      } }>
        <AboutHero />
        <div className="kanitfont">
          <div className="HISTORY OF KNOT">
            <div className="bg-[#FEA24D] w-screen p-[10em]">
              <div className="border-8 border-[#FFC670] bg-[#FDE9D2] p-[8em] text-2xl font-medium rounded-lg flex justif-start text-center">
                Knothastags was born in 2023 out of a passion for helping our clients
                bring their dream surprise events to life ! Since our creation, we
                have committed ourselves to create impactful and creative experiences
                for our clients and their guests , no matter the size of the event .
                We always take into consideration the quality of the surprise event,
                and never fall below the bar our clients set.
              </div>
            </div>
          </div>
          <Comp3About />
          <Aboutfs />
        </div>

      </div>

    </>
  );
}

export default About;
