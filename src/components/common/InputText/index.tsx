import * as React from 'react';

const inputStyles: React.CSSProperties = {
  width: '150px',
  height: '35px',
  border: '1px solid black',
  padding: '10px',
  marginRight: '10px',
  background: 'rgba(255,255,255,0)'
}

type Props = {
    placeholder?: string;
    type: string;
    text: string;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

class InputText extends React.Component<Props> {

    render() {
      return(
        <input
          className="loginInput"
          style={inputStyles}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          value={this.props.text}
        />
      );
    }
  }
  
  export default InputText;