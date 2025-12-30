import { useState } from "react";
import HeroGrop from "./HeroGrop.js";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StyleAccent from "../Ui/StyleAccent.js";
import { Heroimgs } from "../../assets/index.js";
import FormSearch from "./FormSearch";
import { motion } from "framer-motion";

export default function HeroHome() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imgs = Heroimgs;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
  };

  const nxtSlide = () => {
    setCurrentIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 mt-10 px-4 sm:px-[6%]">
        {/* ================= LEFT (Text + Slider) ================= */}
        <motion.section
          initial={{ opacity: 0, x: -160 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full h-full flex flex-col justify-center md:ml-10"
        >
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <span className="text-Color1 font-medium text-sm md:text-lg font-poppins">
              REAL ESTATE
            </span>

            <h1 className="text-text_color1 font-poppins font-semibold text-3xl md:text-4xl sm:w-10/12">
              Find a perfect home you love..!
            </h1>

            <p className="text-text_color3 font-poppins text-[13px] md:text-sm w-full sm:w-10/12 py-4">
              Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
              Integer a dolor eu sapien sodales vulputate ac in purus.
            </p>
          </motion.div>

          {/* SLIDER */}
          <div className="w-full flex justify-center md:justify-start mt-10">
            <div className="w-full flex items-center relative max-w-[580px] max-h-[351px] ">
              {/* LEFT BTN */}
              <button
                onClick={nxtSlide}
                className="bg-white hover:bg-Color1/30 text-text_color4 rounded-full absolute left-10 sm:-left-3 shadow-xl z-30 p-0 sm:p-1"
              >
                <ChevronLeftIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </button>

              {/* IMAGE */}
              <div className="w-full h-full relative">
                <div className="rounded-3xl shadow-2xl overflow-hidden relative">
                  <img
                    className="shadow-2xl w-full h-[190px] sm:h-96  max-w-[580px] max-h-[351px] relative z-20"
                    src={imgs[currentIndex]}
                    alt={`slide-${currentIndex}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t bg-black/30 via-black/10 to-transparent z-30"></div>
                </div>

                {/* OVERLAY SHAPE */}
                <StyleAccent props="sm:w-16 sm:h-16 w-11 h-11 absolute -top-9 right-10 md:-right-5 z-10 bg-gradient-to-bl from-Color1/70" />
              </div>

              {/* RIGHT BTN */}
              <button
                onClick={prevSlide}
                className="bg-white/80 hover:bg-Color1/30 text-text_color4 rounded-full absolute right-10 sm:-right-3 shadow-xl z-30 p-0 sm:p-1"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </motion.section>

        {/* ================= RIGHT (Form) ================= */}
        <section className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: 160 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className=" max-w-[420px] w-full bg-white rounded-3xl shadow-2xl "
          >
            <FormSearch />
          </motion.div>
        </section>
      </div>
      <HeroGrop />
    </div>
  );
}
