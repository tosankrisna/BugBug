import topPattern from "../assets/top-pattern.svg";
import bottomPattern from "../assets/bottom-pattern.svg";
import bee from "../assets/bee.svg";

const ChooseUs = () => {
  return (
    <section>
      <img src={topPattern} alt="top pattern" className="w-full" />
      <div className="grid lg:grid-cols-2 lg:gap-16 bg-lightGreen p-5 sm:p-10 lg:px-24 py-5">
        <div className="w-full lg:w-fit justify-self-end order-2 lg:order-1 mb-5 lg:mb-0">
          <img
            src={bee}
            alt="bee image"
            className="rounded-2xl w-full lg:w-fit"
          />
        </div>
        <div className="flex flex-col order-1 lg:order-2">
          <h1 className="text-2xl sm:text-3xl lg:text-6xl leading-snug mb-8">
            Why Choose Bug Bug?
          </h1>
          <p className="text-base sm:text-lg lg:text-xl">
            At Bug Bug, we prioritize sustainable growth. By merging AI with a
            respect for natural ecosystems, we provide solutions that enhance
            agricultural productivity without compromising the earth’s
            resources. Our commitment to environmental stewardship ensures that
            every Bug Bug tool not only meets today’s needs but also adapts to
            tomorrow’s challenges.
          </p>
          <button className="w-full lg:w-fit text-lightGreen uppercase bg-green hover:bg-darkGreen text-xs sm:text-sm py-5 px-6 rounded-lg tracking-widest mt-8 mb-8 lg:mb-0 lg:mt-16">
            Learn How We Make a Difference
          </button>
        </div>
      </div>
      <img src={bottomPattern} alt="bottom pattern" className="w-full" />
    </section>
  );
};

export default ChooseUs;
