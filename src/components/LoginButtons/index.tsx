import * as React from 'react';
import Button from '../common/Button';
type ButtonType = {
  bgColor: string;
  text: string;
  onClick: () => void;
}
type State = {
  buttons: ButtonType[];
}

class LoginButtons extends React.Component<{}, State> {
  
  state: State = {
    buttons: []
  }
  componentDidMount() {
    this.setState({
      buttons: [
        {
          bgColor: 'red',
          text: 'test',
          onClick: this.login
        },
        {
          bgColor: 'red',
          text: 'test',
          onClick: this.login
        },
        {
          bgColor: 'red',
          text: 'test',
          onClick: this.login
        }
      ]
    })
  }
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

        {
          this.state.buttons.map((button, i) => {
            return(
              <Button
                bgColor={button.bgColor}
                text={button.text}
                onClick={button.onClick}
                key={i}
              />
            );            
          })
        }
      </div>
    );
  }
}

export default LoginButtons;