import * as React from 'react';

type Props = {
    styles?: React.CSSProperties;
    placeholder?: string;
    type: string;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

class InputText extends React.Component<Props> {

    render() {
      return(
        <input
            style={this.props.styles}
            type={this.props.type}
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
        />
      );
    }
  }
  
  export default InputText;