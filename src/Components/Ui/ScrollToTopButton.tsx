import { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 
        bg-Primary text-white p-3 rounded-full shadow-lg
        transition-all duration-300
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <KeyboardArrowUpIcon />
    </button>
  );
}
