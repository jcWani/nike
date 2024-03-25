import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

function SpecialOffer() {
  return (
    <section className="max-xl max-container flex flex-wrap items-center justify-center gap-10 max-xl:flex-col-reverse">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl font-bold capitalize ">
          <span className="text-coral-red"> Special </span>
          Offer
        </h2>
        <p className="info-text mt-4 ">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-6 ">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button iconUrl={arrowRight}>Shop now</Button>
          <Button
            backgroundColor="bg-white"
            textColor="text-slate-gray"
            borderColor="border-slate-gray"
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
