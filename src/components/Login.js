import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  componentDidMount() {
    console.log("inside login")
  }

  render() {
console.log("id is: " + this.props.id);    return (
  <div>
    {this.props.id}
        <button onClick={ () =>   this.props.setAuthedUser("sarahedo")
}>log in</button>
      <ul>
        {Object.keys(this.props.users).map(userId => (
          <li key={userId}>
            {this.props.users[userId].name} ({userId})
          </li>
        ))}
      </ul></div>
    );
  }
}

Login.propTypes = {
  users: PropTypes.object.isRequired
};

const mapStateToProps = ({ id, users }) => ({
  id, users
});

const mapDispatchToProps = dispatch => ({
  setAuthedUser: id => dispatch(setAuthedUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
