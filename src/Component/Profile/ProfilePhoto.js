import React, { Component } from "react";
import Photo from "../Assets/profile.jpg";

class Profile extends Component {
  render() {
    return (
      <div className="picture">
        <img className="profile" src={Photo}></img>
      </div>
    );
  }
}
export default Profile;
