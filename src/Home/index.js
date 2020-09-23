import React from "react";
import { Link } from "react-router-dom";
function index() {
  return (
    <div className="container py-5">
      <div class="row">
        <div className="col-sm-3">
          <div class="card text-left">
            <div class="card-body">
              <h4 class="card-title">
                <Link class="card-text" to="/example-div-component">
                  example-div-component
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
