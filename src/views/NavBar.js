import React, { useState } from "react";
import mainLogo from "../assets/logo_inprospect.png";
import { SearchRounded, HomeOutlined } from "@material-ui/icons";
import { Button, Modal } from "@material-ui/core";
import LoginPage from "./LoginPage";

import "../bootstrap.min.css";
import "../main.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="navbar_css">
      <div className="image">
        <img src={mainLogo} style={{ width: "120px" }} alt="Logo" />
      </div>
      <div className="searchBar">
        <input
          className="form-control border-0"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <SearchRounded style={{ color: "#2b3d5c" }} className="icon__search" />
      </div>
      <div className="menuIcons">
        <Button>
          <HomeOutlined style={{ color: "#FFF", marginLeft: "10px" }} />
        </Button>
      </div>

      <div className="navRight">
        <button onClick={handleOpen} className="loginButton">
          Login
        </button>
        <Modal open={open} onClose={handleClose}>
          <div
            className="modalStyle"
            style={{ width: "70%", height: "auto", borderRadius: "10px" }}
          >
            <LoginPage />
          </div>
        </Modal>
      </div>
    </div>
  );
}
