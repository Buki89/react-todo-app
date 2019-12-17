import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../store/actions/auth";

class LoginPage extends React.PureComponent<any, any> {
  handleLogin = () => {
    this.props.startLogin();
  };

  render() {
    return (
      <div>
        {/* TODO: button compo */}
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

const mapDispatchToProps = { startLogin };

export default connect(undefined, mapDispatchToProps)(LoginPage);

// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     store.dispatch(login(user.uid));
//     history.push("/home");
//     store.dispatch({ type: "START_SET_TASKS", payload: startSetTasks() });
//   } else {
//     store.dispatch(logout());
//   }
// });
