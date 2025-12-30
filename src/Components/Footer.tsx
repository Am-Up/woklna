
import RealEstateAgentSharpIcon from "@mui/icons-material/RealEstateAgentSharp";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { medya } from "../assets/index";

export default function Footer() {
  const [facebook, instagram, linkdin] = medya;

  return (
    <div className="w-full ">
      <section className="w-full bg-text_color5 sm:gap-[6%] py-5 sm:flex sm:px-[4%] md:px-[8%] lg:px-[10%] ">
        <div className="flex flex-col gap-2 w-full sm:w-[20%]">
          <section className="flex items-center gap-2 justify-center sm:justify-start mb-4">
            <div className=" bg-Primary flex items-center   text-white rounded-full">
              <RealEstateAgentSharpIcon fontSize="large" className="m-2" />
            </div>
            <h3 className="font-bold sm:text-h4 font-poppinstext-xl">Waklna</h3>
          </section>
          <h5 className="text-text_color3 sm:text-text_color2 text-base mx-auto sm:mx-0 font-medium text-center sm:text-left w-4/6">
            2728 Hickory StreetSalt Lake City, UT 84104
          </h5>
          <div className="flex items-center gap-1 justify-center sm:justify-start">
            <PhoneEnabledOutlinedIcon
              className="text-text_color3 sm:text-text_color2"
              fontSize="small"
            />
            <span className="font-poppins text-sm font-medium line-clamp-1 text-text_color3 sm:text-text_color2">
              +1206-214-2298
            </span>
          </div>
          <div className="flex items-center sm:justify-start gap-1 justify-center py-4">
            <EmailOutlinedIcon
              className="text-text_color3 sm:text-text_color2"
              fontSize="small"
            />
            <span className="font-poppins font-medium text-sm text-text_color3 line-clamp-1 sm:text-text_color2">
              support@rezilla.com
            </span>
          </div>
        </div>
        <div className="hidden sm:block sm:w-[20%] ">
          <h4 className="text-h4 mb-4">Quick Links</h4>
          <nav className="py-3">
            <ul className="">
              <li>
                <a
                  className="text-text_color2 text-base font-poppins font-medium"
                  href="*"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-text_color2 text-base font-poppins font-medium"
                  href="*"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  className="text-text_color2 text-base font-poppins font-medium"
                  href="*"
                >
                  Listings
                </a>
              </li>
              <li>
                <a
                  className="text-text_color2 text-base font-poppins font-medium"
                  href="*"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-text_color2 text-base font-poppins font-medium"
                  href="*"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden sm:block w-full sm:w-[20%] text-left">
          <h4 className="text-h4 mb-4">Discovery</h4>
          <div className="py-3 px-2 sm:px-0">
            <h5 className="text-bode ">Canada</h5>
            <h5 className="text-bode ">United States</h5>
            <h5 className="text-bode ">Germany</h5>
            <h5 className="text-bode ">Africa</h5>
            <h5 className="text-bode ">India</h5>
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-[34%] gap-3 text-center sm:text-left">
          <h4 className="text-body text-text_color1 sm:text-h4 w-3/6 sm:5/6 mb-4 mx-auto sm:mx-0">
            Subscribe to our Newsletter!
          </h4>
          <div className="w-10/12 mx-auto sm:mx-0 h-12 rounded-3xl bg-white relative">
            <input
              className="w-full h-full outline-Primary rounded-3xl px-4 pr-[45px] font-poppins text-Primary font-bold text-base"
              type="email"
              placeholder="Email Address"
            />
            <button className="absolute bg-Primary p-1 rounded-full text-white right-2 top-2">
              <ArrowForwardIcon />
            </button>
          </div>
          <div>
            <div className="w-full flex justify-center sm:justify-start ">
              <h4 className="text-h5 text-text_color1 w-20 sm:w-28">
                Follow Us on
              </h4>
            </div>
            <div className="flex w-full justify-center sm:justify-start gap-3 sm:pt-4">
              <img src={linkdin} alt="linkdin" />
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-10 bg-black flex justify-center items-center gap-[10%] md:px-[10%]">
        <p className="text-[clamp(10px,5vw,16px)] text-center font-poppins w-full font-medium text-text_color4">
          © Rezilla – All rights reserved
        </p>

        <div className="hidden md:flex h-full justify-center w-full items-center ">
          <p className="text-sm text-text_color4 font-poppins w-full">
            Terms and Conditions
          </p>
          <p className="text-sm text-text_color4 font-poppins w-full">
            Privacy Policy
          </p>
          <p className="text-sm text-text_color4 font-poppins w-full">
            Disclaimer
          </p>
        </div>
      </section>
    </div>
  );
}
