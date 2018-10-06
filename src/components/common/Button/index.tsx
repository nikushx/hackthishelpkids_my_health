import * as React from 'react';

const btnStyle: React.CSSProperties = {
  width: '200px',
  height: '75px',
  borderRadius: '10px'
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
