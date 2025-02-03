import google from "../assets/goog.png";
import apple from "../assets/apple.png";
import qr from "../assets/qr.svg";
const Footer = () => {
  return (
    <footer className="pt-24 bg-[#0f172a]">
      <div>
        <div className="container mx-auto p-4">
          <div className="grid flex-col lg:grid-cols-6 lg:flex-row">
            <div>
              <div className="mb-6">
                <h1 className="text-xl text-white">Products</h1>
                <ul>
                  <li className="nav-link">
                    <a href="https://xceltrip.com">XcelTrip</a>
                  </li>
                  <li className="nav-link">
                    <a href="https://onelink.to/xcelpay">Wallet App</a>
                  </li>
                  <li className="nav-link">
                    <label htmlFor="coming-soon">Payment Gateway</label>
                  </li>
                  <li className="nav-link">
                    <a href="https://chrome.google.com/webstore/detail/xcelpay-wallet/ehjiblpccbknkgimiflboggcffmpphhp">
                      Wallet Extension
                    </a>
                  </li>
                  <li className="nav-link">
                    <label htmlFor="coming-soon">Marketplace</label>
                  </li>
                  <li className="nav-link">
                    <label htmlFor="coming-soon">NFT</label>
                  </li>
                  <li className="nav-link">
                    <label htmlFor="coming-soon">Launchpad</label>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <h1 className="text-xl text-white">Earn</h1>
                <ul>
                  <li className="nav-link">
                    <a href="">Refer and Earn</a>
                  </li>
                  <li className="nav-link">
                    <a href="">Ambassador Program</a>
                  </li>
                  <li className="nav-link">
                    <a href="">Share and Earn</a>
                  </li>
                  <li className="nav-link">
                    <a href="">Staking</a>
                  </li>
                  <li className="nav-link">
                    <a href="https://dex.xcelpay.io" target="_blank">
                      XcelPay DEX
                    </a>
                  </li>
                  <li className="nav-link">
                    <a href="">Airdrop and Giveaway</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <h1 className="text-xl text-white">Token</h1>
                <ul>
                  <li className="nav-link">
                    <a href="https://bscscan.com/token/0xC79d1fD14F514cD713b5cA43D288a782Ae53eAb2">
                      Explorer
                    </a>
                  </li>
                  <li className="nav-link">
                    <a href="https://s3.amazonaws.com/xcelpay.io/_xcelswapaudit/xcelswap-final-audit.pdf">
                      Audit
                    </a>
                  </li>
                  <li className="nav-link">
                    <a href="https://coinmarketcap.com/currencies/xcel-swap/">
                      Coinmarketcap
                    </a>
                  </li>
                  <li className="nav-link">
                    <a href="https://www.coingecko.com/en/coins/xcel-defi">
                      CoinGecko
                    </a>
                  </li>
                  <li className="nav-link">
                    <a href="https://pancakeswap.finance/swap?outputCurrency=0xC79d1fD14F514cD713b5cA43D288a782Ae53eAb2">
                      Pancakeswap
                    </a>
                  </li>
                  <li className="nav-link">
                    <a href="https://bridge.ferrum.network/frm">Bridge</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <h1 className="text-xl text-white">Company</h1>
                <ul>
                  <li className="nav-link">
                    <a href="">About us</a>
                  </li>
                  <li className="nav-link">
                    <a target="_blank" href="">
                      {" "}
                      Whitepaper
                    </a>
                  </li>
                  <li className="nav-link">
                    <a target="_blank" href="">
                      Litepaper
                    </a>
                  </li>
                  <li className="nav-link">
                    <a href="">Contact</a>
                  </li>
                  <li className="nav-link">
                    <a href="">Privacy Policy</a>
                  </li>
                  <li className="nav-link">
                    <a href="">Terms &amp; Conditions</a>
                  </li>
                  <li className="nav-link">
                    <a
                      target="_blank"
                      href="https://drive.google.com/drive/folders/18dOtCND1w_qcQ9pY2V60RhEC7p_yxGCw?usp=sharing"
                    >
                      Brand Assets
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-2 text-white">
              <div>
                <div>
                  <h1 className="mb-3 text-xl ">Download Wallet</h1>
                  <div className="flex gap-4 my-6">
                    <div className="">
                      <img src={google} alt="" />
                    </div>
                    <div className="">
                      <img src={apple} alt="" />
                    </div>{" "}
                    <div className="">
                      <img src={qr} alt="" className="w-full h-full" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="text-center lg:text-left">
                    Official:
                    <span className="pl-1 font-medium text-gray-300">
                      info@xcelpay.io
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div>
                  Support:
                  <span className="pl-1 font-medium text-gray-300">
                    support@xcelpay.io
                  </span>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div>
                  Listing:
                  <span className="pl-1 font-medium text-gray-300">
                    prashant@xceltrip.com
                  </span>
                </div>
              </div>
              <h1 className="mt-6 mb-3 text-xl text-center lg:text-left">
                Join Our Community
              </h1>
              <div className="text-center lg:text-left flex items-center lg:items-start justify-center lg:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="pr-4 transition-all text-slate-400 hover:text-white iconify iconify--dashicons"
                  width="40"
                  height="40"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M8.46 18h2.93v-7.3h2.45l.37-2.84h-2.82V6.04c0-.82.23-1.38 1.41-1.38h1.51V2.11c-.26-.03-1.15-.11-2.19-.11c-2.18 0-3.66 1.33-3.66 3.76v2.1H6v2.84h2.46z"
                  ></path>
                </svg>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="pr-4 transition-all text-slate-400 hover:text-white iconify iconify--dashicons"
                  width="40"
                  height="40"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M18.94 4.46c-.49.73-1.11 1.38-1.83 1.9c.01.15.01.31.01.47c0 4.85-3.69 10.44-10.43 10.44c-2.07 0-4-.61-5.63-1.65c.29.03.58.05.88.05c1.72 0 3.3-.59 4.55-1.57a3.67 3.67 0 0 1-3.42-2.55c.22.04.45.07.69.07c.33 0 .66-.05.96-.13a3.68 3.68 0 0 1-2.94-3.6v-.04c.5.27 1.06.44 1.66.46a3.68 3.68 0 0 1-1.63-3.06c0-.67.18-1.3.5-1.84c1.81 2.22 4.51 3.68 7.56 3.83c-.06-.27-.1-.55-.1-.84a3.67 3.67 0 0 1 3.67-3.66c1.06 0 2.01.44 2.68 1.16c.83-.17 1.62-.47 2.33-.89c-.28.85-.86 1.57-1.62 2.02a7 7 0 0 0 2.11-.57"
                  ></path>
                </svg>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="pr-4 transition-all text-slate-400 hover:text-white iconify iconify--dashicons"
                  width="40"
                  height="40"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M12.7 10c0-1.5-1.2-2.7-2.7-2.7S7.3 8.5 7.3 10s1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7m1.4 0c0 2.3-1.8 4.1-4.1 4.1S5.9 12.3 5.9 10S7.7 5.9 10 5.9s4.1 1.8 4.1 4.1m1.1-4.3c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .5 1 1M10 3.4c-1.2 0-3.7-.1-4.7.3c-.7.3-1.3.9-1.5 1.6c-.4 1-.3 3.5-.3 4.7s-.1 3.7.3 4.7c.2.7.8 1.3 1.5 1.5c1 .4 3.6.3 4.7.3s3.7.1 4.7-.3q1.05-.45 1.5-1.5c.4-1.1.3-3.6.3-4.7s.1-3.7-.3-4.7c-.2-.7-.8-1.3-1.5-1.5c-1-.5-3.5-.4-4.7-.4m8 6.6v3.3c0 1.2-.4 2.4-1.3 3.4c-.9.9-2.1 1.3-3.4 1.3H6.7c-1.2 0-2.4-.4-3.4-1.3c-.8-.9-1.3-2.1-1.3-3.4V6.7c0-1.3.5-2.5 1.3-3.4C4.3 2.5 5.5 2 6.7 2h6.6c1.2 0 2.4.4 3.4 1.3c.8.9 1.3 2.1 1.3 3.4z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="pr-4 transition-all text-slate-400 hover:text-white iconify iconify--ic"
                  width="40"
                  height="40"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"
                  ></path>
                </svg>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="pr-4 transition-all text-slate-400 hover:text-white iconify iconify--ic"
                  width="40"
                  height="40"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
                  ></path>
                </svg>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="pr-4 transition-all text-slate-400 hover:text-white iconify iconify--ic"
                  width="40"
                  height="40"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10.75 13.04c0-.57-.47-1.04-1.04-1.04s-1.04.47-1.04 1.04a1.04 1.04 0 1 0 2.08 0m3.34 2.37c-.45.45-1.41.61-2.09.61s-1.64-.16-2.09-.61a.26.26 0 0 0-.38 0a.26.26 0 0 0 0 .38c.71.71 2.07.77 2.47.77s1.76-.06 2.47-.77a.26.26 0 0 0 0-.38c-.1-.1-.27-.1-.38 0m.2-3.41c-.57 0-1.04.47-1.04 1.04s.47 1.04 1.04 1.04s1.04-.47 1.04-1.04S14.87 12 14.29 12"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m5.8 11.33c.02.14.03.29.03.44c0 2.24-2.61 4.06-5.83 4.06s-5.83-1.82-5.83-4.06c0-.15.01-.3.03-.44c-.51-.23-.86-.74-.86-1.33a1.455 1.455 0 0 1 2.47-1.05c1.01-.73 2.41-1.19 3.96-1.24l.74-3.49c.01-.07.05-.13.11-.16c.06-.04.13-.05.2-.04l2.42.52a1.04 1.04 0 1 1 .93 1.5c-.56 0-1.01-.44-1.04-.99l-2.17-.46l-.66 3.12c1.53.05 2.9.52 3.9 1.24a1.455 1.455 0 1 1 1.6 2.38"
                  ></path>
                </svg>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 text-center text-slate-400">
        ©2025 - XcelPay LLC | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
