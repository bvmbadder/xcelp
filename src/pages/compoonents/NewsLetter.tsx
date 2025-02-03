import plane from "../../assets/plane.png";
const NewsLetter = () => {
  return (
    <section>
      <div className="container mx-auto p-4">
        <div className="py-10 text-center rounded-lg bg-slate-900 dark:bg-[#1A212D] relative bg-subbg">
          <img src={plane} className="absolute -top-14 right-32" alt="" />
          <div className="max-w-2xl px-3 py-10 mx-auto text-white subscribe-content">
            <h2 className="mb-2 text-2xl font-bold">Join our Newsletter</h2>
            <span>Get all the latest XcelPay updates, news and events.</span>
            <div>
              <div className="max-w-md mx-auto mt-4">
                <form action="">
                  <input
                    type="email"
                    className="w-full rounded-full p-3 input text-slate-800 outline-none"
                    placeholder="Your email here..."
                  />
                  <button className="w-full my-2 py-3 rounded-full bg-[#7553fc]">
                    Subscribe
                  </button>
                </form>
                <small className="text-sm ">
                  By submitting this form you consent to us emailing you
                  occasionally about our products and services. You can
                  unsubscribe from emails at any time, and we will never pass
                  your email to third parties.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
