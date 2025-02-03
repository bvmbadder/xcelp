import Banner from "./compoonents/Banner";
import { motion } from "motion/react";
import Blog from "./compoonents/Blog";
import NewsLetter from "./compoonents/NewsLetter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "./compoonents/Hero";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Banner />
      {/*  */}
      <section className="bg-gradient-to-r from-white to-indigo-100">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4 }}
          className="text-center text-[#7553fc] text-lg lg:h-[30px] font-bold uppercase font-nunito"
        >
          <span>XCELPAY WALLET</span>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="text-center lg:h-[120px]"
        >
          <h2 className="lg:px-28 text-[#0f172a] text-2xl lg:text-5xl font-bold font-satoshi">
            The World’s Fastest Growing <br /> Crypto App
          </h2>
        </motion.div>
      </section>
      {/*  */}
      <section className="bg-slate-900 dark:bg-[#1A212D]"></section>
      <Blog />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
