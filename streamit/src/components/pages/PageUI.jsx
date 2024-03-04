import Header from "../header/Header";

const PageUI = ({ data }) => {
  return (
    <>
      <Header></Header>
      <div className="main-container">
        {Array.isArray(data) &&
          data.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} className="img img-auto" alt="" />
              <i className="fas fa-play fa-play-header"></i>
              <div className="title">{item.title}</div>
            </div>
          ))}
      </div>
    </>
  );
};
export default PageUI;
