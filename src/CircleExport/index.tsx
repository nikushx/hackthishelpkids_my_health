import * as React from 'react';

const btnStyle: React.CSSProperties = {
  width: '50px',
  height: '50px',
  position: 'absolute',
  borderRadius: '100px',
  marginBottom: '5px',
  color: 'black',
  boxShadow: '2px 2px 14px black',
  fontSize: '18px',
  cursor: 'pointer',
  bottom: '20px',
  right: '25px',
  backgroundImage: `url('/share.png')`,
  backgroundSize: 'contain',
  backgroundPosition: 'center'
}

type Props = {
  onClick: () => void;
}

class CircleExport extends React.Component<Props> {

  render() {
    return (
      <button
        style={btnStyle}
        onClick={this.props.onClick}
      />
    );
  }
}

export default CircleExport;
