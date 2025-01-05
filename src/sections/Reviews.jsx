import Card from "../components/Card";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import reviews from "../data/reviews.json";
import { useEffect, useState } from "react";
import quote from "../assets/quote.svg";
import line from "../assets/line.svg";
import next from "../assets/next.svg";
import prev from "../assets/prev.svg";

const Reviews = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const reviewCard = reviews.map((review) => (
      <div key={review.id} className="m-3">
        <Card
          style={"bg-white min-h-[400px] lg:min-h-[450px] 2xl:min-h-[350px]"}
        >
          <div className="mb-5">
            <img src={quote} className="w-9 text-lightGreen" />
          </div>
          <p className="text-base sm:text-xl italic">{review.text}</p>
          <div className="mt-8 mb-3 flex gap-5">
            <img src={line} />
            <p className="uppercase text-xs sm:text-base tracking-widest">
              {review.name}.
            </p>
          </div>
          <p className="uppercase text-xs sm:text-base tracking-widest">
            {review.job}
          </p>
        </Card>
      </div>
    ));

    setItems(reviewCard);
  }, []);

  return (
    <section className="px-5 py-24 sm:px-10 sm:py-24 lg:px-44 lg:py-32">
      <div className="flex justify-center">
        <h1 className="text-2xl sm:text-3xl lg:text-6xl">
          What Our Clients are Saying
        </h1>
      </div>
      <div className="mt-8 sm:mt-14">
        <div className="relative">
          <AliceCarousel
            items={items}
            responsive={{
              0: { items: 1 },
              1024: { items: 2 },
              1140: { items: 3 },
            }}
            renderPrevButton={() => (
              <button className="absolute left-[70px] top-[65vh] sm:left-[100px] sm:top-[60vh] lg:left-[-70px] lg:top-1/2 transform -translate-y-1/2 hover:bg-white hover:shadow-lg">
                <img src={prev} />
              </button>
            )}
            renderNextButton={() => (
              <button className="absolute right-[70px] top-[65vh] sm:right-[100px] lg:right-[-70px] sm:top-[60vh] lg:top-1/2 transform -translate-y-1/2 hover:bg-white hover:shadow-lg">
                <img src={next} />
              </button>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
