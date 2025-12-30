
import { icons2 } from "../../assets/index";
import { motion } from "framer-motion";
export default function CategoryShortcuts() {
  const [ icon3,icon4,icon5] = icons2;
  return (
    <div className="w-full bg-text_color5 py-20 mb-10">
      <div className="lg:w-10/12 mx-auto  ">
        <div className="w-full mb-4">
          <p className="text-base mx-auto w-20 md:w-full font-poppins font-medium text-center text-text_color2 ">
            OUR SERVICES
          </p>
          <h3 className="text-h3 mx-auto text-center font-poppins text-text_color1 w-72 md:w-full">
            Donec porttitor euismod dignissim
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 px-4 pt-4">
          <motion.a
            initial={{ opacity: 0, x: -140 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            href="#"
          >
            <div className="w-full px-6 py-10 bg-white rounded-3xl ">
              <div className="w-[90px] h-[90px]  bg-Color1 rounded-full mx-auto flex justify-center mb-5 items-center text-white">
                <img src={icon5} alt="img" />
              </div>
              <h5 className="text-text_color2 font-poppins text-center">
                Buy a New Home
              </h5>
              <p className="font-poppins text-body text-text_color3 text-center">
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus.{" "}
              </p>
            </div>
          </motion.a>
          <motion.a
            initial={{ y: 140 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            href="#"
          >
            <div className="w-full px-6 py-10 bg-white rounded-3xl ">
              <div className="w-[90px] h-[90px] bg-Color1 rounded-full mx-auto flex justify-center items-center mb-5 text-[50px] text-white">
                <img className="w-10" src={icon4} alt="img" />
              </div>
              <h5 className="text-text_color2 font-poppins text-center">
                Buy a New Home
              </h5>
              <p className="font-poppins text-body text-text_color3 text-center">
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus.{" "}
              </p>
            </div>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, x: 140 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            href="#"
          >
            <div className="w-full px-6 py-10 bg-white rounded-3xl ">
              <div className="w-[90px] h-[90px] bg-Color1 rounded-full mx-auto flex justify-center items-center mb-5 text-white">
                <img className="w-10 " src={icon3} alt="img" />
              </div>
              <h5 className="text-text_color2 font-poppins text-center">
                Buy a New Home
              </h5>
              <p className="font-poppins text-body text-text_color3 text-center">
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
                dignissim purus.{" "}
              </p>
            </div>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
