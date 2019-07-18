import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import UserListing from "./UserListing";

class Leaderboard extends Component {
  render() {
    return (
      <Fragment>
        <UserListing users={this.props.users} />
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  users: store.users
});

export default connect(mapStateToProps)(Leaderboard);
