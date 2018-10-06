import * as React from 'react';
import Button from '../common/Button';
import store from '../../store';
import { push } from 'connected-react-router';

const loginButtonsStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column'
}

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
          bgColor: '#e1ffb1',
          text: 'Login',
          onClick: this.login
        },
        {
          bgColor: '#aed581',
          text: 'Login With Facebook',
          onClick: this.loginWithFacebook
        },
        {
          bgColor: '#7da453',
          text: 'Login With Google',
          onClick: this.loginWithGoogle
        }
      ]
    })
  }
  login() {
    store.dispatch(push('/portal'))
  }
  loginWithFacebook() {
    alert("Login with Facebook");
  }
  loginWithGoogle() {
    alert("Login with Google");
  }
  render() {
    return (
      <div style={loginButtonsStyle}>

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