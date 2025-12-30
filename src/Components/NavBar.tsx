import { useState } from "react";
import RealEstateAgentSharpIcon from "@mui/icons-material/RealEstateAgentSharp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Lodaing_Logo from "./Lodaing_Logo";
import { motion } from "framer-motion";
import Topbar from "./Topbar";

export default function NavBar() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="z-20">
      <Topbar />

      <header className="w-full py-3 px-[7%]">
        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-3 items-center">
          <nav>
            <ul className="flex gap-4">
              {["Home", "Properties", "Listings", "Services", "Blogs"].map(
                (item) => (
                  <li key={item}>
                    <a className="text-text_color2 text-base font-poppins font-medium">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 1.2 }}
              animate={{ scale: loading ? 1.2 : 0.8 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="flex items-center gap-2"
            >
              <div className="bg-Primary flex items-center justify-center text-white rounded-full">
                <RealEstateAgentSharpIcon fontSize="large" className="m-2" />
              </div>
              <h3 className="font-semibold font-poppins text-2xl">Waklna</h3>
            </motion.div>
          </div>

          <section className="flex gap-4 justify-end items-center">
            <div className="flex gap-2">
              <AccountCircleOutlinedIcon />
              <p className="text-text_color2 text-base font-poppins">
                login / register
              </p>
            </div>

            <button className="flex bg-Primary text-white px-3 py-2 rounded-3xl gap-2 items-center">
              <RealEstateAgentSharpIcon fontSize="small" />
              Add Listing
            </button>
          </section>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden justify-between items-center">
          <motion.div
            animate={{
              y: loading ? 700 : 0,
              scale: loading ? 1.2 : 0.8,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="relative z-50 flex items-center gap-2"
          >
            <div className="bg-Primary flex items-center justify-center text-white rounded-full">
              <RealEstateAgentSharpIcon fontSize="large" className="m-2" />
            </div>
            <h3 className="font-semibold font-poppins text-2xl">Waklna</h3>
          </motion.div>

          <MenuIcon fontSize="large" />
        </div>

        <Lodaing_Logo loading={loading} setLoading={setLoading} />
      </header>
    </div>
  );
}
