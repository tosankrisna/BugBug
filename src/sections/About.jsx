import aboutImage from "../assets/about.svg";

const About = () => {
  return (
    <section className="bg-white rounded-3xl lg:py-32 lg:px-24">
      <div className="grid lg:grid-cols-2">
        <div className="order-2 xl:order-1">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full px-5 md:px-10 py-16 lg:mx-0 lg:px-0 lg:py-0 lg:w-11/12 rounded-xl"
          />
        </div>
        <div className="px-5 sm:px-10 order-1 lg:order-2">
          <h1 className="text-3xl sm:text-4xl mt-14 lg:mt-0 lg:text-6xl">
            About Us
          </h1>
          <p className="mt-8 lg:mt-14 text-base sm:text-xl 2xl:text-2xl">
            Bug Bug Consulting pioneers eco-conscious, AI-driven solutions for
            insect monitoring in agriculture. Our cutting-edge tools blend
            sophisticated artificial intelligence with an organic,
            earth-inspired approach, creating sustainable practices that benefit
            both crop yields and the environment. With a minimalist, eco-modern
            design philosophy, our tools are crafted to simplify complex
            challenges, making data accessible, actionable, and aligned with
            nature’s rhythms.
          </p>
          <button className="uppercase w-full lg:w-fit bg-green hover:bg-darkGreen text-white text-xs sm:text-sm py-4 px-3 sm:py-5 sm:px-6 rounded-lg tracking-widest mt-10">
            Learn More About Our Vision
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
