import Button from "../components/Button";
import { shoe8 } from "../assets/images";

function SuperQuality() {
  return (
    <section
      id="about-us"
      className="max-container flex w-full items-center justify-between gap-10 max-lg:flex-col"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality </span>
          Shoes
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Ensuring premium comfor and style, our meticulously crafter footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button>View details</Button>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <img
          src={shoe8}
          alt="shoe"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default SuperQuality;
