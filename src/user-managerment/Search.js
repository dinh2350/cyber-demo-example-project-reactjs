import React, { Component } from "react";
import { connect } from "react-redux";

class Search extends Component {
  render() {
    return (
      <input
        type="text"
        className="input-search form-control mb-3 w-50"
        placeholder="Search Name ..."
        onChange={(e) => {
          this.props.onKeyWord(e.target.value);
        }}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onKeyWord: (keyWord) => {
    dispatch({
      type: "CHANGE_KEY_WORD",
      payload: keyWord,
    });
  },
});

export default connect(null, mapDispatchToProps)(Search);
