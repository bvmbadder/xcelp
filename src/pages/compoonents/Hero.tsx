import one from "../../assets/hero/1.png";
import two from "../../assets/hero/2.png";
import three from "../../assets/hero/3.png";
import four from "../../assets/hero/4.png";
import five from "../../assets/hero/5.png";
import six from "../../assets/hero/6.png";
import seven from "../../assets/hero/7.png";
import eight from "../../assets/hero/8.png";
import nine from "../../assets/hero/9.png";
import ten from "../../assets/hero/10.png";
import { useState } from "react";
import { moreWallets, wallets } from "../../utils";
import back from "../../assets/icon/back.png";
import q from "../../assets/icon/q.png";
import Modal from "../../components/Modal";
import TabModal from "../../components/TabModal";
const Hero = () => {
  const [formTab, setFormTab] = useState(false);
  const onSetFormTabOpen = (value: string) => {
    setValue(value);
    closeFirstModal();
    setFormTab(true);
  };
  const onSetFormTabClose = () => {
    setFormTab(false);
    openFirstModal();
  };

  const onSetFormTabOpen2 = (value: string) => {
    setValue(value);
    closeSecondModal();
    setFormTab(true);
  };
  const onSetFormTabClose2 = () => {
    setFormTab(false);
    openSecondModal();
  };

  const [isFirstModalOpen, setFirstModalOpen] = useState<boolean>(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState<boolean>(false);

  const openFirstModal = () => setFirstModalOpen(true);
  const closeFirstModal = () => setFirstModalOpen(false);

  const openSecondModal = () => {
    closeFirstModal();
    setSecondModalOpen(true);
  };
  const closeSecondModal = () => setSecondModalOpen(false);

  const backToFirstModal = () => {
    closeSecondModal();
    setFirstModalOpen(true);
  };
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWallets = moreWallets.filter((wallet) =>
    wallet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [value, setValue] = useState("");
  return (
    <section className="relative  p-0 overflow-hidden">
      {formTab && (
        <TabModal
          isOpen={formTab}
          onClose={isFirstModalOpen ? onSetFormTabClose : onSetFormTabClose2}
          value={value}
        />
      )}
      <Modal
        icon={q}
        isOpen={isFirstModalOpen}
        title="Connect Wallet"
        closeModal={closeFirstModal}
      >
        <div className="flex flex-col">
          <ul className="p-4">
            {wallets.map((wallet) => (
              <li
                className="flex items-center justify-between font-[400] text-sm text-white mb-2 cursor-pointer hover:bg-gray-600 p-2 rounded-full bg-[#252626] relative"
                key={wallet.id}
                onClick={() => {
                  wallet.id == 4
                    ? openSecondModal()
                    : onSetFormTabOpen(wallet.name);
                }}
              >
                <div className="flex items-center">
                  <img
                    className="rounded-full mr-2 w-10 h-10"
                    src={wallet.icon}
                    alt=""
                  />
                  <span className="text-md">{wallet.name}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-xs text-gray-500 text-center p-5 bg-[#252626] rounded-b-3xl">
            By connecting your wallet, you agree to our{" "}
            <span className="text-white">Terms of Service</span>
          </div>
        </div>
      </Modal>
      <Modal
        icon={back}
        isOpen={isSecondModalOpen}
        title="All wallets"
        closeModal={closeSecondModal}
        backToFirstModal={backToFirstModal}
      >
        <div className="p-4">
          <input
            type="search"
            placeholder="Search wallet"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2  rounded-full mb-4 outline-green-400 pl-5  bg-[#252626]"
          />
          <div className="grid grid-cols-4 gap-2 overflow-auto scrollbar-none max-h-96">
            {filteredWallets.map((wallet) => (
              <div
                key={wallet.name}
                onClick={() => {
                  onSetFormTabOpen2(wallet.name);
                }}
                className="flex flex-col cursor-pointer text-xs items-center justify-between bg-[#252626] p-1 rounded-2xl"
              >
                <img
                  src={wallet.icon}
                  alt={wallet.name}
                  className="w-11 h-11 rounded-full"
                />
                <div className="text-white mt-2 w-full text-center font-Wix text-xs truncate">
                  {wallet.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
      <div className="relative banner py-20 h-full">
        <div className=" gradientbg absolute top-0 w-full h-full before:absolute before:w-full lg:hidden z-[1]"></div>
        <div className="container mx-auto p-4">
          <div className="relative grid gap-8 lg:grid-cols-2 py-auto">
            <div className="lg:flex lg:flex-col lg:pt-0 sm:pt-0 pt-10 z-[2]">
              <h1 className="lg:mb-4 font-satoshi font-extrabold text-4xl lg:text-6xl">
                <div className="lg:h-[70px] h-10">
                  <span className="animate"> Trusted Choice</span>{" "}
                </div>
                <div className="lg:h-[70px] h-10">
                  <span className="block ">for your Crypto</span>
                </div>
                <div className="lg:h-[70px] h-10">
                  <span>Needs.</span>
                </div>
              </h1>
              <div className=" [@media(max-width:388px)]:h-[162px] [@media(max-width:466px)]:h-[135px] [@media(max-width:581px)]:h-[108px] [@media(max-width:1024px)]:h-[81px] lg:h-[81px] overflow-hidden ">
                <p className="text-lg m-0 text-gray-500 dark:text-dark-text-primary font-normal leading-[150%]">
                  Enabling real world cryptocurrency adoption by providing
                  seamless and practical solutions that integrate
                  cryptocurrencies into everyday transactions, fostering a
                  decentralized economy for all.
                </p>
              </div>
              <div className="mt-8">
                <div className="flex flex-col items-center gap-4 sm:flex-row CTAs">
                  <div className="relative [@media(max-width:640px)]:w-full w-auto">
                    <button
                      className=" mt-[6px] [@media(max-width:640px)]:w-full"
                      onClick={() => setFirstModalOpen(true)}
                    >
                      <span className="flex items-center justify-center gap-2 rounded-full p-3 px-5   bg-[#7553fc] text-white">
                        Connect Wallet
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            className="w-6 h-6 rotate-90  iconify iconify--material-symbols"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="white"
                              d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6zm0 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </button>
                  </div>
                  <div className="group ">
                    <p className="m-0 font-bold ">
                      <span className="block text-[10px] text-gray-400 dark:text-dark-text-primary uppercase cursor-pointer ">
                        Any Queries?
                      </span>{" "}
                      <span className="text-sm cursor-pointer group-hover:underline text-[#7553fc]">
                        Contact Us{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block max-w-3xl banner-rows lg:opacity-100 opacity-10 ">
              <div className="grid grid-cols-3 gap-x-3">
                <div className="flex flex-col gap-4 banner-col">
                  <div className="banner-block">
                    <img src={one} alt="" />
                  </div>
                  <div className="banner-block">
                    <img src={two} alt="" />
                  </div>{" "}
                  <div className="banner-block">
                    <img src={three} alt="" />
                  </div>
                  <div className="banner-block">
                    <img src={one} alt="" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 banner-col">
                  <div className="banner-block">
                    <img src={four} alt="" />
                  </div>
                  <div className="banner-block">
                    <img src={five} alt="" />
                  </div>{" "}
                  <div className="banner-block">
                    <img src={six} alt="" />
                  </div>
                  <div className="banner-block">
                    <img src={ten} alt="" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 banner-col">
                  <div className="banner-block">
                    <img src={seven} alt="" />
                  </div>
                  <div className="banner-block">
                    <img src={eight} alt="" />
                  </div>{" "}
                  <div className="banner-block">
                    <img src={nine} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
