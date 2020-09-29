import React, { Component } from "react";

export default class Glasses extends Component {
  render() {
    return (
      <button
        className="btn btn-outline-secondary"
        onClick={() => {
          this.props.handleChangeGlasses(this.props.glasses);
        }}
      >
        <img
          src={this.props.glasses.url}
          alt="hinh"
          style={{
            width: "100px",
            borderRadius: "20px",
          }}
        />
      </button>
    );
  }
}
