import React, { Component } from "react";
import Glasses from "./Glasses";
let arrProduct = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/glassesImage/v1.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/glassesImage/v2.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/glassesImage/v3.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 4,
    price: 30,
    name: "DIOR D6005U",
    url: "./img/glassesImage/v4.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 5,
    price: 30,
    name: "PRADA P8750",
    url: "./img/glassesImage/v5.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 6,
    price: 30,
    name: "PRADA P9700",
    url: "./img/glassesImage/v6.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 7,
    price: 30,
    name: "FENDI F8750",
    url: "./img/glassesImage/v7.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 8,
    price: 30,
    name: "FENDI F8500",
    url: "./img/glassesImage/v8.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 9,
    price: 30,
    name: "FENDI F4300",
    url: "./img/glassesImage/v9.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class Glass extends Component {
  state = {
    glasses: {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  handleChangeGlasses = (glasses) => {
    this.setState({
      glasses,
    });
  };

  renderGlassesList = () =>
    arrProduct.map((glasses, index) => (
      <div className="col-3" key={index}>
        <Glasses
          glasses={glasses}
          handleChangeGlasses={this.handleChangeGlasses}
        />
      </div>
    ));

  render() {
    return (
      <section
        className="glasses-app bg-dark"
        style={{
          height: "100vh",
        }}
      >
        <h2 className="text-center h2 text-white py-1">Glasses App</h2>
        <div className="d-flex justify-content-center align-items-center">
          <div className="container row">
            <section className="model d-flex justify-content-center col-5">
              <div
                className="card text-left"
                style={{
                  width: "300px",
                  position: "relative",
                }}
              >
                <img
                  className="card-img-top"
                  src="./img/glassesImage/model.jpg"
                  alt="hinh model"
                />
                <img
                  src={this.state.glasses.url}
                  alt="kinh"
                  style={{
                    width: "170px",
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: "16%",
                  }}
                />
                <div className="card-body">
                  <span className="card-title badge-danger h3 px-2 rounded">
                    ${this.state.glasses.price}
                  </span>
                  <p className="card-text mt-2">{this.state.glasses.name}</p>
                </div>
              </div>
            </section>
            <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
              {this.renderGlassesList()}
            </section>
          </div>
        </div>
      </section>
    );
  }
}
