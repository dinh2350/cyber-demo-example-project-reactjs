import React, { Component } from "react";
import Product from "./Product";
export default class ProductList extends Component {
  danhSachSanPham = [
    {
      hinhAnh: "./img/sp_note7.png",
      tenSP: "Note 7",
      moTa:
        "iPhone X features a new all-screen design. Face ID, which makes your face your password",
    },
    {
      hinhAnh: "./img/sp_iphoneX.png",
      tenSP: "iPhone X",
      moTa:
        "iPhone X features a new all-screen design. Face ID, which makes your face your password",
    },
    {
      hinhAnh: "./img/sp_note7.png",
      tenSP: "Note 7",
      moTa:
        "iPhone X features a new all-screen design. Face ID, which makes your face your password",
    },
    {
      hinhAnh: "./img/sp_iphoneX.png",
      tenSP: "iPhone X",
      moTa:
        "iPhone X features a new all-screen design. Face ID, which makes your face your password",
    },
  ];

  renderDanhSachSanPham = () => {
    return this.danhSachSanPham.map((item, index) => {
      return (
        <div
          className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3"
          key={index}
        >
          <Product product={item} />
        </div>
      );
    });
  };

  render() {
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">{this.renderDanhSachSanPham()}</div>
      </section>
    );
  }
}
