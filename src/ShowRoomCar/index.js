import React, { Component } from "react";

export default class BaitapShowRoomCar extends Component {
  state = {
    srcImg: "./img/car/products/red-car.jpg",
  };
  handleChangeColor = (e, linkImg) => {
    // e.preventDefault();
    this.setState({
      srcImg: linkImg,
    });
  };
  render() {
    return (
      <section className="show-room">
        <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
        <div className="container">
          <div className="chose__color d-flex justify-content-around">
            <button
              className="btn"
              onClick={(e) => {
                this.handleChangeColor(e, "./img/car/products/black-car.jpg");
              }}
            >
              <img
                src="./img/car/icons/icon-black.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              className="btn"
              onClick={(e) => {
                this.handleChangeColor(e, "./img/car/products/red-car.jpg");
              }}
            >
              <img
                src="./img/car/icons/icon-red.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              className="btn"
              onClick={(e) => {
                this.handleChangeColor(e, "./img/car/products/silver-car.jpg");
              }}
            >
              <img
                src="./img/car/icons/icon-silver.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              className="btn"
              onClick={(e) => {
                this.handleChangeColor(e, "./img/car/products/steel-car.jpg");
              }}
            >
              <img
                src="./img/car/icons/icon-steel.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
          </div>
          <div className="car mt-2">
            <img className="img-thumbnail" src={this.state.srcImg} alt="hinh" />
          </div>
        </div>
      </section>
    );
  }
}
