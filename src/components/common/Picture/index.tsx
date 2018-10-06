import * as React from 'react';

const imgStyle: React.CSSProperties = {
  height: "200px",
  width: "200px",
  borderRadius: '100px',
  boxShadow: '1px 1px 20px #000'
}

type Props = {
  image: string;
}

class Picture extends React.Component<Props> {
  render() {
    return (
      <img src={this.props.image}
           style={imgStyle}
           className="drillDownImage"
      />
    );
  }
}

export default Picture;
