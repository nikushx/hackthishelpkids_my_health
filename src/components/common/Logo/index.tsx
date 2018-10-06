import * as React from 'react';

const imgStyle: React.CSSProperties = {
  borderRadius: "50%",
  width: "250px",
  height: "250px"
}

type Props = {
  image: string;
}

class Logo extends React.Component<Props> {

  render() {
    return (
      <img src={this.props.image}
           style={imgStyle}
      />
    );
  }

}

export default Logo;
