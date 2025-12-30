import { useState } from "react";
import { motion } from "framer-motion";

export default function FormSearch() {
  const [tabs, setTabs] = useState("rent");

  return (
    <motion.div
      className="search-form-container bg-white rounded-[40px] shadow-form-lg p-4 sm:p-8 overflow-hidden"
      dir="rtl"
    >
      <form
        className="search-form-v2 flex flex-col gap-4 md:gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Sale / Rent Tabs */}
        <div className="tabs-control flex flex-col justify-center border-b-2 border-gray-200  ">
          <div className="w-full flex justify-center gap-12  ">
            <button
              onClick={() => setTabs("sale")}
              type="button"
              className={`tab-button text-md font-bold font-poppins p-2 px-10 transition ${
                tabs === "sale" ? "text-[#4361EE]" : "text-gray-400"
              }`}
            >
              Sale
            </button>

            <button
              onClick={() => setTabs("rent")}
              type="button"
              className={`tab-button text-md font-bold font-poppins p-2 px-10 transition ${
                tabs === "rent" ? "text-[#4361EE]" : "text-gray-400"
              }`}
            >
              Rent
            </button>
          </div>

          <span
            className="w-1/2 h-[4px] bg-Color1/90 rounded-full transition-all duration-700"
            style={{
              transform:
                tabs === "sale" ? "translateX(0%)" : "translateX(-100%)",
            }}
          ></span>
        </div>

        {/* باقي الفورم من غير تغيير */}
        <div className="input-group">
          <input
            type="text"
            placeholder="City / Neighborhood / Landmark"
            className="font-poppins w-full p-3 sm:p-4 border-none rounded-xl shadow-[ inset 2px 2px 5px rgba(0, 0, 0, 0.1)] bg-gray-50 text-[#4f0393] placeholder-gray-400 text-md focus:ring-2 focus:ring-[#4f0393] focus:outline-none"
          />
        </div>

        <div className="input-group">
          <select className="w-full p-3 font-poppins sm:p-4 border-none rounded-xl shadow-inner-soft bg-gray-50 text-gray-400 form-select-custom text-md focus:ring-2 focus:ring-[#4f0393] focus:outline-none">
            <option value="" disabled>
              Property Type
            </option>
            <option value="apartment" className="text-[#4f0393]">
              Apartment
            </option>
            <option value="villa" className="text-[#4f0393]">
              Villa
            </option>
          </select>
        </div>

        <div className="price-range-group flex gap-4">
          <div className="input-group w-1/2">
            <input
              type="number"
              placeholder="Price To"
              className="w-full p-3 sm:p-4 font-poppins border-none rounded-xl shadow-inner-soft bg-gray-50 text-[#4f0393] placeholder-gray-400 text-md focus:ring-2 focus:ring-[#4f0393] focus:outline-none"
            />
          </div>
          <div className="input-group w-1/2">
            <input
              type="number"
              placeholder="Price From"
              className="w-full p-3 sm:p-4 font-poppins border-none rounded-xl shadow-inner-soft bg-gray-50 text-[#4f0393] placeholder-gray-400 text-md focus:ring-2 focus:ring-[#4f0393] focus:outline-none"
            />
          </div>
        </div>

        <div className="input-group">
          <select className="w-full font-poppins p-3 sm:p-4 border-none rounded-xl shadow-inner-soft bg-gray-50 text-gray-400 form-select-custom text-md focus:ring-2 focus:ring-[#4f0393] focus:outline-none">
            <option value="" disabled>
              Property Status
            </option>
            <option value="available" className="text-[#4f0393]">
              Available
            </option>
            <option value="vacant" className="text-[#4f0393]">
              Vacant
            </option>
            <option value="under_construction" className="text-[#4f0393]">
              Under Construction
            </option>
          </select>
        </div>

        <div className="offer-checkbox-group flex items-center text-sm sm:text-md text-[#4f0393] mt-1 mb-1">
          <input
            type="checkbox"
            id="is-offer"
            className="w-5 h-5 ml-2 cursor-pointer rounded border-gray-300 text-[#9d50ed] focus:ring-[#9d50ed]"
          />
          <label
            htmlFor="is-offer"
            className="checkbox-label font-poppins cursor-pointer font-normal"
          >
            Special Offers <i className="fas fa-tag"></i>
          </label>
        </div>

        <button
          type="submit"
          className="search-submit-btn font-poppins w-full p-2  sm:p-4 bg-[#4f0393] text-white rounded-[30px] text-md font-bold cursor-pointer shadow-lg shadow-purple-500/50 transition duration-200 hover:bg-[#9d50ed] hover:scale-[1.01] mt-8"
        >
          Search <i className="fas fa-search"></i>
        </button>
      </form>
    </motion.div>
  );
}
