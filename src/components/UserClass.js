import React from "react";
import { render } from "react-dom";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log("child constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rakesht90");
    const json = await data.json();
    console.log(json.name);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location } = userInfo;
    const { count, count2 } = this.state;
    console.log("child Render");
    return (
      <div>
        <h3>Name: {count}</h3> <h3>Count2: {count2}</h3>
        <button
          className="count-btn"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Count ++
        </button>
        <h3>{name}</h3>
        <h3>{location}</h3>
      </div>
    );
  }
}
export default UserClass;
