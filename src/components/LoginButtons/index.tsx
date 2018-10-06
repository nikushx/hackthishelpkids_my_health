import * as React from 'react';
import Button from '../common/Button';

class LoginButtons extends React.Component {


  login() {
    alert("Login with username and password");
  }
  loginWithFacebook() {
    alert("Login with Facebook");
  }
  loginWithGoogle() {
    alert("Login with Google");
  }
  render() {
    return (
      <div>
        <Button
            bgColor="green"
            text="Login"
            onClick={
              this.login
            }
          />
        <Button
          bgColor="blue"
          text="Login with Facebook"
          onClick={
            this.loginWithFacebook
          }
        />
        <Button 
          bgColor="red"
          text="Login with Google"
          onClick={
            this.loginWithGoogle
          }
        
        />
      </div>
    );
  }
}

export default LoginButtons;