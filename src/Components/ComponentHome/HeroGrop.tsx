
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Ellipses, img, images } from "../../assets/index";
import StelyAccent from "../Ui/StyleAccent";
import { motion } from "framer-motion";
export default function HeroGrop() {
  return (
    <div className="flex flex-col-reverse md:flex-col gap-10 my-7">
      <motion.section
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.7 }}
        className="sm:w-[700px] mx-auto"
      >
        <scetion className="w-full flex flex-col sm:flex-row gap-5  mx-auto ">
          <section className="sm:w-[360px] sm:h-[90px] py-2 px-3 bg-white drop-shadow-2xl rounded-full flex mx-auto">
            <div className="flex items-center justify-center w-4/6 mx-auto">
              <AvatarGroup
                total={4251}
                renderSurplus={(surplus) => (
                  <span style={{ fontSize: "10px", fontWeight: "400" }}>
                    +{surplus}
                  </span>
                )}
                sx={{
                  "& .MuiAvatar-root": {
                    width: 28,
                    height: 28,
                  },
                }}
              >
                {Ellipses.map((img:string, i:number) => (
                  <Avatar key={i} alt={`avatar-${i}`} src={img} />
                ))}
              </AvatarGroup>
            </div>

            <div className="w-28 flex items-center justify-center">
              <p className="w-full"> 72k+ Happy Customers</p>
            </div>
          </section>

          <section className="sm:w-[360px] sm:h-[90px] px-5 py-2 bg-white drop-shadow-2xl rounded-full flex justify-center items-center gap-3 mx-auto">
            <Avatar
              sx={{
                width: 45,
                height: 45,
              }}
              alt="Trevor Henderson"
              src={img}
            />
            <p className="w-32">
              200+ New
              <br /> Listings Everyday!
            </p>
          </section>
        </scetion>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <p className="font-poppins font-medium text-text_color3 text-base text-center px-10 pt-16 pb-5">
          Trusted by 100+ Companies across the globe!
        </p>

        <div className="w-full p-5 flex items-center md:justify-center gap-10 overflow-x-auto flex-nowrap scroll-smooth">
          {images.map((mar:string,i:number) => {
            return (
              <div
                key={i}
                className="min-w-[80px] h h-12  flex justify-center items-center"
              >
                <img
                  src={mar}
                  alt={`brand-${i}`}
                  className="
                        w-full h-full object-contain
                        grayscale     
                        hover:grayscale-0
                        transition
                      "
                />
              </div>
            );
          })}
        </div>
        <StelyAccent props="hidden sm:flex  w-20 h-20 bg-gradient-to-br from-Color1/70 absolute left-[10%] md:left-[17%] xl:left-[27%] top-0" />
      </motion.section>
    </div>
  );
}
