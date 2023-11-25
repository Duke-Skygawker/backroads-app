import Tour from "./Tour";
import tours from "./toursObj";
import Title from "../Title";

const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <Title tt={"featured "} stt={"tours"} />

        <div className="section-center featured-center">
          {tours.map((tour) => (
            <Tour {...tour} key={tour.id} />
          ))}
        </div>
      </section>
    </>
  );
};
export default Tours;
