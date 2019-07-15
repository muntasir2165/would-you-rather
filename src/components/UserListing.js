import React, { Component } from "react";
import User from "./User";

class UserListing extends Component {
  userScore = user =>
    Object.keys(user.questions).length + Object.keys(user.answers).length;

  sortUserIdsByScore = users =>
    Object.keys(users).sort(
      (a, b) => this.userScore(users[b]) - this.userScore(users[a])
    );

  render() {
    const sortedUserIds = this.sortUserIdsByScore(this.props.users);
    return (
      <div className="row">
        <div className="col-sm-6 offset-sm-3 offset-sm-right-3">
          {sortedUserIds.map(userId => (
            <User key={userId} user={this.props.users[userId]} />
          ))}
        </div>
      </div>
    );
  }
}

export default UserListing;
