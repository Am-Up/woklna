import React from "react";
import { Heroimgs } from "../../assets";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { motion } from "framer-motion";

export default function LatestBlogs() {
  const [HeroImg1, HeroImg2, HeroImg3] = Heroimgs;

  const items = [
    {
      id: 1,
      img: HeroImg1,
      title: "Top 10 Home Buying Mistakes to Avoid",
      text: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
    },
    {
      id: 2,
      img: HeroImg2,
      title: "Top 10 Home Buying Mistakes to Avoid",
      text: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
    },
    {
      id: 3,
      img: HeroImg3,
      title: "Top 10 Home Buying Mistakes to Avoid",
      text: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
    },
  ];

  return (
    <div className="w-full bg-Primary px-4 sm:px-8 lg:px-[10%] py-16">
      {/* Title */}
      <motion.section
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full text-center mb-12"
      >
        <p className="text-sm sm:text-body text-white font-poppins">
          WHAT’S TRENDING
        </p>
        <h2 className="text-2xl sm:text-h2 text-white font-poppins">
          Latest Blogs & Posts
        </h2>
      </motion.section>

      {/* Blogs Grid */}
      <section
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6
        "
      >
        {items.map((item) => (
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            key={item.id}
            className="
              bg-transparent
              text-white
              rounded-3xl
              overflow-hidden
              group
            "
          >
            {/* Image */}
            <div className="relative">
              <img
                className="w-full h-[220px] sm:h-[240px] object-cover"
                src={item.img}
                alt={item.title}
                loading="lazy"
              />

              {/* Date */}
              <div className="w-12 h-14 bg-white absolute top-0 left-4 rounded-b-xl text-center">
                <h4 className="text-black font-semibold">28</h4>
                <p className="text-xs text-text_color3">Mon</p>
              </div>
            </div>

            {/* Content */}
            <div className="pt-4 flex flex-col gap-3">
              <h3 className="text-lg sm:text-h3 font-semibold font-poppins leading-snug">
                {item.title}
              </h3>

              <p className="text-sm sm:text-body font-poppins opacity-90">
                {item.text}
              </p>

              {/* Action */}
              <button className="self-end mt-2 opacity-80 hover:opacity-100 transition hidden sm:block">
                <ArrowCircleRightIcon fontSize="large" />
              </button>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  );
}
