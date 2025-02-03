import { useState } from "react";
import logo from "../assets/logo.svg";
import back from "../assets/icon/back.png";
import q from "../assets/icon/q.png";
import { moreWallets, wallets } from "../utils";
import Modal from "./Modal";
import TabModal from "./TabModal";
const Header = () => {
  const [isactive, setisActive] = useState(false);
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
    <header className="z-50 top-0 fixed w-full">
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
      <div>
        <nav className="relative backdrop-blur-md bg-white">
          <div className="container mx-auto p-4 flex justify-between">
            <div className="lg:flex gap-4">
              <div className=" flex items-center gap-4">
                <a href="/">
                  <span>
                    <img src={logo} alt="" />
                  </span>
                </a>
              </div>
              <div className="lg:flex items-center hidden">
                <nav className="relative z-10 flex max-w-max flex-1 items-center justify-center h-full [&>div]:h-full">
                  <div className="relative">
                    <ul
                      data-orientation="horizontal"
                      className="group flex flex-1 list-none items-center justify-center space-x-1 h-full [&amp;>li]:h-full dark:text-dark-text-primary"
                      dir="ltr"
                    >
                      <li>
                        <a
                          className="group inline-flex w-max items-center justify-center h-full px-4 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 relative"
                          href="/functionalities"
                          data-radix-collection-item=""
                        >
                          Functionalities{" "}
                        </a>
                      </li>
                    </ul>{" "}
                  </div>
                </nav>
              </div>
            </div>
            <div className="lg:hidden">
              <div className="flex items-center gap-4">
                <div className="lg:flex items-center hidden">
                  <nav
                    aria-label="Main"
                    data-orientation="horizontal"
                    dir="ltr"
                    className="relative z-10 flex max-w-max flex-1 items-center justify-center h-full [&amp;>div]:h-full"
                  >
                    <div className="relative">
                      <ul
                        data-orientation="horizontal"
                        className="group flex flex-1 list-none items-center justify-center space-x-1 h-full [&amp;>li]:h-full dark:text-dark-text-primary"
                        dir="ltr"
                      >
                        <li>
                          <button
                            id="radix-:r7:-trigger-radix-:r8:"
                            data-state="closed"
                            aria-expanded="false"
                            aria-controls="radix-:r7:-content-radix-:r8:"
                            className="group inline-flex w-max items-center justify-center h-full px-4 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 group text-primary-300 dark:text-primary-200"
                            data-radix-collection-item=""
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              className=" text-primary-300 dark:text-primary-200 w-7 h-7 iconify iconify--material-symbols-light"
                              width="1em"
                              height="1em"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M12 21.18q-.212 0-.404-.042q-.192-.044-.379-.15l-6.884-3.817q-.38-.217-.606-.583q-.227-.367-.227-.82V8.232q0-.454.227-.82q.227-.367.606-.584l6.884-3.817q.187-.106.38-.15q.192-.043.403-.043t.404.044t.379.149l6.884 3.817q.38.217.606.584q.227.366.227.82v7.534q0 .454-.227.82q-.227.367-.606.584l-6.884 3.818q-.187.105-.38.149q-.191.043-.403.043M9.196 9.866q.57-.691 1.297-1.028Q11.221 8.5 12 8.5q.798 0 1.516.338t1.288 1.028l4.115-2.291l-6.611-3.679Q12.154 3.82 12 3.82t-.308.077L5.081 7.575zm2.304 10.13v-4.505q-1.3-.235-2.15-1.201T8.5 12q0-.333.054-.621t.167-.61L4.5 8.404v7.344q0 .173.077.308q.077.134.23.23zM12 14.5q1.037 0 1.768-.732T14.5 12t-.732-1.768T12 9.5t-1.768.732T9.5 12t.732 1.768T12 14.5m.5 5.496l6.692-3.71q.154-.096.231-.23q.077-.135.077-.308V8.404l-4.221 2.365q.113.347.167.622q.054.276.054.609q0 1.323-.85 2.29q-.85.966-2.15 1.2z"
                              ></path>
                            </svg>{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                              aria-hidden="true"
                            >
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            id="radix-:r7:-trigger-radix-:r9:"
                            data-state="closed"
                            aria-expanded="false"
                            aria-controls="radix-:r7:-content-radix-:r9:"
                            className="group inline-flex w-max items-center justify-center h-full px-4 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 group text-primary-300 dark:text-primary-200"
                            data-radix-collection-item=""
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              className="stroke-2 text-primary-300 dark:text-primary-200 w-7 h-7  iconify iconify--arcticons"
                              width="1em"
                              height="1em"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M39.5 15.5h-9a2 2 0 0 1-2-2v-9h-18a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2zm-11-11l11 11"
                              ></path>
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M39.5 15.5h-9a2 2 0 0 1-2-2v-9h-18a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2zm-11-11l11 11M15 22h18m-18 5.5h18M15 33h11"
                              ></path>
                            </svg>{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                              aria-hidden="true"
                            >
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            id="radix-:r7:-trigger-radix-:ra:"
                            data-state="closed"
                            aria-expanded="false"
                            aria-controls="radix-:r7:-content-radix-:ra:"
                            className="group inline-flex w-max items-center justify-center h-full px-4 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 group text-white rounded-full bg-gradient-to-r from-primary-300 to-primary-500 dark:bg-gradient-to-r dark:from-primary-300 dark:to-primary-400"
                            data-radix-collection-item=""
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              className="text-white stroke-2 w-7 h-7  iconify iconify--material-symbols-light"
                              width="1em"
                              height="1em"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="m12 15.577l-3.539-3.538l.708-.72L11.5 13.65V5h1v8.65l2.33-2.33l.709.719zM6.616 19q-.691 0-1.153-.462T5 17.384v-2.423h1v2.423q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-2.423h1v2.423q0 .691-.462 1.153T17.384 19z"
                              ></path>
                            </svg>
                            Get App{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                              aria-hidden="true"
                            >
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="fixed left-0 top-full flex justify-center"></div>
                  </nav>
                </div>

                <ul className=" flex items-center">
                  <li
                    className="lg:hidden nav-link menu-button border border-gray hover:bg-primary-100 transition-all h-11 w-11 rounded-md !py-[2px] !px-[4px]"
                    onClick={() => setisActive(!isactive)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      className="hover:text-primary p-1 text-gray-900 cursor-pointer iconify iconify--fluent"
                      width="36"
                      height="36"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4m7 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4M5 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4m7-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m7 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4M5 10a2 2 0 1 1 0 4a2 2 0 0 1 0-4m7-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m7 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4M5 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4"
                      ></path>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <div className="lg:flex items-center hidden">
                <nav
                  aria-label="Main"
                  data-orientation="horizontal"
                  dir="ltr"
                  className="relative z-10 flex max-w-max flex-1 items-center justify-center h-full [&amp;>div]:h-full"
                >
                  <div className="relative">
                    <ul
                      data-orientation="horizontal"
                      className="group flex flex-1 list-none items-center justify-center space-x-1 h-full [&amp;>li]:h-full dark:text-dark-text-primary"
                      dir="ltr"
                    >
                      <li>
                        <button
                          id="radix-:r7:-trigger-radix-:r8:"
                          data-state="closed"
                          aria-expanded="false"
                          aria-controls="radix-:r7:-content-radix-:r8:"
                          className="group inline-flex w-max items-center justify-center h-full px-4 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 group text-primary-300 dark:text-primary-200"
                          data-radix-collection-item=""
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            className=" text-primary-300 dark:text-primary-200 w-7 h-7 iconify iconify--material-symbols-light"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7553fc"
                              d="M12 21.18q-.212 0-.404-.042q-.192-.044-.379-.15l-6.884-3.817q-.38-.217-.606-.583q-.227-.367-.227-.82V8.232q0-.454.227-.82q.227-.367.606-.584l6.884-3.817q.187-.106.38-.15q.192-.043.403-.043t.404.044t.379.149l6.884 3.817q.38.217.606.584q.227.366.227.82v7.534q0 .454-.227.82q-.227.367-.606.584l-6.884 3.818q-.187.105-.38.149q-.191.043-.403.043M9.196 9.866q.57-.691 1.297-1.028Q11.221 8.5 12 8.5q.798 0 1.516.338t1.288 1.028l4.115-2.291l-6.611-3.679Q12.154 3.82 12 3.82t-.308.077L5.081 7.575zm2.304 10.13v-4.505q-1.3-.235-2.15-1.201T8.5 12q0-.333.054-.621t.167-.61L4.5 8.404v7.344q0 .173.077.308q.077.134.23.23zM12 14.5q1.037 0 1.768-.732T14.5 12t-.732-1.768T12 9.5t-1.768.732T9.5 12t.732 1.768T12 14.5m.5 5.496l6.692-3.71q.154-.096.231-.23q.077-.135.077-.308V8.404l-4.221 2.365q.113.347.167.622q.054.276.054.609q0 1.323-.85 2.29q-.85.966-2.15 1.2z"
                            ></path>
                          </svg>{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#7553fc"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                            aria-hidden="true"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </button>
                      </li>
                      <li>
                        <button
                          id="radix-:r7:-trigger-radix-:r9:"
                          data-state="closed"
                          aria-expanded="false"
                          aria-controls="radix-:r7:-content-radix-:r9:"
                          className="group inline-flex w-max items-center justify-center h-full px-4 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 group text-primary-300 dark:text-primary-200"
                          data-radix-collection-item=""
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            className="stroke-2 text-primary-300 dark:text-primary-200 w-7 h-7  iconify iconify--arcticons"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 48 48"
                          >
                            <path
                              fill="none"
                              stroke="#7553fc"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M39.5 15.5h-9a2 2 0 0 1-2-2v-9h-18a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2zm-11-11l11 11"
                            ></path>
                            <path
                              fill="none"
                              stroke="#7553fc"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M39.5 15.5h-9a2 2 0 0 1-2-2v-9h-18a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2zm-11-11l11 11M15 22h18m-18 5.5h18M15 33h11"
                            ></path>
                          </svg>{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#7553fc"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                            aria-hidden="true"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </button>
                      </li>
                      <li>
                        <button
                          id="radix-:r7:-trigger-radix-:ra:"
                          data-state="closed"
                          aria-expanded="false"
                          aria-controls="radix-:r7:-content-radix-:ra:"
                          className="group inline-flex w-max items-center justify-center h-full px-4 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 group text-white rounded-full bg-gradient-to-r from-[#7553fc] to-[#7553fc] dark:bg-gradient-to-r dark:from-primary-300 dark:to-primary-400"
                          data-radix-collection-item=""
                          onClick={() => setFirstModalOpen(true)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            className="text-white stroke-2 w-7 h-7  iconify iconify--material-symbols-light"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="white"
                              d="m12 15.577l-3.539-3.538l.708-.72L11.5 13.65V5h1v8.65l2.33-2.33l.709.719zM6.616 19q-.691 0-1.153-.462T5 17.384v-2.423h1v2.423q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-2.423h1v2.423q0 .691-.462 1.153T17.384 19z"
                            ></path>
                          </svg>
                          Connect Wallet
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                            aria-hidden="true"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="fixed left-0 top-full flex justify-center"></div>
                </nav>
              </div>
            </div>
          </div>
          {isactive && (
            <div className="p-3 flex flex-col lg:hidden items-center">
              <a
                className="group inline-flex w-max items-center justify-center h-full px-4 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 relative"
                href="/functionalities"
                data-radix-collection-item=""
              >
                Functionalities{" "}
              </a>
              <button
                id="radix-:r7:-trigger-radix-:ra:"
                data-state="closed"
                aria-expanded="false"
                aria-controls="radix-:r7:-content-radix-:ra:"
                className="group inline-flex w-max items-center justify-center h-full px-4 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 group text-white rounded-full bg-gradient-to-r from-[#7553fc] to-[#7553fc] dark:bg-gradient-to-r dark:from-primary-300 dark:to-primary-400"
                data-radix-collection-item=""
                onClick={() => setFirstModalOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="text-white stroke-2 w-7 h-7  iconify iconify--material-symbols-light"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="m12 15.577l-3.539-3.538l.708-.72L11.5 13.65V5h1v8.65l2.33-2.33l.709.719zM6.616 19q-.691 0-1.153-.462T5 17.384v-2.423h1v2.423q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-2.423h1v2.423q0 .691-.462 1.153T17.384 19z"
                  ></path>
                </svg>
                Connect Wallet
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
