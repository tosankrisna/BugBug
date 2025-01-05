import heroImage from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="pt-8 pb-12 px-5 sm:px-10 lg:px-24">
      <div className="grid lg:grid-cols-3 mt-14">
        <div className="col-span-2">
          <p className="text-grey text-[14px] sm:text-[16px] lg:text-[24px]">
            AI-powered insect monitoring tools
          </p>
          <h1 className="text-black text-[2em] sm:text-[2.5em] lg:text-[3em] xl:text-[4.7em] 2xl:text-[6.5em] leading-snug mt-3">
            Empowering Sustainable Growth Through Precision Insect Monitoring
          </h1>
          <div className="flex gap-5 mt-10">
            <button className="bg-green hover:bg-darkGreen px-3 py-3 lg:py-4 lg:px-6 text-white rounded-lg uppercase text-xs lg:text-sm tracking-widest">
              Learn More
            </button>
            <button className="bg-primary hover:bg-white hover:shadow-xl px-3 py-3 lg:py-5 lg:px-6 text-xs lg:text-sm text-green border-green border-1 rounded-lg uppercase tracking-widest">
              Get Started
            </button>
          </div>
        </div>
        <div className="hidden lg:block lg:justify-items-end">
          <img src={heroImage} alt="Hero" className="rounded-2xl w-11/12" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
