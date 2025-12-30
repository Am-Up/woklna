import { Dispatch, SetStateAction, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RealEstateAgentSharpIcon from "@mui/icons-material/RealEstateAgentSharp";

type LoadingLogoProps = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export default function Lodaing_Logo({
  loading,
  setLoading,
}: LoadingLogoProps) {
  // Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [setLoading]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <div className="relative flex items-center justify-center">
            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.6,
                ease: "linear",
                repeat: Infinity,
              }}
              className="absolute w-64 h-64 rounded-full 
                         border-[10px] border-Primary/20 border-t-Primary"
            />

            {/* Logo Pulse */}
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-24 h-24 bg-Primary rounded-full 
                         flex items-center justify-center 
                         text-white shadow-2xl"
            >
              <RealEstateAgentSharpIcon fontSize="large" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
