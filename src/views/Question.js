import React, { Component } from "react";
import { Avatar, Card } from "@material-ui/core";
import { ThumbUpOutlined, QuestionAnswerOutlined } from "@material-ui/icons";
import userlogo from "../assets/download.png";
import loremIpsum from "../assets/Lorem-Ipsum-alternatives.png";
import "../main.css";
export default class Question extends Component {
  render() {
    return (
      <div>
        Recommended
        <Card variant="outlined" style={{ padding: "10px" }}>
          <div className="userInfo">
            <Avatar alt="Remy Sharp" src={userlogo} />
            <div className="userdetails">
              <p style={{ fontSize: "12px" }}>Random User</p>
              <p style={{ fontSize: "12px" }}>10:44 PM,April 17 2021</p>
            </div>
          </div>
          <div className="content">
            <p style={{ fontSize: "15px", fontWeight: "500" }}>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <p style={{ fontSize: "12px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img src={loremIpsum} alt="imag" style={{ width: "100%" }} />
          </div>
          <div className="postbtmbar">
            <div className="likes">
              <ThumbUpOutlined />
              <p> 120</p>
            </div>
            <div className="comments">
              <QuestionAnswerOutlined />
              <p>12</p>
            </div>

            <div className="commentBar">
              <input
                className="form-control border-0"
                type="text"
                placeholder="Comment"
                aria-label="Comment"
                style={{ backgroundColor: "#efefef", borderRadius: "10px" }}
              />
              <button color="primary" className="commentBtn">
                Comment
              </button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
