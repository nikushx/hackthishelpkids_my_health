import * as React from 'react';
import InputText from '../common/InputText';

type InputType = {
  placeholder: string;
  type: string;
  text: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

type State = {
  inputs: InputType[];
}

class LoginForm extends React.Component<{}, State> {
  
  state: State = {
    inputs: []
  }

  componentDidMount() {
    this.setState({
      inputs: [
        {
          placeholder: 'Username',
          type: 'text',
          text: '',
          onChange: this.onUsernameChange
        },
        {
          placeholder: 'Password',
          type: 'password',
          text: '',
          onChange: this.onPasswordChange
        }
      ]
    })
  }

  onUsernameChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      inputs: [
        {
          ...this.state.inputs[0],
          text: e.currentTarget.value

        },
        this.state.inputs[1]
      ]
    })
  }

  onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      inputs: [
        this.state.inputs[0],
        {
          ...this.state.inputs[1],
          text: e.currentTarget.value
        }
      ]
    })
  }

  render() {
    return (
      <div>
        {
          this.state.inputs.map( (input, i) => {
            return (
              <InputText
                key={i}
                text={input.text}
                placeholder={input.placeholder}
                type={input.type}
                onChange={input.onChange}
              />
            );
          } )
        }
      </div>
    );
  }
}

export default LoginForm;