import React from "react";
import HeroHome from "../Components/ComponentHome/HeroHome";
import CategoryShortcuts from "../Components/ComponentHome/CategoryShortcuts";
import SpecialOffers from "../Components/ComponentHome/SpecialOffers";
import StyleAccent from "../Components/Ui/StyleAccent";
import Footer from "../Components/Footer";
import HomeRectangle from "../Components/ComponentHome/HomeRectangle";
import LatestBlogs from "../Components/ComponentHome/LatestBlogs";
import AgentTestimonials from "../Components/ComponentHome/AgentTestimonials";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <HeroHome />

      <StyleAccent
        props="
          w-[110%] h-[1800px] md:h-[1550px] lg:h-[1680px] absolute left-1/2 
          -top-[150px] -translate-x-1/2 
          -translate-y-1/2 -z-10 
          bg-[linear-gradient(to_bottom,white_60%,rgb(67_97_238/0.5))]
        "
      />

      <SpecialOffers />
      <CategoryShortcuts />
      <HomeRectangle />
      <LatestBlogs />
      <AgentTestimonials />
      <Footer />
    </div>
  );
}
