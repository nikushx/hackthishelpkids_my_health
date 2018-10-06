import * as React from 'react';

const imgStyle: React.CSSProperties = {
  height: "100px",
  width: "100px",
  float: "left"
}

type Props = {
  image: string;
}

class Picture extends React.Component<Props> {
  render() {
    return (
      <img src={this.props.image}
           style={imgStyle}
      />
    );
  }
}

export default Picture;
