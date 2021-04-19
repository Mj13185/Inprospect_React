import { Card, TextField } from "@material-ui/core";
import React, { Component } from "react";
import { NotListedLocationOutlined } from "@material-ui/icons";
import "../main.css";
import Question from "./Question";
export default class Homepage extends Component {
  render() {
    return (
      <div className="home">
        <div className="leftPane">
          <Card className="leftCard" variant="outlined">
            <div className="history">
              <h7 style={{ color: "tomato", fontSize: "15px" }}>History</h7>
              <p style={{ fontSize: "12px" }}>
                view the questions you viewed before
              </p>
            </div>
            <div
              style={{
                width: "100%",
                borderTop: "1px solid #cecece ",
              }}
            ></div>
            <div className="signup">
              <h7 style={{ color: "tomato", fontSize: "15px" }}>Sign Up</h7>
              <p style={{ fontSize: "12px" }}>
                Sign up to post, answer and much more
              </p>
            </div>
          </Card>
        </div>
        <div className="rightPane">
          <Card className="askQuestionCard" variant="outlined">
            <div className="headingQC" style={{ color: "tomato" }}>
              <NotListedLocationOutlined style={{ color: "tomato" }} />
              Have a burning question? Ask community
            </div>
            <div className="textInput">
              <TextField id="filled-basic" variant="filled" />
              <button className="postBtn">Post</button>
            </div>
          </Card>
          <div className="questionPane">
            <Question />
          </div>
        </div>
      </div>
    );
  }
}
