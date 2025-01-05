import bugBugLogo from "../assets/logo.svg";

const Footer = () => {
  return (
    <section className="px-5 py-8 sm:py-12 sm:px-10 lg:py-16 2xl:px-44 bg-green">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="flex flex-col lg:px-10">
          <img src={bugBugLogo} alt="Logo" className="w-52 lg:w-auto" />
          <p className="mt-10 text-white text-base sm:text-lg lg:text-xl">
            At Bug Bug Consulting, we’re shaping the future of sustainable
            agriculture with AI-powered tools that bring balance between
            innovation and nature.
          </p>
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl text-lightGreen">
            Our Solutions
          </h1>
          <hr className="border-1 border-lightGreen my-5" />
          <div className="flex flex-col gap-9">
            <p className="cursor-pointer text-white uppercase text-base sm:text-lg lg:text-xl tracking-widest">
              Solution 1
            </p>
            <p className="cursor-pointer text-white uppercase text-base sm:text-lg lg:text-xl tracking-widest">
              Solution 2
            </p>
            <p className="cursor-pointer text-white uppercase text-base sm:text-lg lg:text-xl tracking-widest">
              Solution 3
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl lg:text-3xl text-lightGreen">Contact Us</h1>
          <hr className="border-1 border-lightGreen my-5" />
          <div className="flex flex-col gap-5">
            <p className="cursor-pointer text-white uppercase text-sm sm:text-md lg:text-xl tracking-widest">
              456 Innovation Drive, Suite 300, San Francisco, CA 94105
            </p>
            <p className="cursor-pointer text-white uppercase text-sm sm:text-md lg:text-xl tracking-widest">
              HELLO@BUGBUG.COM
            </p>
            <p className="cursor-pointer text-white uppercase text-sm sm:text-md lg:text-xl tracking-widest">
              +1 234 567 8901
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <hr className="border-1 border-lightGreen" />
        <div className="flex lg:flex-row flex-col justify-between mt-8 gap-8 lg:gap-0">
          <div className="flex gap-5 items-center">
            <span className="cursor-pointer uppercase text-white tracking-widest text-xs lg:text-sm">
              Terms of Service
            </span>
            <span className="h-1 w-1 rounded-full bg-lightGreen"></span>
            <span className="cursor-pointer uppercase text-white tracking-widest text-xs lg:text-sm">
              Privacy Policy
            </span>
            <span className="h-1 w-1 rounded-full bg-lightGreen"></span>
            <span className="cursor-pointer uppercase text-white tracking-widest text-xs lg:text-sm">
              Sitemap
            </span>
          </div>
          <div className="flex flex-wrap gap-5 items-center">
            <span className="cursor-pointer uppercase text-white tracking-widest text-xs lg:text-sm">
              Linkedin
            </span>
            <span className="h-1 w-1 rounded-full bg-lightGreen"></span>
            <span className="cursor-pointer uppercase text-white tracking-widest text-xs lg:text-sm">
              Instagram
            </span>
            <span className="h-1 w-1 rounded-full bg-lightGreen"></span>
            <span className="cursor-pointer uppercase text-white tracking-widest text-xs lg:text-sm">
              Facebook
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
