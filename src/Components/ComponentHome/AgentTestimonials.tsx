import { Ellipses } from "../../assets/index";
import Rating from "@mui/material/Rating";
import StelyAccent from "../Ui/StyleAccent";
import EastIcon from "@mui/icons-material/East";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { register } from "../../assets/index";
import { motion } from "framer-motion";
export default function AgentTestimonials() {
  const img = Ellipses[3];
  return (
    <div className=" px-4 md:px-[10%] py-10 ">
      <section className="md:flex justify-between gap-10 items-center py-20 relative ">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-[330px] flex flex-col gap-3 "
        >
          <p className="text-body font-poppins text-Color1">TESTIMONIALS</p>
          <h2 className="text-h3 lg:text-h2 font-poppins text-text_color2">
            Look What Our Customers Say!
          </h2>
          <p className="text-sm lg:text-body text-text_color2 font-poppins ">
            Fusce venenatis tellus a felis scelerisque, non pulvinar est
            pellentesque.{" "}
          </p>

          <div className="hidden md:flex mt-2">
            <button className="text-Color1 border-2 border-Color1 rounded-full p-1 mr-8">
              <KeyboardBackspaceIcon fontSize="large" />
            </button>
            <button className="text-Color1 border-2 border-Color1 rounded-full p-1">
              <EastIcon fontSize="large" />
            </button>
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className=" md:flex z-20"
        >
          <div className="w-full mx-auto max-w-[500px] rounded-3xl shadow-2xl p-6 lg:p-10 pt-10 mt-5 flex flex-col gap-10 bg-white">
            <div className=" border-b-2">
              <div className="flex gap-6 pl-3 pb-3">
                <div className="w-10 h-20 bg-yellow-200 skew-x-[-20deg]"></div>
                <div className="w-10 h-20 bg-yellow-200 skew-x-[-20deg]"></div>
              </div>

              <h4 className="text-h5 lg:text-h4 text-text_color2 font-poppins">
                I highly recommend Jodi J. Appleby. She was attentive to our
                needs and worked tirelessly to find us the perfect home. We
                couldn't be happier with our new place!
              </h4>
            </div>
            <div className="flex items-center  gap-1">
              <img className="size-12" src={img} alt="img" />
              <h4 className="text-sm lg:text-h4 font-poppins">Amir mohammd</h4>
              <Rating
                value={4.5}
                precision={0.5}
                readOnly
                sx={{ fontSize: 18 }}
              />
            </div>
          </div>

          <div className=" w-auto h-auto flex md:flex-col gap-12 md:gap-4 md:pl-4 items-center justify-center">
            <div className="w-[4px] rounded-xl h-10 bg-text_color3 rotate-[90deg] md:rotate-0"></div>
            <div className="w-[4px] rounded-xl h-10 bg-text_color3/50 rotate-[90deg] md:rotate-0"></div>
            <div className="w-[4px] rounded-xl h-10 bg-text_color3/50 rotate-[90deg] md:rotate-0"></div>
          </div>
        </motion.div>
        <StelyAccent props=" w-10 h-10 md:w-20  md:h-20 bg-gradient-to-br from-Color1/70 absolute top-16 right-12 sm:right-[370px] lg:right-[470px] -z-10" />
      </section>

      <section>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full sm:h-[260px] max-w-[1200px] rounded-[20px] bg-Primary 
                  sm:flex sm:flex-row-reverse justify-center items-end"
        >
          {/* ===== Accent Wrapper (هو اللي يقص) ===== */}
          <div className="absolute w-full h-full rounded-[20px]  overflow-hidden pointer-events-none">
            <StelyAccent props="absolute w-56 h-56 -top-20 -right-10 bg-gradient-to-br from-Color1/80 rotate-[180]" />
          </div>

          {/* Accent صغير */}
          <StelyAccent props="absolute z-0 w-12 h-12 bg-gradient-to-br from-Color1/70 top-[75%] left-[50px]" />

          {/* ===== Content ===== */}
          <div className="relative z-20 flex flex-col lg:flex-row h-full items-center p-8 text-center gap-8">
            <div className="max-w-[450px] w-full text-center">
              <h2 className="text-h3 min-w-32 max-w-4/6 md:text-h2 text-white font-poppins">
                Become a Agent.
              </h2>
              <p className="text-sm md:text-body text-white font-poppins">
                Fusce venenatis tellus a felis scelerisque. venenatis tellus a
                felis scelerisque.
              </p>
            </div>

            <button className="w-5/6 sm:w-3/6 h-12 rounded-3xl text-Primary font-bold bg-white">
              Register Now
            </button>
          </div>

          {/* ===== Image ===== */}
          <img
            className="z-10 w-full sm:w-[360px] sm:h-[350px]"
            src={register}
            alt="img"
          />
        </motion.div>
      </section>
    </div>
  );
}
