import certified from "../assets/certified.svg";

const GetInTouch = () => {
  return (
    <section className="px-5 py-8 sm:px-10 sm:py-20 lg:px-24 lg:py-32 bg-lightGreen">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-between w-11/12">
          <div className="flex flex-col gap-10">
            <h1 className="text-3xl lg:text-6xl">Get in Touch</h1>
            <p className="text-base mb-5 lg:mb-0 lg:text-xl">
              Have questions or ready to learn more about how Bug Bug Consulting
              can transform your pest management? We&lsquo;re here to help.
            </p>
          </div>
          <div className="flex gap-2 lg:gap-5">
            <img
              src={certified}
              alt="certified"
              className="w-20 sm:w-24 lg:w-32 2xl:w-auto"
            />
            <img
              src={certified}
              alt="certified"
              className="w-20 sm:w-24 lg:w-32 2xl:w-auto"
            />
            <img
              src={certified}
              alt="certified"
              className="w-20 sm:w-24 lg:w-32 2xl:w-auto"
            />
          </div>
        </div>
        <div className="sm:w-full 2xl:w-10/12 ml-auto">
          <form
            action=""
            className="bg-primary p-10 rounded-xl flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1">
              <label className="uppercase tracking-widest text-sm lg:text-base">
                Name
              </label>
              <input
                type="text"
                className="p-3 rounded-lg border-1 border-grey focus:border-green"
                placeholder="e.g Alex Taylor"
              />
              <span className="text-grey text-sm lg:text-base">
                Please provide your name so we know how to address you.
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <label className="uppercase tracking-widest text-sm lg:text-base">
                Email Address
              </label>
              <input
                type="text"
                className="p-3 rounded-lg border-1 border-grey focus:border-green"
                placeholder="you@example.com"
              />
              <span className="text-grey text-sm lg:text-base">
                Enter a valid email address where we can reach you.
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <label className="uppercase tracking-widest text-sm lg:text-base">
                Phone Number (Optional)
              </label>
              <input
                type="text"
                className="p-3 rounded-lg border-1 border-grey focus:border-green"
                placeholder="+1 234 567 8901"
              />
              <span className="text-grey text-sm lg:text-base">
                Include your phone number if you&apos;d like us to call you.
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <label className="uppercase tracking-widest text-sm lg:text-base">
                Subject
              </label>
              <div className="grid grid-cols-1">
                <select className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-3 pl-3 pr-8 border-1 border-grey focus:border-green text-grey">
                  <option
                    defaultValue="Select a subject"
                    className="p-3"
                    disabled
                  >
                    Select a subject
                  </option>
                  <option value="General Inquiry" className="hover:underline">
                    General Inquiry
                  </option>
                  <option value="Request a Demo" className="">
                    Request a Demo
                  </option>
                  <option value="Partnership Opportunities" className="">
                    Partnership Opportunities
                  </option>
                  <option value="Technical Support" className="">
                    Technical Support
                  </option>
                  <option value="Others" className="">
                    Others
                  </option>
                </select>
                <svg
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-grey"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-grey mt-1 text-sm lg:text-base">
                  Choose the topic that best matches your inquiry.
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="uppercase tracking-widest text-sm lg:text-base">
                Message
              </label>
              <textarea
                className="p-3 h-32 rounded-lg border-1 border-grey focus:border-green"
                placeholder="Type your message here..."
              ></textarea>
              <span className="text-grey text-sm lg:text-base">
                Share details about your request, question, or feedback.
              </span>
            </div>
            <div className="mt-10">
              <button className="bg-green w-full py-5 text-white uppercase tracking-widest rounded-xl text-sm">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
