import Title from "../Title";
import services from "./servicesObj";
import Service from "./Service";
const Services = () => {
  return (
    <>
      <section className="section services" id="services">
        <Title tt={"our "} stt={"services"} />
        <div className="section-center services-center">
          {services.map((service) => (
            <Service {...service} key={service.id} />
          ))}
        </div>
      </section>
    </>
  );
};
export default Services;
