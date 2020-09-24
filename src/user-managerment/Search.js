import React, { Component } from "react";
import { connect } from "react-redux";

class Search extends Component {
  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
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
