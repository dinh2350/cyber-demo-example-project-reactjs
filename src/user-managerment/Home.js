import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import { connect } from "react-redux";
import Axios from "axios";
class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.props.getUserEdit();
            }}
          >
            Add User
          </button>
        </div>
        <Users
        // userList={userList}
        // delete={this.handlDelete}
        // getUserEdit={this.handleUserEdit}
        />
        <Modal
        // onSave={this.handleOnSave}
        // userEdit={this.state.userEdit}
        />
      </div>
    );
  }
  componentDidMount() {
    // call api
    Axios({
      url: "https://5f544347e5de110016d51ecc.mockapi.io/react-users",
      method: "GET",
    })
      .then((res) => {
        this.props.setUserList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUserEdit: () => {
    dispatch({
      type: "RESET_USER_EDIT",
    });
  },
  setUserList: (payload) => {
    dispatch({
      type: "SET_USER_LIST",
      payload,
    });
  },
});

export default connect(null, mapDispatchToProps)(Home);
