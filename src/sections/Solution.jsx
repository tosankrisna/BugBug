import Card from "../components/Card";
import dataSolutions from "../data/solutions.json";

const Solution = () => {
  return (
    <section className="p-0 px-5 sm:py-12 lg:py-40 lg:px-24">
      <div className="grid lg:grid-cols-2">
        <div className="self-center md:px-10 pt-10 lg:px-0 lg:pt-0 lg:pr-24">
          <h1 className="text-2xl sm:text-3xl lg:text-6xl mb-5 lg:mb-10">
            Our Solutions
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl">
            Bringing precision, simplicity, and sustainability to pest
            management with advanced AI and eco-friendly design principles for a
            healthier planet and productive crops.
          </p>
          <button className="bg-green uppercase text-white py-5 px-8 rounded-lg tracking-widest text-xs sm:text-sm mt-14 hover:bg-darkGreen w-full lg:w-2/4">
            Discover Our Solutions
          </button>
        </div>
        <div className="flex flex-col gap-5 lg:gap-8 my-10 md:mx-5 lg:m-0 lg:pt-0 lg:pb-0 pt-5 pb-16">
          {dataSolutions.map((solution) => (
            <Card key={solution.id} style={"bg-white"}>
              <h1 className="text-xl sm:text-2xl lg:text-4xl mb-7">
                {solution.title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl">
                {solution.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
