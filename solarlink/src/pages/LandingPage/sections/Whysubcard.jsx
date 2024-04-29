const WhySubCard = ({ icon, title, description }) => {
    return (
      <div className="col">
        <div className="card why-subcard">
          <div className="card-body p-3">
            <div className={`bs-icon-md bs-icon-rounded bs-icon-primary d-flex d-xl-flex justify-content-center mx-auto align-items-xl-center d-inline-block mb-3 bs-icon bi bi-${icon}`}></div>
            <h4 className="d-flex justify-content-center card-title">{title}</h4>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    );
  };
  export default WhySubCard;