const Tour = ({ img, date, title, description, country, length, price }) => {
  return (
    <>
      <article className="tour-card">
        <div className="tour-img-container">
          <img src={img} className="tour-img" alt="" />
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>Tibet Adventure</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            vitae tempore voluptatum maxime reprehenderit eum quod
            exercitationem fugit, qui corporis.
          </p>
          <div className="tour-footer">
            <p>
              <span>
                <i className="fas fa-map"></i>
              </span>{" "}
              china
            </p>
            <p>6 days</p>
            <p>from $2100</p>
          </div>
        </div>
      </article>
    </>
  );
};
export default Tour;
