import * as React from 'react';
import Button from './common/Button';


class LoginButtons extends React.Component<Props> {


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
// Login with Username and Password
      <Button
          bgColor="green"
          text="Login"
          onClick={
            () => this.login()
          }
        />
// Login with Facebook
      <Button
         bgColor="blue"
         text="Login with Facebook"
         onClick={
          () => this.loginWithFacebook()
         }
      />
// Login with Google
      <Button 
        bgColor="red"
        text="Login with Google"
        onClick={
          () => this.loginWithGoogle()
         }
      
      />
        
    );
  }
}

export default LoginButtons;