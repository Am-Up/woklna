import React from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { motion } from "framer-motion";

export default function Topbar() {
  return (
    <div className="hidden sm:flex w-full bg-Primary  justify-between text-white px-[8%] py-1.5 z-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3.7 }}
        layoutId="underline"
        className="flex items-center gap-1"
      >
        <PlaceOutlinedIcon fontSize="small" />
        <span className="font-poppins text-sm font-extralight line-clamp-1">
          Rezilla, 18 Grattan St, Brooklyn
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex gap-3"
      >
        <div className="flex items-center gap-1">
          <PhoneEnabledOutlinedIcon fontSize="small" />
          <span className="font-poppins text-sm font-extralight line-clamp-1">
            +1206-214-2298
          </span>
        </div>
        <div className="flex items-center gap-1">
          <EmailOutlinedIcon fontSize="small" />
          <span className="font-poppins text-sm font-extralight line-clamp-1">
            support@rezilla.com
          </span>
        </div>
      </motion.div>
    </div>
  );
}
