import { ImgOofers, icons1 } from "../../assets/index";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { motion } from "framer-motion";

interface PropertyOffer {
  id: number;
  imageUrl: string;
  status: number;
  price: number;
  description: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
}

export default function SpecialOffers() {
  const [icon1, icon2] = icons1;

  const OffersItem: PropertyOffer[] = ImgOofers.map((img, index) => ({
    id: index + 1,
    imageUrl: img,
    status: 4000 + index * 1000,
    price: 3800 + index * 1000,
    description: `Grand Estate #${index + 1}`,
    location: "103 Wright CourtBurien, WA 98168",
    bedrooms: 3 + (index % 2),
    bathrooms: 2,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className=" mt-24 w-full"
    >
      <section className="px-[8%] w-full py-8 flex flex-col sm:flex-row justify-between ">
        <div className="xl:w-3/6 flex flex-col gap-3">
          <p className="text-body text-Color1 font-poppins w-40 sm:w-full">
            CHECKOUT OUR NEW
          </p>
          <h2 className="text-h3  sm:text-h2 font-poppins">
            Latest Listed Properties
          </h2>
          <p className="text-small w-full font-poppins">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus.
          </p>
        </div>
        <div className="xl:w-3/6   flex flex-row-reverse gap-4 justify-center items-center my-7 ">
          <button className="w-20 h-10 rounded-full border-2 text-base font-poppins text-Primary border-Primary font-medium">
            Rent
          </button>
          <button className="w-20 h-10 rounded-full border-2 text-base font-poppins text-white border-Primary bg-Primary font-medium">
            Sell
          </button>
          <button className="w-20 h-10 rounded-full border-2 text-base font-poppins text-Primary border-Primary font-medium">
            All
          </button>
        </div>
      </section>

      {/* Offers Section */}
      <section
        className="  hide-scrollbar
    sm:mx-[4%]
    mb-10
    w-full
    flex
    overflow-x-auto
    gap-6
    flex-nowrap
    scroll-smooth
    snap-x
    snap-mandatory
     px-[calc(50%-170px)]
    
     xsl:px-4
    "
      >
        {OffersItem.map((offer) => (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            key={offer.id}
            className="
    flex-shrink-0
    w-full
    sm:pl-0
    max-w-[340px]
    mx-auto
    snap-center
    px-2
  "
          >
            <div className="relative ">
              <div className="h-[220px] relative rounded-lg overflow-hidden">
                <img
                  loading="lazy"
                  className="w-full h-full bg-red-400"
                  src={offer.imageUrl}
                  alt={offer.description}
                />
                <div className="absolute inset-0 bg-black/40 via-black/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-3 left-2 flex items-end gap-1 bg-red-100 py-1 px-3 rounded-full">
                <div className="text-red-600">
                  <HomeFilledIcon />
                </div>
                <p className="text-sm sm:text-bode text-red-600 font-poppins font-semibold">
                  Discounted Price
                </p>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex gap-4 items-center">
                <h3 className="text-h4 sm:text-h3 text-text_color2 flex items-center gap-1">
                  <AttachMoneyIcon /> {offer.price}
                </h3>
                <s className="text-h4 sm:text-h3 text-text_color2 flex items-center gap-1">
                  <AttachMoneyIcon /> {offer.status}
                </s>
              </div>
              <h4 className="text-body sm:text-h4 text-text_color2 mt-1">
                {offer.description}
              </h4>
              <p className="text-base text-text_color3 font-poppins font-medium">
                {offer.location}
              </p>

              <div className="flex gap-6 mt-2">
                <div className="flex gap-2 items-center">
                  <img src={icon2} alt="bed icon" />
                  <p className="text-text_color2 font-poppins font-medium">
                    {offer.bedrooms} Beds
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <img
                    className="object-contain grayscale "
                    src={icon1}
                    alt="bath icon"
                  />
                  <p className="text-text_color2 font-poppins font-medium">
                    {offer.bathrooms} Bath
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </motion.div>
  );
}
