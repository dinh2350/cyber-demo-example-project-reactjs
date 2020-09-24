import React, { Component } from "react";
import { connect } from "react-redux";
import UserItem from "./UserItem";

class Users extends Component {
  static getDerivedStateFromProps(props, state) {
    let { userList, keyWord } = props;

    userList = userList.filter((item) => {
      return item.name.toLowerCase().indexOf(keyWord.toLowerCase()) > -1;
    });
    return {
      userList: [...userList],
    };
    // return null; // ko thay đổi gì hết
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.userList.length >= 1) {
      return true; // update
    } else {
      return false; // không dược update
    }
  }

  renderTable = () => {
    let { userList } = this.state;
    return userList.map((user, index) => {
      return (
        <UserItem
          key={index}
          user={user}
          // delete={this.props.delete}
          getUserEdit={this.props.getUserEdit}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userList: state.user.userList,
  keyWord: state.user.keyWord,
});

export default connect(mapStateToProps)(Users);
