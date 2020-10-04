/**
 * các bước thực hiện :
 *    b1: xây dựng UI và vẽ ra cái sơ đồ component
 *    b2: xác định các dử liệu thay đổi để lưu vào state
 *    b3: lấy các dử liệu trong state để render ra UI
 *    b4: xây dựng chức năng xem chi tiết
 *    b5: xây dựng chức năng thêm vào giỏ hàng
 *    b6: xây dựng chức năng xóa sảm phẩm khoải giỏ hàng
 *    b7: xây dựng chức năng tăng giảm số lượng
 *    b8: hiển thị tổng số sản phẩm bên trong giỏ hàng
 */

import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import Modal from "./Modal";

export default class LiftingStateUpCart extends Component {
  state = {
    productList: [
      {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: 'AMOLED, 6.2", Full HD+',
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img/vsphone.jpg",
      },

      {
        maSP: 2,
        tenSP: "Meizu 16Xs",
        manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
        heDieuHanh: "Android 9.0 (Pie); Flyme",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 7600000,
        hinhAnh: "./img/meizuphone.jpg",
      },

      {
        maSP: 3,
        tenSP: "Iphone XS Max",
        manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
        heDieuHanh: "iOS 12",
        cameraSau: "Chính 12 MP & Phụ 12 MP",
        cameraTruoc: "7 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 27000000,
        hinhAnh: "./img/applephone.jpg",
      },
    ],
    productSelected: {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    cartList: [],
  };
  handleProductSelected = (product) => {
    this.setState({
      productSelected: product,
    });
  };

  handleAddCartList = (product) => {
    let { cartList } = this.state;
    /**
     * @index :
     *  -1 : khi không đáp ứng diều kiện
     *  index ( vị trí trong mảng ) : khi mà điêu kiện được dáp ứng
     */
    const index = cartList.findIndex((item) => item.maSP === product.maSP);
    if (index === -1) {
      // không tìm thấy
      // add vào cart
      cartList = [...cartList, { ...product, soLuong: 1 }];
    } else {
      // tìm thấy
      // cập nhất số lượng
      cartList[index].soLuong += 1;
    }

    this.setState(
      {
        cartList,
      },
      () => console.log(this.state)
    );
  };

  handleChangeQuantity = (cart, status) => {
    /**
     * @status :
     *  true : tăng
     *  false : giảm
     */
    let { cartList } = this.state;
    const index = cartList.findIndex((item) => item.maSP === cart.maSP);
    if (index !== -1) {
      // tìm thấy
      if (status) {
        // tăng
        cartList[index].soLuong++;
      } else {
        // giảm
        if (cartList[index].soLuong > 1) {
          cartList[index].soLuong--;
        }
      }
    }
    this.setState({
      cartList,
    });
  };

  handleDeleteCart = (cart) => {
    console.log(cart);
    let { cartList } = this.state;
    cartList = cartList.filter((item) => item.maSP !== cart.maSP);
    this.setState({
      cartList,
    });
  };

  renderTotalListCart = () => {
    let { cartList } = this.state;
    return cartList.reduce((total, item) => (total += item.soLuong), 0);
  };

  render() {
    return (
      <div>
        <h3 className="title text-center">Bài tập giỏ hàng</h3>
        <div className="container text-center my-2">
          <button
            className="btn btn-danger "
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.renderTotalListCart()})
          </button>
        </div>
        <DanhSachSanPham
          productList={this.state.productList}
          handleProductSelected={this.handleProductSelected}
          handleAddCartList={this.handleAddCartList}
        />
        <Modal
          handleDeleteCart={this.handleDeleteCart}
          handleChangeQuantity={this.handleChangeQuantity}
          cartList={this.state.cartList}
        />
        <div className="row">
          <div className="col-sm-5">
            <img
              className="img-fluid"
              src={this.state.productSelected.hinhAnh}
              alt=""
            />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{this.state.productSelected.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>Android 9.0 (Pie)</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>20 MP</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>Chính 48 MP & Phụ 8 MP, 5 MP</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>4 GB</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>6 GB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
