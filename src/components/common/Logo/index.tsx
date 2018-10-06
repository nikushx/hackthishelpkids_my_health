import * as React from 'react';

const imgStyle: React.CSSProperties = {
  height: "200px",
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
