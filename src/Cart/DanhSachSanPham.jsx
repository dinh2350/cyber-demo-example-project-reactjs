import React, { Component } from "react";
import SanPham from "./SanPham";
export default class DanhSachSanPham extends Component {
  renderProductList = () => {
    return this.props.productList.map((item, index) => {
      return (
        <SanPham
          handleProductSelected={this.props.handleProductSelected}
          handleAddCartList={this.props.handleAddCartList}
          sanPham={item}
          key={index}
        />
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderProductList()}</div>
      </div>
    );
  }
}
