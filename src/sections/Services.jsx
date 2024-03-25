import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

function Services() {
  return (
    <section className="max-container flex flex-wrap justify-center gap-9 max-sm:flex-col">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
}

export default Services;
