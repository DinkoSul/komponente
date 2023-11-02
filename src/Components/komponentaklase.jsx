import React, { Component } from "react";

class Komponentaklase extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        {user && <p>Hello Amigo!</p>}
        {!user && <p>Hello Foe!</p>}
      </div>
    );
  }
}

export default Komponentaklase;
