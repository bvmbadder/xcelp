import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import { motion } from "motion/react";
const Banner = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="bg-slate-900 dark:bg-[#1A212D]">
      <div className="container mx-auto px-4 ">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4 }}
          className="text-center text-[#7553fc] text-lg lg:h-[30px] font-bold uppercase font-nunito"
        >
          <span>Hot Features</span>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="lg:px-28 text-white text-2xl lg:text-5xl font-bold font-satoshi">
            What's New on XcelPay
          </h2>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6 mt-8 lg:flex-row"
        >
          <span className="overflow-hidden rounded-lg">
            <img src={banner1} alt="" />
          </span>
          <span className="overflow-hidden rounded-lg">
            <img src={banner2} alt="" />
          </span>{" "}
          <span className="overflow-hidden rounded-lg">
            <img src={banner3} alt="" />
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
