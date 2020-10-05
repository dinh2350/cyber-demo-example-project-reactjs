import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      username: "",
      name: "",
      email: "",
      phoneNumber: "",
      type: "User",
    };
  }

  handleOnChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    //K load lai trang
    event.preventDefault();
    this.props.onSave(this.state);
  };

  render() {
    return (
      <div
        className="form-user modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {this.props.userEdit ? "EDIT USER" : "ADD USER"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select
                    className="form-control"
                    name="type"
                    value={this.state.type}
                    onChange={this.handleOnChange}
                  >
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("this.props", this.props.userEdit);
    console.log("prevProps", prevProps.userEdit);

    if (!_.isEqual(this.props.userEdit, prevProps.userEdit)) {
      if (this.props.userEdit) {
        this.setState({
          ...this.props.userEdit,
        });
      } else {
        this.setState({
          id: "",
          username: "",
          name: "",
          email: "",
          phoneNumber: "",
          type: "User",
        });
      }
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSave: (user) => {
    dispatch({
      type: "SAVE_USER",
      payload: user,
    });
  },
});

const mapStateToProps = (state) => ({
  userEdit: state.user.userEdit,
});
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
