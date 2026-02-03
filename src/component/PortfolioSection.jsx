import { motion } from "framer-motion";

const PortfolioSection = ({
  title,
  date,
  description,
  thumbnails,
  mainImage,
  reverse = false,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="min-h-screen bg-[#050505] text-white flex items-center"
    >
      <div
        className={`max-w-7xl mx-auto grid grid-cols-12 gap-10 px-10 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Thumbnails */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
          {thumbnails.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="rounded-lg brightness-90 contrast-110"
            />
          ))}
        </div>

        {/* Text */}
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-center">
          <h2 className="font-serif text-6xl mb-6">{title}</h2>

          <p className="uppercase tracking-[0.3em] text-xs text-gray-400 mb-8">
            {date}
          </p>

          <p className="text-gray-300 leading-relaxed max-w-md">
            {description}
          </p>

          <button className="mt-10 flex items-center gap-3 text-xs tracking-widest text-gray-200 hover:text-white transition">
            SEE COLLECTION
            <span className="inline-block w-10 h-px bg-white" />
          </button>
        </div>

        {/* Main Image */}
        <div className="col-span-12 lg:col-span-5 flex justify-center">
          <img
            src={mainImage}
            alt=""
            className="rounded-xl shadow-2xl brightness-90 contrast-110"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
