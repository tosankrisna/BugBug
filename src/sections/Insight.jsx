import Card from "../components/Card";
import categories from "../data/categories.json";
import img1 from "../assets/imgcategory-1.svg";
import img2 from "../assets/imgcategory-2.svg";
import img3 from "../assets/imgcategory-3.svg";
import { useEffect, useState } from "react";

const Insight = () => {
  const images = [img1, img2, img3];
  const [category, setCategory] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Show All");

  const handleCategory = (e) => {
    const categoryName = e.target.innerHTML;
    setActiveCategory(categoryName);

    if (categoryName === "Show All") {
      setCategory(categories);
    } else {
      const filteredCategory = categories.filter((data) => {
        return data.category === categoryName;
      });

      setCategory(filteredCategory);
    }
  };

  useEffect(() => {
    setCategory(categories);
  }, []);

  return (
    <section className="px-5 py-8 sm:px-10 sm:py-12 lg:px-24 lg:py-32 bg-white">
      <div className="w-full flex flex-col gap-5 lg:gap-10">
        <h1 className="text-3xl lg:text-6xl">Insights and Innovations</h1>
        <div className="flex flex-wrap lg:flex-nowrap gap-5 my-5 lg:my-10">
          <button
            onClick={handleCategory}
            className={`px-2 py-2 text-xs sm:text-base sm:px-4 sm:py-2 lg:py-3 lg:px-6 rounded-xl uppercase tracking-widest ${
              activeCategory === "Show All"
                ? "bg-lightGreen"
                : "border-1 border-lightGreen"
            }`}
          >
            Show All
          </button>
          {categories.map((data) => (
            <button
              key={data.id}
              onClick={handleCategory}
              className={`px-2 py-2 text-xs sm:text-base sm:px-4 sm:py-2 lg:py-3 lg:px-6 rounded-xl uppercase tracking-widest ${
                activeCategory === data.category
                  ? "bg-lightGreen"
                  : "border-1 border-lightGreen"
              }`}
            >
              {data.category}
            </button>
          ))}
        </div>
      </div>
      <div>
        {category.map((data) => (
          <div
            key={data.id}
            className="grid lg:grid-cols-4 gap-5 mb-5 relative group"
          >
            <Card
              style={
                "bg-primary col-span-3 grid lg:grid-cols-3 group-hover:border-1 group-hover:border-green group-hover:py-[27px] group-hover:px-[47px] box-border"
              }
            >
              <div className="flex flex-col justify-between gap-5 lg:gap-0">
                <p
                  className="text-xs sm:text-sm 2xl:text-lg tracking-widest"
                  dangerouslySetInnerHTML={{ __html: data.date }}
                />
                <button className="w-fit mb-5 lg:mb-0 py-2 px-4 2xl:py-3 2xl:px-6 rounded-lg 2xl:rounded-2xl bg-lightGreen uppercase text-xs lg:text-sm tracking-widest">
                  {data.category}
                </button>
              </div>
              <div className="col-span-2">
                <p className="text-xl sm:text-2xl 2xl:text-3xl">{data.text}</p>
              </div>
            </Card>
            <div className="hidden lg:block rounded-2xl w-full overflow-hidden">
              <img
                src={images[data.id - 1]}
                alt={data.text}
                className="w-full object-cover transition-transform duration-1000 ease-in-out transform group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="py-5 px-6 bg-green hover:bg-darkGreen text-white rounded-lg uppercase tracking-widest text-sm my-10">
          Visit Our Blog
        </button>
      </div>
    </section>
  );
};

export default Insight;
