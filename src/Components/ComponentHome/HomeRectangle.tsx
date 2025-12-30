
import { Properties } from "../../assets/index";
import StyleAccent from "../Ui/StyleAccent";
import { motion } from "framer-motion";
export default function HomeRectangle() {
  const [img1, img2, img3, img4, img5] = Properties;
  const model = null;
  return (
    <div className="py-2 pb-32 sm:px-[10%] flex flex-col  gap-4 relative">
      <section className="px-4">
        <p className="text-body text-Color1 font-poppins py-4 w-full">
          AREAS ACROSS THE TOWN
        </p>
        <h3 className="text-h3  sm:text-h2 font-poppins">
          Neighborhood Properties
        </h3>
      </section>

      <section className=" w-full justify-center flex bg-red-500/300">
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 px-4 sm:gap-10 ">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7 }}
            className="relative sm:col-span-2 h-[160px] md:h-[320px] rounded-2xl overflow-hidden"
          >
            <img
              src={img1}
              alt="New York"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-2 left-2 z-10 text-white">
              <h3 className="text-xl sm:text-2xl font-semibold text-white/80">
                216
              </h3>
              <p className="text-sm sm:text-xl">New York City, NY</p>
            </div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.7 }}
            className="relative h-[160px] md:h-[320px] rounded-2xl overflow-hidden"
          >
            <img
              src={img3}
              alt="Miami"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-2 left-4 z-10 text-white">
              <h3 className="text-xl sm:text-3xl font-semibold text-white/80">
                94
              </h3>
              <p className="text-sm sm:text-xl">Miami, FL</p>
            </div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.7 }}
            className="relative h-[160px] md:h-[320px] rounded-2xl overflow-hidden"
          >
            <img
              src={img4}
              alt="Los Angeles"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-2 left-2 z-10 text-white">
              <h3 className="text-xl sm:text-3xl font-semibold text-white/80">
                75
              </h3>
              <p className="text-sm sm:text-xl">Los Angeles, CA</p>
            </div>
          </motion.div>

          {/* Image 4 (WIDE) */}
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.7 }}
            className="relative sm:col-span-2 h-[160px] md:h-[320px] rounded-2xl overflow-hidden"
          >
            <img
              src={img5}
              alt="San Francisco"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-2 left-2 z-10 text-white">
              <h3 className="text-xl sm:text-2xl font-semibold text-white/80">
                112
              </h3>
              <p className="text-sm sm:text-xl">San Francisco, CA</p>
            </div>
          </motion.div>
        </div>

        <StyleAccent props="bg-gradient-to-bl from-Color1/60 w-16 h-16 absolute bottom-40 left-20 -z-20" />
        <StyleAccent props="bg-gradient-to-bl from-Color1/60 w-12 h-12 sm:w-28 sm:h-28 absolute bottom-16 sm:right-64 right-60 -z-20" />
      </section>
    </div>
  );
}
