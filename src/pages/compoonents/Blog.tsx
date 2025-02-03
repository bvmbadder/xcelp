import { motion } from "motion/react";
import { BiRightArrowAlt } from "react-icons/bi";
const BlogPost = ({ title }: { title: string }) => {
  return (
    <div className="relative h-[238px] w-full overflow-hidden rounded-lg bg-black hover:bg-[#7553fc]">
      <div className="absolute bottom-0 left-0">
        <h1 className="p-4 text-nunito font-bold text-lg text-white">
          {title}
        </h1>
      </div>
    </div>
  );
};

const Blog = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="bg-gradient-to-r from-indigo-100 to-white">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4 }}
          className="text-center text-[#7553fc] text-lg lg:h-[30px] font-extrabold uppercase font-nunito"
        >
          <span>xcelpay blog</span>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="lg:px-28 text-[#0f172a] text-2xl lg:text-5xl font-extrabold font-satoshi">
            Latest On Xcelpay
          </h2>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6 mt-12 lg:flex-row w-full"
        >
          <BlogPost title="Your Financial Freedom Matters: Take Control with XcelPay Wallet" />
          <BlogPost title="The Bitcoin Bull Run: A Deep Dive into the Recent Price Surge" />
          <BlogPost title="Effortless Crypto Swaps: Explore a Wide Range of Pairs with Low Fees on XcelPay" />
        </motion.div>
        <motion.button className="border flex items-center gap-3 mt-5 rounded-full border-black text-sm font-light  text-black p-3 hover:text-[#7553fc] hover:border-[#7553fc]">
          See More{" "}
          <span>
            <BiRightArrowAlt />
          </span>
        </motion.button>
      </div>
    </section>
  );
};

export default Blog;
