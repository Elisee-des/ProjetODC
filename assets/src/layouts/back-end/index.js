import React from "react";

const Backend = ({children}) => {
    return (
        <div className="main">
          <div className="container">
              
            <div className="row margin-bottom-40">
                <div className="sidebar col-md-3 col-sm-3">
                    sidebar
                </div>
                <div className="col-md-9 col-sm-9">
                    back end
                    {children}
                </div>
            </div>
          </div>
        </div>
    )
}

export default Backend
