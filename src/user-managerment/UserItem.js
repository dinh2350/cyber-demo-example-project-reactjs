import React, { Component } from "react";
import { connect } from "react-redux";

class UserItem extends Component {
  render() {
    let { user } = this.props;
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.props.getUserEdit(user);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.delete(user);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  delete: (user) => {
    dispatch({
      type: "DELETE_USER",
      payload: user,
    });
  },
  getUserEdit: (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  },
});

export default connect(null, mapDispatchToProps)(UserItem);
