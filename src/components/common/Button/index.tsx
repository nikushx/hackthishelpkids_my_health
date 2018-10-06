import * as React from 'react';

const btnStyle: React.CSSProperties = {
  width: '350px',
  height: '45px',
  marginBottom: '5px'
}

type Props = {
  bgColor: string;
  text: string;
  onClick: () => void;
}

class Button extends React.Component<Props> {

  render() {
    const btnStyleWithProps: React.CSSProperties = {
      ...btnStyle,
      backgroundColor: this.props.bgColor
    }

    return (
      <button
        style={btnStyleWithProps}
        onClick={this.props.onClick}
      >{this.props.text}</button>
    );
  }
}

export default Button;
