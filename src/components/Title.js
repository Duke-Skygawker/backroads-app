const Title = ({ tt, stt }) => {
  return (
    <div className="section-title">
      <h2>
        {tt}
        <span>{stt}</span>
      </h2>
    </div>
  );
};
export default Title;
