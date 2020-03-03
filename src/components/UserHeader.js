import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    return <div>UserHeader</div>;
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(null, { fetchUser })(UserHeader);
