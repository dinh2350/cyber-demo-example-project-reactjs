import React from "react";
import { Link } from "react-router-dom";
import routesList from "../configs/routes";
function index() {
  const renderLinkList = (list) => {
    return list.map((item, index) => (
      <div className="col-sm-3" key={index}>
        <div class="card text-left">
          <div class="card-body">
            <h4 class="card-title">
              <Link class="card-text" to={item.path}>
                {item.path}
              </Link>
            </h4>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div className="container py-5">
      <div class="row">{renderLinkList(routesList)}</div>
    </div>
  );
}

export default index;
