import { UserContext } from "../utils/UserContext";
import UserClass from "./UserClass";
import Users from "./Users";
import { Component } from "react";

class About extends Component {
  constructor() {
    super();
    console.log("Parent constructor");
    this.state = {
      userInfo: {
        name: "default",
        location: "patna",
      },
    };
  }

  componentDidUpdate() {
    console.log("componentdid update");
  }
  render() {
    console.log("Parent Render");

    return (
      <div className="about-section">
        <h1 className="heading">About</h1>
        <h3 className="description">This is about Food ordering App</h3>
        <div>
          <h2>Users Details</h2>
          <UserContext.Consumer>
            {(data) => data.loggedInUser}
          </UserContext.Consumer>
          <Users name={(data) => data.loggedInUser} location="Patna" />
          <div>--------------------------------</div>
          {/* <UserClass name="Rajat" location="Delhi" />
          <UserClass name="Rajat" location="Delhi" /> */}
        </div>
      </div>
    );
  }
}
export default About;
