import React from "react";


const TrendingProducts = ({ imgSrc, title }) => {
  return (
    <div>
      <div className="card-body-new-products">
        <div className="card mb-3 " style={{ maxWidth: "300px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={imgSrc} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <a href="/men" className="btn btn-warning">
                  View All
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
