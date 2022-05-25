import React from "react";

const Fontend = ({ children }) => {
  return (
    <div className="main">
      <div className="container">
        <div className="row service-box margin-bottom-40">
          <div className="col-md-4 col-sm-4">
            <div className="service-box-heading">
              <em>
                <i className="fa fa-location-arrow blue"></i>
              </em>
              <span>Formation</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, dolore eiusmod quis tempor incididunt
              ut et dolore Ut veniam unde nostrudlaboris. Sed unde omnis iste
              natus error sit voluptatem.
            </p>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="service-box-heading">
              <em>
                <i className="fa fa-check red"></i>
              </em>
              <span>Formation</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, dolore eiusmod quis tempor incididunt
              ut et dolore Ut veniam unde nostrudlaboris. Sed unde omnis iste
              natus error sit voluptatem.
            </p>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="service-box-heading">
              <em>
                <i className="fa fa-compress green"></i>
              </em>
              <span>Formation</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, dolore eiusmod quis tempor incididunt
              ut et dolore Ut veniam unde nostrudlaboris. Sed unde omnis iste
              natus error sit voluptatem.
            </p>
          </div>
        </div>
        <div className="row quote-v1 margin-bottom-30">
          <div className="col-md-9">
            <span>
              Orange Digital Center - The Most Complete &amp; Popular Admin
              &amp; Frontend Theme
            </span>
          </div>
          <div className="col-md-3 text-right">
            <a
              className="btn-transparent"
              href="http://www.keenthemes.com/preview/index.php?theme=metronic_admin"
              target="_blank"
            >
              <i className="fa fa-rocket margin-right-10"></i>Preview Admin
            </a>
          </div>
        </div>
      </div>
      Fontend
      {children}
    </div>
  );
};

export default Fontend;
