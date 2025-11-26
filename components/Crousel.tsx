"use client";
import { carousels } from "@/data/carousel";
import { motion } from "framer-motion";

const Carousel = () => {
    return (
          <div className="-mt-24 sm:-mt-20 md:-mt-24 relative overflow-hidden">
            <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 animate-scroll px-3 sm:px-5 py-6 sm:py-8 md:py-10">
              {(() => {
                const items = carousels.slice(0, 12);
                const duplicated = [...items, ...items];
                return duplicated.map((property, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col justify-center items-center w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] shrink-0"
                  >
                    <motion.img
                      whileHover={{ boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                      className="rounded-2xl sm:rounded-3xl w-full h-[180px] sm:h-[220px] md:h-60 lg:h-64 object-cover"
                      src={property.thumbnail}
                      alt={property.title}
                    />
                    <h1 className="mt-2 font-semibold text-sm sm:text-base md:text-lg">{property.title}</h1>
                    <p className="text-gray-500 text-xs sm:text-sm md:text-base">{property.from}</p>
                  </motion.div>
                ));
              })()}
            </div>
          </div>

    )
}

export default Carousel;