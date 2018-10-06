import * as React from 'react';

const btnStyle: React.CSSProperties = {
  width: '40px',
  height: '40px',
  position: 'absolute',
  borderRadius: '100px',
  marginBottom: '5px',
  color: 'black',
  boxShadow: '2px 2px 14px black',
  fontSize: '18px',
  cursor: 'pointer'
}

type Props = {
  bgColor: string;
  text: string;
  onClick: () => void;
}

class CircleButton extends React.Component<Props> {

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

export default CircleButton;
